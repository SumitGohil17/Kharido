import React from 'react'

function CategoryToBag({handleCLick , categories , type}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">CATEGORIES TO BAG</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories && categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center transition-transform hover:scale-105"
            onClick={() => handleCLick(type, category.name)}
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