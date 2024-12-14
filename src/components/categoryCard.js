import React from 'react';
const categoryCard = ({ image, title, discount }) => {
  return (
    <div className=" min-h-[200px]  flex flex-col place-items-center rounded " style={{
      backgroundImage: ` url(${'../images/bg.jpeg'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <img src={image} alt={title} className="p-[8px] w-full h-[180px] object-cover overflow-clip" />
      <div className='h-[50px] flex flex-col place-items-center' >
        <h3 className=" font-[500] text-[#4d2f20]  text-[12px] line-clamp-1">{title}</h3>
        <p className="font-[800] text-[#4d2f20] text-[18px] ">{discount}</p>
        {/* <button className="bg-orange-800 hover:bg-orange-700 text-white text-[10px] px-4 rounded">
        {buttonText}
      </button> */}
      </div>
    </div>


  );
};

export default categoryCard;
