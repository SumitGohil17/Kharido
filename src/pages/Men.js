import React from "react";
import { useNavigate } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryToBag from "../components/CategoryToBag";
import { Card, CardContent } from "../components/ui/Cards"
import SalesWomen from "../components/SalesWomen";

const offers = [
  {
      id: 1,
      title: "Summer Blowout",
      discount: "60% OFF",
      query: "Sunglasses",
      category: "Beachwear & Sunglasses",
      endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      backgroundColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11392334/2024/3/22/3c8fa7e4-019c-440d-8e98-f3c46df658831711099500532-Voyage-Women-Oval-Sunglasses-A3046MG3183-4541711099500250-7.jpg",
  },
  {
      id: 2,
      title: "Sneaker Madness",
      discount: "40% OFF",
      query: "Casual Shoes",
      category: "Athletic & Casual Shoes",
      endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      backgroundColor: "bg-gradient-to-br from-purple-400 to-pink-600",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27922272/2024/5/2/20773746-6e10-46be-8ec3-becea012a6c81714630910123-Campus-Women-Textured-Lace-Up-Memory-Foam-Mesh-Sneakers-9941-11.jpg",
  },
  {
      id: 3,
      title: "Luxe Accessories",
      discount: "Buy 2 Get 1",
      query: "Accessories",
      category: "Jewelry & Watches",
      endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
      backgroundColor: "bg-gradient-to-br from-blue-400 to-indigo-600",
      image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/SEPTEMBER/14/A0DrqBEH_68f8a11655fd46bc9398b66e6d0bc6e8.jpg",
  },
  {
      id: 4,
      title: "Denim Fest",
      discount: "50% OFF",
      query: "Jackets",
      category: "Jeans & Jackets",
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
      backgroundColor: "bg-gradient-to-br from-teal-400 to-emerald-600",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20303354/2022/10/7/fd6d1cf7-d460-43f7-838b-a1dd4ed7d9d11665125008983BoStreetWomenGreyCheckedLonglineTailoredJacket1.jpg",
  },
]

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


const Men = () => {
  const navigate = useNavigate();
  const categories = [
    { name: 'Clothing', image: 'https://media.istockphoto.com/id/1404654875/photo/various-vintage-jackets-on-clothing-rack-in-second-hand-store.jpg?s=612x612&w=0&k=20&c=hxOxh89pkKR1vy9JHcnaXIw7SB73dvuz0cWrxpGsczs=', items: 1500 },
    { name: 'Footwear', image: 'https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/08/bigstock-Brown-Mens-Shoes-Penny-Loafers-387900496.jpg', items: 800 },
    { name: 'Accessories', image: 'https://img.freepik.com/premium-photo/stylish-mens-accessories-collection-with-modern-00641-03_1148322-5168.jpg', items: 1200 },
  ]

  const handleCardClick = (name, title) => {
    navigate(`/products/${encodeURIComponent(name)}/${encodeURIComponent(title)}`);
  }
  return (
    <div id="container" className="ml-[5px] bg-[#faf7f2] h-[100vh] w-full overflow-y-scroll hide-scrollbar overflow-x-hidden">
      <div className="">
        <SalesWomen handleCardClick={handleCardClick} name={'Men'} offers={offers}/>

        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer rounded-lg" onClick={() => handleCardClick('Men', category.name)}>
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-white/80">{category.items} items</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <CategoryToBag handleCLick={handleCardClick}/>
      </div>
    </div>

  );
};

export default Men;