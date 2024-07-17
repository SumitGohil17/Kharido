import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import Store from "./Store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  let Api = "https://practice2-rho.vercel.app/api/name?nameType=Men";
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const fetchApiData = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApiData(Api);
  }, []);

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
    <div id="container" className="flex bg-[#dcdcdc] h-[100vh] ">
      <div id="NavBar" className="w-[180px] bg-white">
        <div className="flex flex-wrap flex-col ml-5 place-items-start content-between w-[90px]">
          <div class="header" className="m-2 w-[65px]">
            <img
              class="logo"
              src="./shopping-bags-svgrepo-com.svg"
              width="65px"
              alt=""
            />
          </div>
          <div id="sidebar" className="mt-[45px]">
            <ul className="list-none">
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home
                </span>
              </li>
              <li
                className="flex place-items-center mt-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/Store");
                }}
              >
                <img
                  className="w-[30px] h-[30px]"
                  src="/icons8-search.svg"
                  alt="Search"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Men
                </span>
              </li>
              <li className="flex place-items-center mt-[10px]">
                <img
                  className="w-[30px] h-[30px]"
                  src="images/icons8-t-shirt-64.png"
                  alt="Clothes"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Women
                </span>
              </li>
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home & Living
                </span>
              </li>
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home
                </span>
              </li>
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home
                </span>
              </li>
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home
                </span>
              </li>
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home
                </span>
              </li>
              <li className="flex place-items-center mt-[10px] ">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Home
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white w-[100vw] h-[100vh] ml-[5px] overflow-y-scroll ">
        <div className=" fixed flex h-[50px] w-[100vw] bg-white z-1">
          <div class="flex items-center my-[10px] max-w-md mx-auto bg-[#EEEEEE] rounded-[5px] shadow-md overflow-hidden">
            <svg
              class="w-5 h-5 text-gray-500 ml-4"
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
              class="w-full bg-[#EEEEEE] py-2 px-4 leading-tight focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="flex justify-between content-end right-0 top-0  items-end h-[30px]">
            <img
              className="w-[30px] h-[30px]"
              src="/icons8-shopping-cart-64.png"
              alt="Cart"
            />
          </div>
        </div>
        <div className="ml-[15px] mt-[50px]">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 h-[100vh] gap-x-[20px] gap-y-[20px] sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className=" relative h-[241px] bg-gray-50 rounded-[20px] hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setIsHovered(product.product_id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
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
                    <style>
                      {`
                         .slick-dots li {
                            margin-right: -5px; 
                            margin-left: -5px;
                         }
                      `}
                    </style>
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
                    <div className="flex justify-center ">
                      <img
                        src={product.images[0]}
                        className="object-fill h-[160px] w-full"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
