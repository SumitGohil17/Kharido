import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useLogin } from '../context/LoginContext';

function ProductDetails() {
  let API = "https://practice2-rho.vercel.app/api/id";

  const { getSingleProduct, singleProduct } = useLogin();
  console.log('Single Product:', singleProduct);

  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      getSingleProduct(`${API}?id=${productId}`);
    }
  }, []);

  if (!singleProduct || singleProduct.length === 0) {
    return <div>Loading...</div>;
  }

  const { product_id, title, product_description, final_price, product_details, images ,product_specifications,  initial_price } = singleProduct[0];

  return (
    <div className=' block sm:flex sm:ml-[5px] bg-white'>

      {/* <h1>Hello {final_price}</h1>
      {product_details && product_details.description && (
        <p>{product_details.description}</p>
      )} */}
      <style>{`
        .masonry-grid {
  column-count: 2; /* Number of columns */
  column-gap: 1rem; /* Gap between columns */
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem; /* Gap between items */
}
`}
      </style>



      {/* <div class="grid grid-cols-2  gap-4">
        <div class="grid gap-4">
          {images && (

            <><div>
              <img class="h-auto max-w-full rounded-lg" src={images[0]} alt="" />
            </div><div>
                <img class="h-auto max-w-full rounded-lg" src={images[1]} alt="" />
              </div><div>
                <img class="h-auto max-w-full rounded-lg" src={images[2]} alt="" />
              </div></>

          )}
        </div>
        <div class="grid gap-4">
          {images && (
            <>
              <div>
                <img class="h-[60%]  w-full max-w-full rounded-lg" src={images[3]} alt="" />
              </div><div>
                <img class="h-[80%] max-w-full rounded-lg" src={images[4]} alt="" />
              </div><div>
                <img class="h-auto max-w-full rounded-lg" src={images[5]} alt="" />
              </div>
            </>
          )}

        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
          </div>
        </div>
      </div> */}
      {!singleProduct ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="masonry-grid px-[10px] sm:px-0 sm:mx-[30px] justify-center w-full sm:w-[50%]">
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
            <p class="text-3xl tracking-tight text-gray-900 "><span><s className='decoration-slate-400 mr-[4px]'>{initial_price }</s></span>{final_price}</p>

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
                <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
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
                      {/* <!--
      Active: "border", Not Active: "border-2"
      Checked: "border-indigo-500", Not Checked: "border-transparent"
    --> */}
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
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
    --> */}
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

              <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
            </form>
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p class="text-base text-gray-900">{product_description}</p>
              </div>
            </div>

            <div class="mt-10">
              <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
              
                <div class="mt-4">
                <ul role="list" class="list-disc space-y-2 pl-4 text-sm" >
                {product_specifications && product_specifications.map((spec , index) => (
                  <li class="text-gray-400" key={index}><span class="text-gray-600">{spec.specification_name} : {spec.specification_value}</span></li>
                ))}
                </ul>
              </div>
              
              
            </div>

            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">Details</h2>
              {product_details && product_details.description && (
                <div class="mt-4 space-y-6">
                <p class="text-sm text-gray-600">{product_details.description}</p>
              </div>
              )}
              
            </div>
          </div>

        </>
      )}


      {/* {images && images.map((img , index) => (
        <div class="masonry-grid" key={index}>
        <div class="masonry-item" >
          <img src={img} alt="" />
        </div>
        </div>
      ))} */}

    </div>
  );
}

export default ProductDetails;
