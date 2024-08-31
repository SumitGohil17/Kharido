import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DressMaterial() {
    const { category } = useParams();
    const [isHovered, setIsHovered] = useState(false);
    const [product, setProduct] = useState([]);
  
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
      fetchbyCategory(category)
    }, []);
  
    const fetchbyCategory = async (category) => {
      try{
          let res = await fetch(`https://practice2-rho.vercel.app/api/dress?nameCategory=${category}`)
          let data = await res.json()
          setProduct(data);
      }catch (err) {
        console.log(err)
      }
    }
  
    return (
      <div id="container" className="flex bg-[#dcdcdc] h-[100v] w-full">
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
  
        <div className="bg-white w-[100%] h-[100vh] sm:ml-[5px] overflow-y-scroll">
          <div className="mx-[8px]">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
  
            <div className="mt-6 grid grid-cols-2 list-none h-[100vh] gap-x-2 sm:gap-x-2 lg:w-[90%] md:px-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xs:grid-cols-2 md:grid-cols-2">
              {product.map((product, index) => (
                <div
                  key={index}
                  className=" relative  h-[360px] sm:w-[210px] bg-gray-50  hover:shadow-2xl cursor-pointer "
                  onMouseEnter={() => setIsHovered(product.product_id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <NavLink to={`/material/${product.product_id}`}>
                    
                    {isHovered === product.product_id ? (
                      <div className="absolute top-0 left-0 right-0 bg-white">
                        <Slider {...sliderSettings}>
                          {product.images.map((image, index) => (
                            <div key={index}>
                              <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-fill h-auto w-full"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-center h-[280px] ">
                          <img loading="lazy"
                            src={product.images[0]}
                            className=" object-fill h-[280px]"
                          />
                        </div>
                      </>
                    )}
                    <div class=" absolute  inset-x-0 p-[10px] bottom-0 flex justify-between items-end content-end">
                      <div>
                        <h3 class="text-sm text-gray-700">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            {product.breadcrumbs[2].name}
                          </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">
                          {product.breadcrumbs[0].name}
                        </p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">
                      ₹{product.final_price}
                      </p>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default DressMaterial