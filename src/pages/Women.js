import React from "react";
import { useNavigate } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryToBag from "../components/CategoryToBag";
import { Card, CardContent } from "../components/ui/Cards"
import SalesWomen from "../components/SalesWomen";

const categoriesForWomen = [
  {
    name: "Shirts",
    image: "https://www.swaroopfashion.com/wp-content/uploads/2021/08/Women-Blue-Embroidered-Cotton-Shirt.jpg",
    gradient: "from-pink-100 to-pink-300",
  },
  {
    name: "Tshirts", 
    image: "https://images.bestsellerclothing.in/data/only/24-sep-2024/900750801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto",
    gradient: "from-purple-100 to-purple-300",
  },
  {
    name: "Jeans",
    image: "https://offduty.in/cdn/shop/files/IMG_9910_1080x.heic?v=1718019207", 
    gradient: "from-rose-100 to-rose-300",
  },
  {
    name: "Sweatshirts",
    image: "https://assets.ajio.com/medias/sys_master/root/20240313/Yi9o/65f1920316fd2c6e6a54fcf4/-473Wx593H-469500833-beige-MODEL.jpg",
    gradient: "from-fuchsia-100 to-fuchsia-300",
  },
  // {
  //   name: "Track Pants",
  //   image: "/placeholder.svg",
  //   gradient: "from-purple-300 to-purple-400",
  // },
  {
    name: "Kurta Sets",
    image: "https://www.jiomart.com/images/product/original/rvn5qwbc9i/sancia-women-georgette-kurta-palazzo-set-for-women-girls-ethnic-wear-for-women-indian-dress-for-women-kurta-set-with-dupatta-floral-embroidered-kurta-grey-m-product-images-rvn5qwbc9i-0-202311071229.jpg",
    gradient: "from-violet-100 to-violet-300",
  },
];


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
    query: "Jewellery Set",
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
    { name: 'Clothing', image: 'https://www.safeguardstorage.co.nz/wp-content/uploads/2024/03/Copy-of-Copy-of-ContainerCo-Images-1-1080x630.png', items: 1500 },
    { name: 'Footwear', image: 'https://www.shoetree.io/cdn/shop/products/PFJV0120660_Gold_1.jpg?v=1640943266&width=533', items: 800 },
    { name: 'Accessories', image: 'https://shopbloomingdaily.com/cdn/shop/products/trending-fall-accessories-gold-jewelry-for-women-accessories-418442.jpg?v=1693284817', items: 1200 },
  ]

  const handleCardClick = (name, title) => {
    navigate(`/products/${encodeURIComponent(name)}/${encodeURIComponent(title)}`);
  }
  return (
    <div id="container" className="bg-[#faf7f2] h-[100vh] w-full overflow-y-scroll hide-scrollbar overflow-x-hidden">
      <div className="">
        <SalesWomen handleCardClick={handleCardClick} name={'Women'} offers={offers} />

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
        <CategoryToBag handleCLick={handleCardClick} categories={categoriesForWomen} type={"Women"}/>
      </div>
    </div>

  );
};

export default Men;