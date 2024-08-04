import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useLogin } from "../context/LoginContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Men() {
  const [isHovered, setIsHovered] = useState(false);
  const { products } = useLogin();


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

  return (
    <div id="container" className="flex bg-[#dcdcdc] h-[100vh] w-full">
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

        {/* <div className=" grid grid-cols-2 fixed top-0 w-[100%] h-[50px] bg-[#fff]  z-1">
          <div className="flex w-14 my-[10px] bg-[#EEEEEE] rounded-[5px]">
            <svg
              class="w-5 h-5 text-gray-500 ml-4 md:block hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              class="w-full bg-[#EEEEEE] py-2 px-4 leading-tight focus:outline-none md:block hidden "
              type="text"
              placeholder="Search..."
            />  
          </div>
          <div id="sideMenu" className="h-full w-full flex justify-end items-center right-0 ">
            <ul className="flex float-right h-full  text-[#282c3f] tracking-[.3px] sent">
             
            <li
                className="w-max justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1 block md:hidden "
              >
                <div className="md:hidden block">
                <img src="./icons8-search.svg" className="w-6 h-6" />
            
            </div>
            </li>
              <li
                className="w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1"
              >
                <h1 className="px-3 text-center text-xs relative">
                  <span className="text-lg block absolute -top-5 left-1/3">
                    <img src="./images/profile.png" alt="profile" className="w-[25px] h-[25px]"  />
                  </span>{" "}
                  <span className="block">Profile</span>{" "}
                </h1>
              </li>
              <li className="w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ">
                  <h1 className="px-3 text-xs text-center relative">
                    <span className="text-lg absolute -top-5 left-1/3">
                      <img src="./images/heart.png" alt="watchlist"  className="w-[25px] h-[25px]" />
                    </span>
                    Wishlist
                  </h1>
            
              </li>
              <li className="w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ">
          
                  <h1 className="px-3 text-xs text-center relative">
                    <span className="text-lg absolute -top-5 left-1/3">
                      <img src="./images/shopping-bag.png" alt="" className="w-[25px] h-[25px]" />
                    </span>
                    Bag
                  </h1>{" "}
                
              </li>
            </ul>
          </div>
        </div> */}
        <div className="mx-[8px]">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-2 h-[100vh] gap-x-[20px] gap-y-[20px] sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className=" relative h-[241px]  bg-gray-50 rounded-[20px] hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setIsHovered(product.product_id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <NavLink to={`/product/${product.product_id}`}>
                  <div class=" absolute inset-x-0 p-[10px] bottom-0 flex justify-between items-end content-end">
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
                      {product.final_price}
                    </p>
                  </div>
                  {isHovered === product.product_id ? (
                    <div className="absolute top-0 left-0 right-0 bg-white">
                      <Slider {...sliderSettings}>
                        {product.images.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`Image ${index + 1}`}
                              className="object-fill h-[160px] w-full"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-center h-[160px] ">
                        <img loading="lazy"
                          src={product.images[0]}
                          className=" object-fit  w-full"
                        />
                      </div>
                    </>
                  )}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Men