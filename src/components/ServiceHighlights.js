
function ServiceHighlights() {
    const highlights = [
      { title: 'Certified', description: 'Available certificates of authenticity', icon: '/icon-certified.svg' },
      { title: 'Secure', description: 'Certified marketplace since 2024', icon: '/icon-secure.svg' },
      { title: 'Shipping', description: 'Free, fast, and reliable worldwide', icon: '/icon-shipping.svg' },
      { title: 'Transparent', description: 'Hassle-free return policy', icon: '/icon-transparent.svg' }
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <img src={highlight.icon} alt={highlight.title} className="mx-auto h-12 mb-4" />
              <h3 className="font-bold text-gray-800">{highlight.title}</h3>
              <p className="mt-2 text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default ServiceHighlights;
  