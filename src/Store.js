import React,{useEffect, useState} from 'react'

function Store() {

    let Api = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const fetchApiData = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApiData(Api);
  }, []);

  return (
    <div id="container" className="flex bg-[#dcdcdc] h-[100vh]">
    <div className="grid grid-cols-3 gap-4 p-4 overflow-y-scroll"> {/* Adjust grid-cols-3 to control the number of columns */}
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow"> {/* Individual product card */}
          <img src={product.image}/>
            <h2 className="text-xl font-bold">{product.name}</h2> {/* Example product property */}
            <p className="text-gray-700">{product.description}</p> {/* Example product property */}
            <p className="text-gray-900">${product.price}</p> {/* Example product property */}
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  </div>
  )
}

export default Store