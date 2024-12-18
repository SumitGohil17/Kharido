import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { clothingHome } from './helper/cardApi'
import { Star, Heart, Truck, RotateCcw, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from './components/Footer';

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCardClick = (name, title) => {
    navigate(`/products/${encodeURIComponent(name)}/${encodeURIComponent(title)}`);
  }



  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left'
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;

      current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const limitedTimeProducts = [
    {
      id: 1,
      title: "Palazzos",
      image: "https://sassafras.in/cdn/shop/products/SHPAN50365-3_204d95c6-9792-4d32-85f6-f190076bb243_1080x.jpg?v=1672289973",
      discount: "30% OFF",
      endTime: "2024-04-30",
      name: "Women"
    },
    {
      id: 2,
      title: "Perfume",
      image: "https://scentgrail.com/wp-content/uploads/2021/04/chanel-no-5-best-classic-womens-perfumes.jpg",
      price: "$79.99",
      discount: "25% OFF",
      endTime: "2024-04-28",
      name: "Women"
    },
    {
      id: 3,
      title: "Blazers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKvUwCI73jWpLJ-uWgukQkiizBIfeVa5k_g&s",
      price: "$149.99",
      discount: "40% OFF",
      endTime: "2024-04-25",
      name: "Men"
    },
    {
      id: 4,
      title: "Watches",
      image: "https://diollo.in/wp-content/uploads/2021/10/Creative-03-768x768.jpg",
      price: "$199.99",
      discount: "35% OFF",
      endTime: "2024-04-27",
      name: "Men"
    },
    {
      id: 5,
      title: "Bracelet",
      image: "https://assets.ajio.com/medias/sys_master/root/20231004/UkOe/651cf0e2ddf77915191abedb/-473Wx593H-466664191-rosegold-MODEL.jpg",
      price: "$199.99",
      discount: "35% OFF",
      endTime: "2024-04-27",
      name: "Women"
    },
    {
      id: 6,
      title: "Dupatta",
      image: "https://apisap.fabindia.com/medias/20177853-01.jpg?context=bWFzdGVyfGltYWdlc3wxOTkwNTN8aW1hZ2UvanBlZ3xhR1JoTDJoa01TODJPREkyTlRVME1UVTJOalE1TkM4eU1ERTNOemcxTTE4d01TNXFjR2N8NDc4NGJmZDNjNTViNGQwNTE4ZWMzOWVhMmJiYjI4YTY0ZDQwZWYzZTM5MDNkMzgxYmNkMjY5NmJjOTc5NGFkZA",
      price: "$199.99",
      discount: "35% OFF",
      endTime: "2024-04-27",
      name: "Women"
    },
    {
      id: 7,
      title: "Waistcoat",
      image: "https://pashtush.in/cdn/shop/products/pashtush-pashmina-pashtush-mens-woven-jacquard-waistcoat-structured-slim-fit-brown-31259843264566.jpg?v=1663423198",
      price: "$199.99",
      discount: "35% OFF",
      endTime: "2024-04-27",
      name: "Men"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] h-[100vh] overflow-y-scroll">
      <main className="px-6 py-8">
        <section className="items-center justify-between mb-12 sm:flex ">
          <div className="w-full sm:w-1/2">
            <h1 className="text-4xl font-serif mb-4 mr-10">Elevate Your Style with Premium Fashion</h1>
            <p className="text-gray-600 mb-6">Discover curated collections of trendy clothing and accessories for men and women. From casual comfort to elegant statements, find your perfect look.</p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-end space-x-4 mt-4 sm:mt-0">
            <div className="relative w-48 h-64 bg-[#e5d6c1] rounded-lg overflow-hidden">
              <img src="https://i.pinimg.com/736x/18/4e/93/184e9314659ada87c7027bfe2c7cbec0.jpg" alt="Woman wearing jewelry" className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
            <div className="relative w-48 h-64 bg-[#e5d6c1] rounded-lg overflow-hidden">
              <img src="https://media.istockphoto.com/id/1257563298/photo/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-text.jpg?b=1&s=612x612&w=0&k=20&c=2pLpczTxtUjys6Y33OKehWyqy8g98FlyCbJuUZVUv5k=" alt="Hands with ring" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>


        <section className="flex justify-between mb-12">
          {['Certified', 'Secure', 'Shipping', 'Transparent'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#c8a165] rounded-full p-3 mb-2">
                {index === 0 && <Star className="h-6 w-6 text-white" />}
                {index === 1 && <Heart className="h-6 w-6 text-white" />}
                {index === 2 && <Truck className="h-6 w-6 text-white" />}
                {index === 3 && <RotateCcw className="h-6 w-6 text-white" />}
              </div>
              <span className="text-sm font-medium">{item}</span>
              <span className="text-xs text-gray-500">
                {index === 0 && 'Available certificates of authenticity'}
                {index === 1 && 'Certified marketplace since 2024'}
                {index === 2 && 'Free, fast, and reliable worldwide'}
                {index === 3 && 'Hassle-free return policy'}
              </span>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-6">Sparkle in Love</h2>
          <div className="grid sm:grid-cols-5 gap-4">
            {clothingHome.map((category, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => handleCardClick(category.name, category.title)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">View Collection</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-800">{category.title}</h3>
                  <span className="text-[#c8a165] group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12 mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif">Product's</h2>
            <div className="flex gap-2">
              <button onClick={() => scroll('left')} className="p-2 rounded-full bg-[#c8a165] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={() => scroll('right')} className="p-2 rounded-full bg-[#c8a165] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div ref={scrollRef} className="flex gap-4 overflow-x-auto hide-scrollbar">
              {limitedTimeProducts.map((product) => (
                <div key={product.id} className="flex-none w-72">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{product.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[#c8a165] font-bold">{product.price}</span>
                        <button onClick={() => handleCardClick(product.name, product.title)} className="bg-[#c8a165] text-white px-4 py-2 rounded hover:bg-[#b08c55]">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}