import React from 'react';
import { useNavigate } from 'react-router';
import { clothingHome } from './helper/cardApi'
import {  Star, Heart, Truck, RotateCcw, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from './components/Footer';

export default function Home() {

  const navigate = useNavigate();

  const handleCardClick = (name, title) => {

    navigate(`/products/${encodeURIComponent(name)}/${encodeURIComponent(title)}`);
  }
  return (
    <div className="min-h-screen bg-[#faf7f2] h-[100vh] overflow-y-scroll">

      <main className="px-6 py-8">
        <section className="items-center justify-between mb-12 sm:flex ">
          <div className="w-1/2">
            <h1 className="text-4xl font-serif mb-4">Experience the Brilliance of Craftsmanship</h1>
            <p className="text-gray-600 mb-6">Discover a world where beauty meets craftsmanship, where every piece of jewelry tells a story.</p>
            <button className="bg-[#c8a165] text-white px-6 py-2 rounded">Shop Now</button>
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
              <div key={index} className="bg-white p-4 rounded-lg" onClick={() => handleCardClick(category.name , category.title)}>
                <img src={category.image} alt={category.title} className="bg-gray-200 flex w-full h-40 rounded-lg mb-4 justify-center items-center object-cover"/>
                <h3 className="font-medium mb-1">{category.name}</h3>
                <a href="#" className="text-sm text-[#c8a165]">Explore →</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
      
    </div>
  );
}