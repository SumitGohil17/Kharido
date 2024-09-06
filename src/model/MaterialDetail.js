import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { useLogin } from '../context/LoginContext';
import { useCard } from '../context/CartContext';
import AddCartToogle from '../components/AddCartToogle';
import { NavLink } from 'react-router-dom';
import AddCardBag from '../components/AddCardBag';
import Cart from '../components/cart';

function MaterialDetail() {
  let API = "https://practice2-rho.vercel.app/api/dressid";

  const { getSingleProduct, singleProduct } = useLogin();
  const { AddToCard } = useCard();
  console.log('Single Product:', singleProduct);
  const [qauntity, setQauntity] = useState(1);

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState('')
  const [showTailorButton, setShowTailorButton] = useState(false);
  const hideTimeoutRef = useRef(null);


  const { dressId } = useParams();

  useEffect(() => {
    if (dressId) {
      getSingleProduct(`${API}?id=${dressId}`);
    }
  }, []);

  if (!singleProduct || singleProduct.length === 0) {
    return <div>Loading...</div>;
  }

  const { product_id, title, final_price, description, images, specification, inital_price, stock } = singleProduct[0];
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

  const handleAddToCart = (e) => {
    e.preventDefault();
    AddToCard(product_id, qauntity, singleProduct)
    setIsCartVisible(true);
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (currentReviews.trim()) {
      setReviews([...reviews, currentReviews])
      setCurrentReviews('')
    }
  }

  const handleMouseEnter = () => {
    setShowTailorButton(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowTailorButton(false);
    }, 4000);
  };

  const handleMouseEnterTailor = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  const handleMouseLeaveTailor = () => {
    setShowTailorButton(false);
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
         margin-bottom: 1rem /* Gap between items */
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
      <style>{`
          .button-div .tailor-button {
            display: none;
          }
          .button-div .buy-button:hover + .tailor-button {
            display: flex;
          }
        `}
      </style>

      <div className="bg-white w-[100%] sm:ml-[5px] overflow-y-scroll scrollable-content">

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
        <div className="mx-[8px] scrollable-content">


          <div className='sm:flex w-full h-full overflow-hidden overflow-y-scroll scrollable-content'>
            <div className=" grid grid-cols-2 masonry-grid px-[10px] sm:px-0 sm:mx-[30px] justify-center w-full sm:w-[50%] ">
              {images && images.map((image, index) => (
                <div key={index} className="masonry-item">
                  <img className="h-auto max-w-full rounded-lg" src={image} alt={`Product image ${index + 1}`} />
                </div>
              ))}
            </div>
            {/* <div className=''>
                  <h1>{title}</h1>
                  <p>{product_description}</p>
                  <p>{final_price}</p>
                </div> */}

            {/* <!-- Options --> */}
            <div class="mt-4 px-[10px] sm:p-0 w-full sm:w-[50%]  lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900 "><span><s className='decoration-slate-400 mr-[4px]'>₹{inital_price ? inital_price.toLocaleString() : 'N/A'}</s></span>₹{final_price ? final_price.toLocaleString() : 'N/A'}</p>

              {/* <!-- Reviews --> */}
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
                {/* <!-- Colors --> */}
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset aria-label="Choose a color" class="mt-4">
                    <div class="flex items-center space-x-3">
                      {/* <!-- Active and Checked: "ring ring-offset-1" --> */}
                      <label aria-label="White" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                        <input type="radio" name="color-choice" value="White" class="sr-only" />
                        <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                      </label>
                      {/* <!-- Active and Checked: "ring ring-offset-1" --> */}
                      <label aria-label="Gray" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                        <input type="radio" name="color-choice" value="Gray" class="sr-only" />
                        <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
                      </label>
                      {/* <!-- Active and Checked: "ring ring-offset-1" --> */}
                      <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                        <input type="radio" name="color-choice" value="Black" class="sr-only" />
                        <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

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
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="L" class="sr-only" />
                        <span>L</span>
                        {/* <!--
                   Active: "border", Not Active: "border-2"
                 Checked: "border-indigo-500", Not Checked: "border-transparent"
                --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="XL" class="sr-only" />
                        <span>XL</span>
                        {/* <!--
                  Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="2XL" class="sr-only" />
                        <span>2XL</span>
                        {/* <!--
                           Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                          - -> */}
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="3XL" class="sr-only" />
                        <span>3XL</span>
                        {/* <!--
            Active: "border", Not Active: "border-2"
            Checked: "border-indigo-500", Not Checked: "border-transparent"
            --> */}
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
                  <button type="submit" onClick={handleAddToCart} class=" px-[10px] flex h-[50px] w-full items-center justify-center rounded-md border border-transparent bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black transition duration-200 ease-in-out  ml-[10px] text-base font-medium text-white focus:ring-offset-2">Add to Cart</button>

                  <div className='button-div relative w-full mr-[5px]'>
                    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="px-[10px] flex h-[50px] w-full items-center justify-center rounded-md border-2 bg-white text-black border-black ml-[10px] text-base font-medium hover:text-white hover:bg-black hover:transition hover:duration-200 hover:ease-in-out">Buy</button>
                    <button onMouseEnter={handleMouseEnterTailor} onMouseLeave={handleMouseLeaveTailor} className={`absolute bottom-[60px] ml-[10px] left-0 w-full px-[10px] h-[50px] items-center justify-center rounded-md border-2 border-black bg-white text-base font-medium text-black ${showTailorButton ? 'block' : 'hidden'}`}>Tailor</button>
                  </div>
                </div>
                {isCartVisible && (
                  <Cart close={handleCloseCart} />
                )}
              </form>
              <div className='mt-10'>
                <h3 class="text-sm font-medium text-gray-900">Description</h3>

                <div class="space-y-6 mt-[10px]">
                  <p class="text-base ">{title}</p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm" >
                    {specification && specification.slice(0, 6).map((spec, index) => (
                      <li class="text-gray-400" key={index}><span class="text-gray-600">{spec.key} : {spec.value}</span></li>
                    ))}
                  </ul>
                </div>


              </div>

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Details</h2>

                <div class="mt-4 space-y-6 ">
                  <p class="text-sm line-clamp-6 text-gray-600">{description}</p>
                </div>


              </div>

              <div className='mt-[10px]'>
                <h2 className='mt-[5px] '>Reviews</h2>
                <form onSubmit={handleReview} className='flex'>
                  <textarea className=' border-2 border-black w-[90%] mr-2' type="text"
                    value={currentReviews}
                    onChange={(e) => setCurrentReviews(e.target.value)}
                    placeholder="write your review" />
                  <button className='w-[80px] rounded bg-blue-500' type='submit'>Submit</button>
                </form>
                <div className='mt-[15px]' class="reviews">
                  {reviews.map((review, index) => (
                    <ul key={index}>
                      <li className='p-[10px]'>{review}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>





    //     <div className='block sm:flex sm:ml-[5px] bg-white h-full w-full'>

    //       {/* <h1>Hello {final_price}</h1>
    //       {product_details && product_details.description && (
    //         <p>{product_details.description}</p>
    //       )} */}
    //       <style>{`
    //         .masonry-grid {
    //   column-count: 2; /* Number of columns */
    //   column-gap: 1rem; /* Gap between columns */
    // }

    // .masonry-item {
    //   break-inside: avoid;
    //   margin-bottom: 1rem; /* Gap between items */
    // }
    // `}
    //       </style>



    //       {/* <div class="grid grid-cols-2  gap-4">
    //         <div class="grid gap-4">
    //           {images && (

    //             <><div>
    //               <img class="h-auto max-w-full rounded-lg" src={images[0]} alt="" />
    //             </div><div>
    //                 <img class="h-auto max-w-full rounded-lg" src={images[1]} alt="" />
    //               </div><div>
    //                 <img class="h-auto max-w-full rounded-lg" src={images[2]} alt="" />
    //               </div></>

    //           )}
    //         </div>
    //         <div class="grid gap-4">
    //           {images && (
    //             <>
    //               <div>
    //                 <img class="h-[60%]  w-full max-w-full rounded-lg" src={images[3]} alt="" />
    //               </div><div>
    //                 <img class="h-[80%] max-w-full rounded-lg" src={images[4]} alt="" />
    //               </div><div>
    //                 <img class="h-auto max-w-full rounded-lg" src={images[5]} alt="" />
    //               </div>
    //             </>
    //           )}

    //         </div>
    //         <div class="grid gap-4">
    //           <div>
    //             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
    //           </div>
    //           <div>
    //             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
    //           </div>
    //           <div>
    //             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
    //           </div>
    //         </div>
    //       </div> */}
    //       {!singleProduct ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <div className='sm:flex h-full w-full overflow-y-scroll'>
    //           <div className="masonry-grid px-[10px] sm:px-0 sm:mx-[30px] justify-center w-full sm:w-[50%] ">
    //             {images && images.map((image, index) => (
    //               <div key={index} className="masonry-item">
    //                 <img className="h-auto max-w-full rounded-lg" src={image} alt={`Product image ${index + 1}`} />
    //               </div>
    //             ))}
    //           </div>
    //           {/* <div className=''>
    //             <h1>{title}</h1>
    //             <p>{product_description}</p>
    //             <p>{final_price}</p>
    //           </div> */}

    //           {/* <!-- Options --> */}
    //           <div class="mt-4 px-[10px] sm:p-0 w-full sm:w-[50%]  lg:mt-0">
    //             <h2 class="sr-only">Product information</h2>
    //             <p class="text-3xl tracking-tight text-gray-900 "><span><s className='decoration-slate-400 mr-[4px]'>{initial_price }</s></span>{final_price}</p>

    //             {/* <!-- Reviews --> */}
    //             <div class="mt-6">
    //               <h3 class="sr-only">Reviews</h3>
    //               <div class="flex items-center">
    //                 <div class="flex items-center">
    //                   {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
    //                   <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                     <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    //                   </svg>
    //                   <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                     <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    //                   </svg>
    //                   <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                     <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    //                   </svg>
    //                   <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                     <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    //                   </svg>
    //                   <svg class="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                     <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    //                   </svg>
    //                 </div>
    //                 <p class="sr-only">4 out of 5 stars</p>
    //                 <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
    //               </div>
    //             </div>

    //             <form class="mt-10">
    //               {/* <!-- Colors --> */}
    //               <div>
    //                 <h3 class="text-sm font-medium text-gray-900">Color</h3>

    //                 <fieldset aria-label="Choose a color" class="mt-4">
    //                   <div class="flex items-center space-x-3">
    //                     {/* <!-- Active and Checked: "ring ring-offset-1" --> */}
    //                     <label aria-label="White" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
    //                       <input type="radio" name="color-choice" value="White" class="sr-only" />
    //                       <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
    //                     </label>
    //                     {/* <!-- Active and Checked: "ring ring-offset-1" --> */}
    //                     <label aria-label="Gray" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
    //                       <input type="radio" name="color-choice" value="Gray" class="sr-only" />
    //                       <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
    //                     </label>
    //                     {/* <!-- Active and Checked: "ring ring-offset-1" --> */}
    //                     <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
    //                       <input type="radio" name="color-choice" value="Black" class="sr-only" />
    //                       <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
    //                     </label>
    //                   </div>
    //                 </fieldset>
    //               </div>

    //               {/* <!-- Sizes --> */}
    //               <div class="mt-10">
    //                 <div class="flex items-center justify-between">
    //                   <h3 class="text-sm font-medium text-gray-900">Size</h3>
    //                   <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
    //                 </div>

    //                 <fieldset aria-label="Choose a size" class="mt-4">
    //                   <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" />
    //                       <span>XXS</span>
    //                       <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
    //                         <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
    //                           <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
    //                         </svg>
    //                       </span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="XS" class="sr-only" />
    //                       <span>XS</span>
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="S" class="sr-only" />
    //                       <span>S</span>
    //                       {/* <!--
    //       Active: "border", Not Active: "border-2"
    //       Checked: "border-indigo-500", Not Checked: "border-transparent"
    //     --> */}
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="M" class="sr-only" />
    //                       <span>M</span>
    //                       {/* <!--
    //       Active: "border", Not Active: "border-2"
    //       Checked: "border-indigo-500", Not Checked: "border-transparent"
    //     --> */}
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="L" class="sr-only" />
    //                       <span>L</span>
    //                       {/* <!--
    //       Active: "border", Not Active: "border-2"
    //       Checked: "border-indigo-500", Not Checked: "border-transparent"
    //     --> */}
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="XL" class="sr-only" />
    //                       <span>XL</span>
    //                       {/* <!--
    //       Active: "border", Not Active: "border-2"
    //       Checked: "border-indigo-500", Not Checked: "border-transparent"
    //     --> */}
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="2XL" class="sr-only" />
    //                       <span>2XL</span>
    //                       {/* <!--
    //       Active: "border", Not Active: "border-2"
    //       Checked: "border-indigo-500", Not Checked: "border-transparent"
    //     --> */}
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                     {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
    //                     <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
    //                       <input type="radio" name="size-choice" value="3XL" class="sr-only" />
    //                       <span>3XL</span>
    //                       {/* <!--
    //       Active: "border", Not Active: "border-2"
    //       Checked: "border-indigo-500", Not Checked: "border-transparent"
    //     --> */}
    //                       <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    //                     </label>
    //                   </div>
    //                 </fieldset>
    //               </div>

    //               <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
    //             </form>
    //             <div>
    //               <h3 class="sr-only">Description</h3>

    //               <div class="space-y-6">
    //                 <p class="text-base text-gray-900">{product_description}</p>
    //               </div>
    //             </div>

    //             <div class="mt-10">
    //               <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

    //                 <div class="mt-4">
    //                 <ul role="list" class="list-disc space-y-2 pl-4 text-sm" >
    //                 {product_specifications && product_specifications.map((spec , index) => (
    //                   <li class="text-gray-400" key={index}><span class="text-gray-600">{spec.specification_name} : {spec.specification_value}</span></li>
    //                 ))}
    //                 </ul>
    //               </div>


    //             </div>

    //             <div class="mt-10">
    //               <h2 class="text-sm font-medium text-gray-900">Details</h2>
    //               {product_details && product_details.description && (
    //                 <div class="mt-4 space-y-6">
    //                 <p class="text-sm text-gray-600">{product_details.description}</p>
    //               </div>
    //               )}

    //             </div>
    //           </div>

    //         </div>
    //       )}


    //       {/* {images && images.map((img , index) => (
    //         <div class="masonry-grid" key={index}>
    //         <div class="masonry-item" >
    //           <img src={img} alt="" />
    //         </div>
    //         </div>
    //       ))} */}

    //     </div>
  );
}

export default MaterialDetail