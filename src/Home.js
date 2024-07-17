import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import Store from "./Store";

function Home() {
  let Api = "https://practice2-rho.vercel.app/api/gender?genderData=Men";
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
                className=" relative h-[241px] bg-gray-50 rounded-[20px] hover:shadow-2xl"
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="flex justify-center ">
                  <img
                    src={product.link}
                    className="object-fill h-[160px] overflow-hidden"
                  />
                </div>
                <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        {product.articleType}
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      {product.gender}
                    </p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">
                    {/* ${product.price} */}
                  </p>
                </div>
                {isHovered === product.id && (
                  <div className="absolute bottom-0 left-0 right-0 bg-white overflow-x-auto">
                    {/* Scroll list content */}
                    <div className="flex">
                      <img
                        src={product.link}
                        alt="Image 1"
                        className="h-[160px]"
                      />
                      {/* Add more images or content as needed */}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div class="mx-auto max-w-2xl mb-[10px] px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div class="mt-6 grid grid-cols-1 h-[100vh] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative shadow-2xl rounded-[15px] h-[220px]">
              <div class="h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-[150px]">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class=" object-contain"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-2xl rounded-[15px] h-[220px]">
              <div class="h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-[150px]">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class=" object-contain"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-2xl rounded-[15px] h-[220px]">
              <div class="h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-[150px]">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class=" object-contain"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-2xl rounded-[15px] h-[241px]">
              <div class="h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-[150px]">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class=" object-contain"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-2xl rounded-[15px] h-[220px]">
              <div class="h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-[150px]">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class=" object-contain"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-2xl rounded-[15px]">
              <div class="aspect-w-1 w-full h-[80px] overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-[150px]">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="object-cover"
                />
              </div>
              <div class="mt-4 flex justify-between items-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <img
          className="w-[30px] h-[100vh]"
          src="/images/homeIcon.png"
          alt="Home"
        />
        <img
          className="w-[30px] h-[100vh]"
          src="/images/homeIcon.png"
          alt="Home"
        /> */}
      </div>
    </div>
  );
}

export default Home;
{
  /* <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center  ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill    h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center  ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill    h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className=" flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill    h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center  ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill    h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className=" flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill  h-[160px] overflow-hidden justify-center "
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className=" flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill    h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div className=" relative h-[241px] w-[150px] bg-gray-50 rounded-[20px] hover:shadow-2xl">
              <div className="flex justify-center ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  className="object-fill h-[160px] overflow-hidden"
                />
              </div>
              <div class=" absolute inset-x-0 bottom-0 flex justify-between items-end content-end">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div> */
}
