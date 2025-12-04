import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const [categoryProducts, setCategoryProducts] = useState([])


  useEffect(() => {
    (async () => {
      const pro = await axios.get("https://dummyjson.com/products/categories")
      setProduct(pro.data.name);
    })()
  }, [])

  
  const products = async (i) => {
    const result = await axios.get(
      `https://dummyjson.com/products/category/${i}`
    )
    setCategoryProducts(result.data.products);
  }

  return (
    <div className="p-6"> 

      {/* Product Detail */}
      <h1 className="text-2xl font-bold">{product.title}</h1>

      {/* Category button */}
      {product.category && (
        <button
          onClick={() => products(product.category)}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          {product.category}
        </button>
      )}

      {/* Show category products */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {categoryProducts.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <img
              src={item.thumbnail}
              className="w-full h-32 object-cover rounded"
              alt=""
            />
            <h2 className="font-semibold mt-2">{item.title}</h2>
            <p className="text-sm text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
