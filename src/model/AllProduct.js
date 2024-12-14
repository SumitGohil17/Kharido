import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useLogin } from '../context/LoginContext';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Instagram } from 'lucide-react';
import { Checkbox, FormGroup, FormControlLabel, Slider as PriceSlider } from '@mui/material';

function AllProduct() {
  const { name, title } = useParams();
  const [isHovered, setIsHovered] = useState(false);
  const { products } = useLogin();
  const [product, setProduct] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [categorySearch, setCategorySearch] = useState('');
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(name, title);


  const sliderSettings = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    if (name && title) {
      fetchbyCategory(name, title)
    }
  }, []);

  const fetchbyCategory = async (name, title) => {
    try {
      setLoading(true);
      const [res1, res2] = await Promise.all([
        fetch(`${process.env.REACT_APP_PRODUCT_API}/api/fliterCat?nameType=${name}&nameCategory=${title}`),
        fetch(`${process.env.REACT_APP_PRODUCT_API}/api/category?nameType=${name}&nameCategory=${title}`)
      ]);

      if (res1.ok && res2.ok) {
        const data1 = await res1.json();
        const data2 = await res2.json();
        setData(data1);
        setData2(data2);
        setProduct([...data1, ...data2]);

        // Find the highest price from the fetched products
        const highestPrice = Math.max(...[...data1, ...data2].map(product => product.final_price));
        setPriceRange([0, highestPrice]);
      } else {
        console.error('Error fetching data:', res1.status, res2.status);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  console.log(product);

  // Extract unique brand names from the product data
  const uniqueBrands = [...new Set(product.map(product => product.breadcrumbs[3].name))];
  const displayedBrands = showMoreBrands ? uniqueBrands : uniqueBrands.slice(0, 7);

  // Extract unique category names from the product data
  const uniqueCategories = [...new Set(product.map(product => product.breadcrumbs[2].name))];
  const displayedCategories = uniqueCategories
    .filter(category => category.toLowerCase().includes(categorySearch.toLowerCase()))
    .slice(0, showMoreCategories ? uniqueCategories.length : 7);

  //brand selection
  const handleBrandChange = (brand) => {
    setSelectedBrands(prevSelected => {
      if (prevSelected.includes(brand)) {
        return prevSelected.filter(b => b !== brand);
      } else {
        return [...prevSelected, brand];
      }
    });
  };

  //category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories(prevSelected => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter(c => c !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  //price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };


  const filteredProducts = product.filter(product => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.breadcrumbs[3].name);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.breadcrumbs[2].name);
    const priceMatch = product.final_price >= priceRange[0] && product.final_price <= priceRange[1];
    return brandMatch && categoryMatch && priceMatch;
  });

  // Handle clear all filters
  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
  };

  // Prevent background scroll when filter modal is open
  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileFilters]);

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <style>
        {`
         .slick-dots li {
           margin-right: -5px; 
             margin-left: -5px;
    
           }

           .searchicon {
             background-image:url('./icons8-search.svg');
            background-repeat: no-repeat;
             width: 65px;
             height: 65px;
           }
       `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="sm:hidden fixed bottom-4 right-4 z-50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMobileFilters(true);
            }}
            className="bg-[#c8a165] text-white p-3 rounded-full shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 sm:hidden ${showMobileFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={(e) => {
            e.stopPropagation();
            setShowMobileFilters(false);
          }}
        >
          <div
            className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl pt-6 p-4 transition-transform duration-300 transform ${showMobileFilters ? 'translate-y-0' : 'translate-y-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center bg-[#2874f0] text-white p-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <span className="ml-2 text-sm">{filteredProducts.length} Results</span>
                </div>
                <button onClick={(e) => {
                  e.stopPropagation();
                  setShowMobileFilters(false);
                }} className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between bg-white p-4 border-b">
                <span className="text-sm text-gray-500">Selected Filters</span>
                <button className="text-[#2874f0] text-sm font-medium" onClick={handleClearFilters}>
                  CLEAR ALL
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[70vh]">
              <div className="flex flex-col items-start mt-4">
                <div className='flex w-full justify-between items-center'>
                  <span className="text-gray-600 font-bold mr-2">Price Range:</span>
                  {(selectedBrands.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 5000) && (
                    <button
                      onClick={handleClearFilters}
                      className="text-[#c8a165] underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                <PriceSlider
                  value={priceRange}
                  onChange={handlePriceChange}
                  min={0}
                  max={5000}
                  step={10}
                  valueLabelDisplay="auto"
                  aria-labelledby="price-range-slider"
                />
                <div className="flex justify-between w-full">
                  <span className="text-gray-600">₹{priceRange[0]}</span>
                  <span className="text-gray-600">₹{priceRange[1]}</span>
                </div>
              </div>

              <div className="flex flex-col items-start mt-6">
                <span className="text-gray-600 font-bold mr-2">Select Brand:</span>
                <div className="flex flex-col items-start w-full">
                  <FormGroup>
                    {displayedBrands.map((brand, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                          />
                        }
                        label={brand}
                      />
                    ))}
                  </FormGroup>
                  {uniqueBrands.length > 7 && (
                    <button
                      onClick={() => setShowMoreBrands(!showMoreBrands)}
                      className="mt-2 text-blue-500"
                    >
                      {showMoreBrands ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start mt-6">
                <span className="text-gray-600 font-bold mr-2">Select Category:</span>
                <div className="flex flex-col items-start w-full">
                  <input
                    type="text"
                    placeholder="Search categories"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="my-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a165] focus:border-transparent w-full"
                  />
                  <FormGroup>
                    {displayedCategories.map((category, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                        }
                        label={category}
                      />
                    ))}
                  </FormGroup>
                  {uniqueCategories.length > 7 && (
                    <button
                      onClick={() => setShowMoreCategories(!showMoreCategories)}
                      className="mt-2 text-blue-500"
                    >
                      {showMoreCategories ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMobileFilters(false);
              }}
              className="w-full bg-[#c8a165] text-white py-3 rounded-lg mt-4"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row">
          <div className="sm:block w-full md:w-[252px] pr-8 sm:sticky ">
            <div className="hidden sm:block">
              <div className="flex flex-col items-start mt-4">
                <div className='flex w-full justify-between items-center'>
                  <span className="text-gray-600 font-bold mr-2">Price Range:</span>
                  {(selectedBrands.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 5000) && (
                    <button
                      onClick={handleClearFilters}
                      className="text-[#c8a165] underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                <PriceSlider
                  value={priceRange}
                  onChange={handlePriceChange}
                  min={0}
                  max={5000}
                  step={10}
                  valueLabelDisplay="auto"
                  aria-labelledby="price-range-slider"
                />
                <div className="flex justify-between w-full">
                  <span className="text-gray-600">₹{priceRange[0]}</span>
                  <span className="text-gray-600">₹{priceRange[1]}</span>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-gray-600 font-bold mr-2">Select Brand:</span>
                <div className="flex flex-col items-start">
                  <FormGroup>
                    {displayedBrands.map((brand, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                          />
                        }
                        label={brand}
                      />
                    ))}
                  </FormGroup>
                  {uniqueBrands.length > 7 && (
                    <button
                      onClick={() => setShowMoreBrands(!showMoreBrands)}
                      className="mt-2 text-blue-500"
                    >
                      {showMoreBrands ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-gray-600 font-bold mr-2">Select Category:</span>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    placeholder="Search categories"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="my-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a165] focus:border-transparent"
                  />
                  <FormGroup>
                    {displayedCategories.map((category, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                        }
                        label={category}
                      />
                    ))}
                  </FormGroup>
                  {uniqueCategories.length > 7 && (
                    <button
                      onClick={() => setShowMoreCategories(!showMoreCategories)}
                      className="mt-2 text-blue-500"
                    >
                      {showMoreCategories ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[calc(100%-252px)] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4 ">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-96">
                <svg className="animate-spin h-12 w-12 text-[#c8a165]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-full flex justify-center items-center h-96">
                <p className="text-xl text-gray-500">No products found</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <NavLink to={`/Men/product/${product.product_id}`} key={product.id}>
                  <div key={product.id} className="flex flex-col" onMouseEnter={() => setIsHovered(product.product_id)} onMouseLeave={() => setIsHovered(null)}>
                    <div className="relative h-80 mb-4">
                      {isHovered === product.product_id ? (
                        <div className="absolute h-80 top-0 left-0 right-0 bg-white">
                          <Slider {...sliderSettings}>
                            {product.images.map((image, index) => (
                              <div key={index}>
                                <img
                                  src={image}
                                  alt={`Image ${index + 1}`}
                                  className="object-cover h-80 w-full"
                                />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      ) : (
                        <img src={product.images[0]} alt={product.name} className="w-full h-80 object-cover" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.breadcrumbs[2].name}</h3>
                    <p className="text-gray-600 mb-2">{product.breadcrumbs[3].name}</p>
                    <p className="text-lg font-bold">₹{product.final_price}<s className='ml-[8px] text-[15px] text-[#8e979d] line-through'>₹{product.initial_price}</s></p>
                  </div>
                </NavLink>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProduct