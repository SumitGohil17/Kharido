import React from "react";
import { useNavigate } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryToBag from "../components/CategoryToBag";
import { Card, CardContent } from "../components/ui/Cards"
import SalesWomen from "../components/SalesWomen";

const categoriesofMen = [
  {
    name: "Shirts",
    image: "https://getketchadmin.getketch.com/product/8905745177197/660/HLSH013833_1.jpg",
    gradient: "from-blue-100 to-blue-200",
  },
  {
    name: "Tshirts",
    image: "https://img.damensch.com/products/johnny_polo_wisdom_wine_(5).jpg?fm=webp&h=500",
    gradient: "from-orange-100 to-pink-200",
  },
  {
    name: "Jeans",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/r/q/m/13-14-years-kttboysjeans51-kotty-original-imagnrd2rhs77ffx.jpeg?q=20&crop=false",
    gradient: "from-pink-200 to-purple-200",
  },
  {
    name: "Sweatshirts",
    image: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/solid_pastel_pink_men_sweatshirts_base_07_11_2023_700x933.jpg",
    gradient: "from-pink-200 to-purple-300",
  },
  // {
  //   name: "Track Pants",
  //   image: "/placeholder.svg",
  //   gradient: "from-purple-300 to-purple-400",
  // },
  {
    name: "Kurta Sets",
    image: "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_silk_kurta_set_in_resham_work_with_dupatta_for_men-sg228758_4_.jpg",
    gradient: "from-pink-100 to-pink-200",
  },
];

const offers = [
  {
    id: 1,
    title: "Summer Blowout",
    discount: "60% OFF", 
    query: "Sunglasses",
    category: "Beachwear & Sunglasses",
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), 
    backgroundColor: "bg-gradient-to-br from-amber-300 to-rose-500",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14582818/2024/6/8/cd7e4a85-961a-4e2c-a00e-df29bc7bd1c51717819948972-Voyage-Unisex-Black-Lens-Oval-Sunglasses-with-UV-Protected-L-2.jpg",
  },
  {
    id: 2,
    title: "Sneaker Madness",
    discount: "40% OFF",
    query: "Casual Shoes",
    category: "Athletic & Casual Shoes", 
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), 
    backgroundColor: "bg-gradient-to-br from-fuchsia-500 to-cyan-500",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11097160/2021/9/2/fcd672b3-9b7d-4bc2-974a-4d588a83b88c1630579627596HIGHLANDERMenWhiteSneakers1.jpg",
  },
  {
    id: 3,
    title: "Luxe Accessories",
    discount: "Buy 2 Get 1",
    query: "Accessories",
    category: "Jewelry & Watches",
    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), 
    backgroundColor: "bg-gradient-to-br from-emerald-400 to-violet-600",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29839933/2024/5/29/4316ad76-2dda-4d8e-94a3-764929dec78b1716967777514AccessoryGiftSet1.jpg",
  },
  {
    id: 4,
    title: "Denim Fest",
    discount: "50% OFF",
    query: "Jackets",
    category: "Jeans & Jackets",
    endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), 
    backgroundColor: "bg-gradient-to-br from-pink-500 to-yellow-500",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/19/cfK3eg1s_6c0ce2024c974d42b0c725ac5e49ac01.jpg",
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
        <SalesWomen handleCardClick={handleCardClick} name={'Men'} offers={offers} />

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
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <CategoryToBag handleCLick={handleCardClick} categories={categoriesofMen} type={"Men"}/>
      </div>
    </div>

  );
};

export default Men;