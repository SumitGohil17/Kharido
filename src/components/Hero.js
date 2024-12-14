function Hero() {
  return (
    <section className="bg-beige py-16">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-gray-800">Experience the Brilliance of Craftsmanship</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover a world of fashion and style with our curated collection of clothing and accessories. From trendy outfits to timeless classics, find your perfect look.
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">Shop Now</button>
        </div>
        <div className="flex space-x-8">
          <img src="/hero-woman.jpg" alt="Woman with Jewelry" className="w-72 h-96 object-cover rounded-lg" />
          <img src="/hero-ring.jpg" alt="Ring in Box" className="w-72 h-96 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
