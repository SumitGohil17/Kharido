
function ProductShowcase() {
    const categories = ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Pendants'];
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sparkle in Love</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {categories.map((category) => (
              <div key={category} className="text-center">
                <img src={`/category-${category.toLowerCase()}.jpg`} alt={category} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="mt-4 text-gray-800">{category}</h3>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">Explore +</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProductShowcase;
  