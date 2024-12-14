import React from "react";
import { useNavigate } from "react-router";
import CategoryCard from '../components/categoryCard'
import { menClothing } from '../helper/cardApi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-25px', background: 'none' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-25px', background: 'none' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};


const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6, // Show 5 items at a time
  slidesToScroll: 6,
  rows: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

const Kids = () => {
  const navigate = useNavigate();

  const handleCardClick = (name, title) => {
    navigate(`/products/${encodeURIComponent(name)}/${encodeURIComponent(title)}`);
  }

  return (
    <div id="container" className="ml-[5px] bg-[#faf7f2] h-[100vh] w-full overflow-y-scroll hide-scrollbar overflow-x-hidden">
      <div className="mx-[15px]">
        <h2 className="flex justify-center text-3xl font-bold font1 tracking-widest text-slate-800 ">
          CLOTHING
        </h2>
        <div className="mt-6">
          <Slider {...sliderSettings} className="flex justify-start">
            {menClothing.map((category, index) => (
              <div className="p-[8px]" key={index} onClick={() => handleCardClick('Men', category.title)}>
                <CategoryCard
                  image={category.image}
                  title={category.title}
                  discount={category.discount}
                />
              </div>
            ))}
          </Slider>
        </div>

        <h2 className="flex justify-center text-3xl font-bold font1 tracking-widest text-slate-800 mt-10">
          FOOTWEAR
        </h2>
        <div className="mt-6">
          <Slider {...sliderSettings} className="flex justify-start">
            {menClothing.map((category, index) => (
              <div className="p-[8px]" key={index} onClick={() => handleCardClick('Men', category.title)}>
                <CategoryCard
                  image={category.image}
                  title={category.title}
                  discount={category.discount}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

  );
};

export default Kids;