import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const categoryCard = ({ image, title, discount }) => {
  return (
    <div className=" min-h-[200px]  flex flex-col place-items-center " style={{ backgroundImage : `url(${'../images/bg2.jpg'})`}}>
      <img src={image} alt={title} className="p-[5px] w-full h-[180px]  object-cover " />
      <div className='h-[50px] flex flex-col place-items-center' >
        <h3 className=" font-semibold text-[15px] line-clamp-1">{title}</h3>
        <p className="text-[10px] ">{discount}</p>
        {/* <button className="bg-orange-800 hover:bg-orange-700 text-white text-[10px] px-4 rounded">
        {buttonText}
      </button> */}
      </div>
    </div>

  );
};

export default categoryCard;
