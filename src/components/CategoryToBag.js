import React from 'react'

function CategoryToBag({handleCLick}) {
    const categories = [
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
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">CATEGORIES TO BAG</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center transition-transform hover:scale-105"
            onClick={() => handleCLick('Men', category.name)}
          >
            <a
              className={`relative w-full aspect-square rounded-full overflow-hidden mb-4 bg-gradient-to-br ${category.gradient}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full p-0.5 rounded-full"
              />
            </a>
            <h2 className="text-lg font-medium text-gray-900">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryToBag