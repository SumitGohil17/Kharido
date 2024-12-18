import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { useLogin } from '../context/LoginContext';
import { useCard } from '../context/CartContext';
import Cookies from 'js-cookie';
import AddCartToogle from '../components/AddCartToogle';
import { NavLink } from 'react-router-dom';
import AddCardBag from '../components/AddCardBag';
import axios from 'axios';
import Cart from '../components/cart';
import PaymentButton from '../components/PaymentButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import Reviews from '../components/Reviews';

function Productdetail() {
  let API = `${process.env.REACT_APP_PRODUCT_API}/api/id`;

  const { getSingleProduct, singleProduct } = useLogin();
  const { AddToCard } = useCard();
  console.log('Single Product:', singleProduct);
  const [qauntity, setQauntity] = useState(1);
  const [isLog, setIsLogged] = useState(Cookies.get('token'));
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState('')
  const [showTailorButton, setShowTailorButton] = useState(false);
  const hideTimeoutRef = useRef(null);
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');
  const iframeRef = useRef(null);


  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      getSingleProduct(`${API}?id=${productId}`);
    }
  }, []);

  if (!singleProduct || singleProduct.length === 0) {
    return <div>Loading...</div>;
  }

  const { product_id, title, product_description, final_price, product_details, images, product_specifications, initial_price, stock, breadcrumbs } = singleProduct[0];


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
        description: product_description,
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

  const handleOpenTailor = async (e) => {
    e.preventDefault();
    const garmentPhoto = images[0]; // Assuming images[0] is the desired photo
    const TRY_ON = process.env.REACT_APP_TRY_ON;
    setIframeSrc(TRY_ON);
    setIsIframeVisible(true);
  };

  // Function to send the image URL to the iframe
  const sendImageToIframe = (garmentPhoto) => {
    const iframe = iframeRef.current;

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'setGarment', url: garmentPhoto }, '*');
    } else {
      console.error('Iframe not accessible');
    }
  };

  // Handle iframe load event
  const handleIframeLoad = () => {
    const garmentPhoto = images[0]; // Assuming images[0] is the desired photo URL
    sendImageToIframe(garmentPhoto);
  };
  console.log(process.env.REACT_APP_TRY_ON);

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
              <h2 className='font-bold text-[24px]'>{title ? title.toUpperCase() : ''}</h2>
              <h1 className='text-[#535665] opacity-[0.8] text-[20px]'>{product_description}</h1>
              <hr className='my-[10px]' />
              <p class="text-3xl tracking-tight text-gray-900 mt-[15px] text-[24px]">₹{final_price ? final_price.toLocaleString() : 'N/A'}<span><s className='decoration-[#282c3f] ml-[4px] text-[20px] text-[#696e79]'>₹{initial_price ? initial_price.toLocaleString() : 'N/A'}</s></span></p>

              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
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

                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="XS" class="sr-only" />
                        <span>XS</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

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

                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="L" class="sr-only" />
                        <span>L</span>
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input type="radio" name="size-choice" value="XL" class="sr-only" />
                        <span>XL</span>

                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

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
                <div className="flex items-center justify-start mt-10 space-x-4">
                  <button
                    onClick={decrease}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#c8a165] hover:bg-[#b08c55] text-white font-medium text-lg transition duration-200"
                  >
                    -
                  </button>
                  <h4 className="text-gray-800 text-lg font-medium min-w-[30px] text-center">
                    {qauntity}
                  </h4>
                  <button
                    onClick={increase}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#c8a165] hover:bg-[#b08c55] text-white font-medium text-lg transition duration-200"
                  >
                    +
                  </button>
                </div>
                <div className='flex w-full mt-[20px]'>
                  {/* <AddCardBag product={singleProduct} quantity={qauntity} /> */}
                  <button type="submit" onClick={handleAddToCart} class=" px-[10px] flex h-[50px] w-full items-center justify-center rounded-md border border-transparent bg-[#c8a165] hover:bg-white hover:border-2 hover:border-[#c8a165] hover:text-black transition duration-200 ease-in-out  ml-[10px] text-base font-medium text-white focus:ring-offset-2">Add to Cart</button>

                  <div className='button-div relative w-full mr-[5px]'>
                    <PaymentButton amount={final_price} />
                    {breadcrumbs && breadcrumbs[0]?.name === 'Clothing' && (
                      <button
                        onClick={handleOpenTailor}
                        className={`absolute bottom-[60px] ml-[10px] left-0 w-full px-[10px] h-[50px] items-center justify-center rounded-md border-2 border-[#c8a165] bg-white text-base font-medium text-black`}
                      >
                        Try On
                      </button>
                    )}
                  </div>
                </div>
                {isCartVisible && (
                  <Cart close={handleCloseCart} />
                )}
              </form>
              <div className='mt-[10px] p-[10px] border-2 rounded-xl border-[#c8a165] border-opacity-25'>
                <div className=''>
                  <Accordion>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Description</AccordionTrigger>
                      <AccordionContent>
                        <p class="text-base px-3">{product_description}</p>
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
                          {product_specifications && product_specifications.map((spec, index) => (
                            <li class="text-[#535665] text-[12px] list-none" key={index}>{spec.specification_name} <br /> <span class="text-black text-[16px]">{spec.specification_value}</span></li>
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
                        {product_details && product_details.description && (
                          <div class="mt-4 space-y-6 ">
                            <p class="text-sm line-clamp-6 text-gray-600">{product_details.description}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
        <div className="iframe-container fixed inset-0 flex items-center justify-center mt-[40px] z-1">
          <button
            onClick={() => setIsIframeVisible(false)}
            className="absolute top-[50px] right-[30px] sm:right-[140px] bg-white text-black rounded-full p-2 z-2"
          >
            X
          </button>
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title="Virtual Try-On"
            width="80%" // Adjust width as needed
            height="80%" // Adjust height as needed
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg bg-white"
            onLoad={handleIframeLoad}
          />

        </div>
      )}
    </div>
  );
}

export default Productdetail