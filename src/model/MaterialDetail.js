import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { useLogin } from '../context/LoginContext';
import { useCard } from '../context/CartContext';
import Cart from '../components/cart';
import axios from 'axios';
import PaymentButton from '../components/PaymentButton';
import { useMapEvents } from "react-leaflet/hooks";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Cookies from 'js-cookie';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import Reviews from '../components/Reviews';
import { TailorTabs } from '../components/TailorTab';



function MaterialDetail() {
  let API = `${process.env.REACT_APP_PRODUCT_API}/api/dressid`;

  const { getSingleProduct, singleProduct, isLogged } = useLogin();
  console.log('Single Product:', singleProduct);
  const [qauntity, setQauntity] = useState(1);
  const [isLog, setIsLogged] = useState(Cookies.get('token'));
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState('')
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');
  const [mapData, setMapData] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selectedTailors, setSelectedTailors] = useState([]);
  const [measurementDetails, setMeasurementDetails] = useState({
    bust: '',
    waist: '',
    hips: '',
  });


  const { dressId } = useParams();

  const fetchNearbyLocations = async (latlng) => {
    const { lat: latitude, lng: longitude } = latlng;
    const response = await fetch(`https://maps.gomaps.pro/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&name=tailors&radius=500&key=${process.env.REACT_APP_MAP_API}`);
    const data = await response.json();
    if (data.results) {
      const newMarkers = await Promise.all(data.results.map(async (location) => {
        const detailsResponse = await fetch(`https://maps.gomaps.pro/maps/api/place/details/json?place_id=${location.place_id}&key=${process.env.REACT_APP_MAP_API}`);
        const detailsData = await detailsResponse.json();
        return {
          id: location.place_id,
          name: location.name,
          lat: location.geometry.location.lat,
          lng: location.geometry.location.lng,
          address: detailsData.result.formatted_address,
          rating: detailsData.result.rating,
          phone: detailsData.result.formatted_phone_number,
          website: detailsData.result.website
        };
      }));
      setMarkers(newMarkers);
    }
  };

  function LocationMarker({ setMarkers }) {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        // fetchNearbyLocations(e.latlng);
      },
    });


    return position === null ? null : (
      <Marker icon={L.icon({
        iconUrl: '/images/icons8-user-location-48.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      })} position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  const customIcon = L.icon({
    iconUrl: '/images/pin.png', // Replace with your icon URL
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  });


  useEffect(() => {
    if (dressId) {
      getSingleProduct(`${API}?id=${dressId}`);
    }
  }, []);


  if (!singleProduct || singleProduct.length === 0) {
    return <div>Loading...</div>;
  }

  const { product_id, title, final_price, description, images, specification, inital_price, stock, name } = singleProduct[0];
  console.log('Initial Price:', inital_price);

  const decrease = (e) => {
    e.preventDefault();
    setQauntity(decreaseValue => (decreaseValue > 1 ? decreaseValue - 1 : 1))
  }

  const increase = (e) => {
    e.preventDefault();
    setQauntity(increaseValue => (increaseValue < stock ? increaseValue + 1 : stock))
  }

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/card/addCard`, {
        product_id: product_id,
        quantity: qauntity,
        title: title,
        final_price: final_price,
        description: description,
        image: images[0],
      }, {
        headers: {
          Authorization: `${isLog}`
        }
      })
      if (response.status === 200) {
        alert('Product Added to Cart');
      }
      // AddToCard(product_id, qauntity, singleProduct)
      setIsCartVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (currentReviews.trim()) {
      setReviews([...reviews, currentReviews])
      setCurrentReviews('')
    }
  }

  // const handleMouseEnter = () => {
  //   setShowTailorButton(true);
  //   if (hideTimeoutRef.current) {
  //     clearTimeout(hideTimeoutRef.current);
  //   }

  // };

  // const handleMouseLeave = () => {
  //   hideTimeoutRef.current = setTimeout(() => {
  //     setShowTailorButton(false);
  //   }, 4000);
  // };

  // const handleMouseEnterTailor = () => {
  //   if (hideTimeoutRef.current) {
  //     clearTimeout(hideTimeoutRef.current);
  //   }
  // };

  // const handleMouseLeaveTailor = () => {
  //   setShowTailorButton(false);
  // };

  const handleOpenTailor = async (e) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords; // Get user's current position
        const response = await fetch(`https://maps.gomaps.pro/maps/api/place/nearbysearch/json?location=${latitude}, ${longitude}&name=restaurants&radius=500&key=${process.env.REACT_APP_MAP_API}`)
        const data = await response.json();
        await fetchNearbyLocations({ lat: latitude, lng: longitude }); // Fetch nearby tailors
        setMapData(data.results);
        setIsIframeVisible(true); // Show the iframe/modal after fetching
      }, (error) => {
        console.error('Error getting current position:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleMeasurementChange = (e) => {
    const { name, value } = e.target;
    setMeasurementDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  console.log(mapData);
  const handleMeasurementSubmit = (e) => {
    e.preventDefault();
    console.log('Measurement Details:', measurementDetails);
    setMeasurementDetails({
      bust: '',
      waist: '',
      hips: '',
    });
  };



  return (

    <div id="container" className={`flex bg-[#dcdcdc] h-full sm:h-[100vh] w-full ${isCartVisible ? 'pointer-events-none overflow-y-hidden' : 'overflow-y-scroll'}`}>
      <style>
        {`
         .slick-dots li {
            margin-right: -5px; 
            margin-left: -5px;
            margin-top: -10px;
          }

          .leaflet-container {
          width: 100%;
          height: 100%;
        }

          .searchicon {
            background-image:url('./icons8-search.svg');
            background-repeat: no-repeat;
            width: 65px;
            height: 65px;
          }

          .masonry-grid {
       column-count: 2; /* Number of columns */
      column-gap: 10px;
      row-gap: 10px; /* Gap between columns */
    }

    .masonry-item {
       break-inside: avoid;
       margin-bottom: 1rem; /* Gap between items */
     }

    .scrollable-content::-webkit-scrollbar {
        display: none;
      }

      .line-clamp {
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Number of lines to show */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
        `}
      </style>

      <div className="bg-[#faf7f2] w-[100%] overflow-y-scroll scrollable-content">
        <div className="mx-[8px]">


          <div className='sm:flex w-full h-full overflow-hidden overflow-y-scroll scrollable-content'>
            <div className=" grid grid-cols-2 masonry-grid px-[10px] sm:px-0 sm:mr-[30px] justify-center w-full h-full sm:w-[60%] ">
              {images && images.map((image, index) => (
                <div key={index} className="masonry-item">
                  <img className="h-auto max-w-full rounded-lg" src={image} alt={`Product image ${index + 1}`} />
                </div>
              ))}
            </div>

            <div class="mt-4 px-[10px] sm:p-0 w-full sm:w-[40%]  lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <h2 className='font-bold text-[24px]'>{name ? name.toUpperCase() : ''}</h2>
              <h1 className='text-[#535665] opacity-[0.8] text-[20px]'>{title}</h1>
              <hr className='my-[10px]' />
              <p class="text-3xl tracking-tight text-gray-900 mt-[15px] text-[24px]">₹{final_price ? final_price.toLocaleString() : 'N/A'}<span><s className='decoration-[#282c3f] ml-[4px] text-[20px] text-[#696e79]'>₹{inital_price ? inital_price.toLocaleString() : 'N/A'}</s></span></p>

              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                  <a href="" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{reviews.length} reviews</a>
                </div>
              </div>

              <form class="mt-10">
                {/* <!-- Sizes --> */}
                <div class="mt-10">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                  </div>

                  <fieldset aria-label="Choose a size" class="mt-4">
                    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" />
                        <span>XXS</span>
                        <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                          <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                          </svg>
                        </span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="XS" class="sr-only" />
                        <span>XS</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="S" class="sr-only" />
                        <span>S</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="M" class="sr-only" />
                        <span>M</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="L" class="sr-only" />
                        <span>L</span>

                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="XL" class="sr-only" />
                        <span>XL</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="2XL" class="sr-only" />
                        <span>2XL</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="3XL" class="sr-only" />
                        <span>3XL</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div className='flex mt-10'>
                  <button onClick={decrease} className=' mr-[5px]'>-</button>
                  <h4 className='text-gray-600'>{qauntity}</h4>
                  <button onClick={increase} className='ml-[5px]'>+</button>
                </div>
                <div className='mt-10'>
                  <div class="space-y-6 mt-[10px]">
                    <p class="text-base text-gray-600">Stock Available {stock}</p>
                  </div>
                </div>
                <div className='flex w-full'>
                  {/* <AddCardBag product={singleProduct} quantity={qauntity} /> */}
                  <button type="submit" onClick={handleAddToCart} class=" px-[10px] flex h-[50px] w-full items-center justify-center rounded-md border border-transparent bg-[#c8a165] hover:bg-white hover:border-2 hover:border-[#c8a165] hover:text-black transition duration-200 ease-in-out  ml-[10px] text-base font-medium text-white focus:ring-offset-2">Add to Cart</button>

                  <div className='button-div relative w-full mr-[5px]'>
                    <PaymentButton amount={final_price} />
                    <button onClick={handleOpenTailor} className={`absolute bottom-[60px] ml-[10px] left-0 w-full px-[10px] h-[50px] items-center justify-center rounded-md border-2 border-[#c8a165] bg-white text-base font-medium text-black`}>Tailor</button>
                  </div>
                </div>
                {isCartVisible && (
                  <Cart close={handleCloseCart} />
                )}
              </form>
              <div className='mt-[10px] p-[10px] border-2 rounded-xl border-[#c8a165] border-opacity-25'>
                <div className='mt-[10px]'>
                  <Accordion>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Description</AccordionTrigger>
                      <AccordionContent>
                        <p class="text-base px-3">{title}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div class="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Highlights</AccordionTrigger>
                      <AccordionContent>
                        <ul role="list" class="list-disc space-y-2 pl-4 text-sm" >
                          {specification && specification.map((spec, index) => (
                            <li class="text-[#535665] text-[12px] list-none" key={index}>{spec.key} <br /> <span class="text-black text-[16px]">{spec.value}</span></li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div class="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Details</AccordionTrigger>
                      <AccordionContent>
                        {description && (
                          <div class="mt-4 space-y-6 ">
                            <p class="text-sm line-clamp-6 text-gray-600">{description}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {/* <Buy product={name} /> */}

                </div>
                <div className=''>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Reviews</AccordionTrigger>
                      <AccordionContent>
                        <Reviews product_id={product_id} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {isIframeVisible && (
        <div className="iframe-container fixed inset-0 flex items-center justify-center mt-[40px] z-50 p-4">
          <div className="flex flex-col sm:flex-row rounded-lg w-full sm:w-[70%] h-[90vh] sm:h-[500px] bg-white">
            {/* Left side - Map */}
            <div className='w-full sm:w-1/2 h-[300px] sm:h-full'>
              <div className="h-full">
                <MapContainer
                  center={{ lat: 51.505, lng: -0.09 }}
                  zoom={13}
                  scrollWheelZoom={true}
                  className="h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker setMarkers={setMarkers} />
                  {markers.map(marker => (
                    <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} icon={customIcon}>
                      <Popup>
                        <div>
                          <h3 className="font-bold">{marker.name}</h3>
                          <p>Address: {marker.address}</p>
                          <p>Rating: {marker.rating} ⭐</p>
                          <p>Phone: {marker.phone}</p>
                          <a href={marker.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Website</a>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>

            {/* Right side - Tailor Selection & Booking */}
            <div className="w-full sm:w-1/2 p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Nearby Tailors</h2>
                <button
                  onClick={() => setIsIframeVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 h-[200px] mb-6 overflow-y-scroll">
                {markers.map((marker, index) => (
                  <div key={index} className="border rounded-lg p-2 sm:p-3 hover:shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          className="mt-1.5 h-4 w-4 rounded border-gray-300 text-[#c8a165] focus:ring-[#c8a165]"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedTailors(marker);
                              console.log(marker);
                            }
                          }}
                        />
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base">{marker.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{marker.address}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-400">{'⭐'.repeat(Math.floor(marker.rating))}</span>
                            <span className="text-xs sm:text-sm text-gray-600 ml-1">({marker.rating})</span>
                          </div>
                          <p className="text-xs sm:text-sm mt-1">{marker.phone}</p>
                        </div>
                      </div>
                      <button className="bg-[#c8a165] text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-[#b08c55]">
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Measurement Form */}
              <div className="border-t pt-4">
                <div className='flex w-full justify-between items-center'>
                  <h3 className="text-base sm:text-lg font-semibold mb-4">Measurement Details</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="step1">
                      <AccordionTrigger>Step's</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col items-center">
                          <img src="/images/measurement.jpg" alt="Bust measurement guide" className="w-48 sm:w-64 h-48 sm:h-64 object-contain mb-2" />
                          <p className="text-xs sm:text-sm text-gray-600">Follow the above step to measurement of your body with help of tape.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="mb-4">
                  <TailorTabs amount={final_price} selected={selectedTailors} />
                </div>

                <div className="mt-6 border-t pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="step1">
                      <AccordionTrigger>How to Take Measurements:</AccordionTrigger>
                      <AccordionContent>
                        <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-700">
                          <li>Use a flexible measuring tape</li>
                          <li>Wear fitted clothing while measuring</li>
                          <li>Keep the tape snug but not tight</li>
                          <li>Stand straight with arms relaxed</li>
                          <li>For bust: Measure around the fullest part</li>
                          <li>For waist: Measure at natural waistline</li>
                          <li>For hips: Measure around fullest part</li>
                        </ol>
                        <p className="mt-3 text-xs sm:text-sm text-gray-500">For accurate measurements, consider getting help from someone else.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialDetail