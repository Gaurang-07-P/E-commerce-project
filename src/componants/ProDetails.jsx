import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { cartContext } from '../cartContext'
import Addcart from './Addcart'

export default function ProDetails() {

    let params = useParams()
    let id = parseInt(params.id)
    const [ItemsUi,setItemsui] = useState();
    useEffect(()=>{
      (
        async ()=> {
            let item = await axios.get('https://dummyjson.com/products/'+ id)
            let product = item.data
            console.log(product)
           let x = (
  <div className="w-[90%] mx-auto p-5  bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* LEFT COLUMN */}
    <div className="text-center">
      <img
        src={product.thumbnail}
        alt=""
        className="w-3/4 mx-auto rounded-xl shadow-md"
      />

      <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
      <h3 className="text-gray-500 text-lg">{product.brand}</h3>

      <div className="mt-4">
        <Addcart product={product} />

      </div>

      <h3 className="text-xl font-semibold mt-6">Gallery</h3>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="w-24 h-24 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="text-sm leading-relaxed">
      <h2 className="text-2xl font-bold mb-2">Product Details</h2>

      <p><b>Description:</b> {product.description}</p>
      <p><b>Category:</b> {product.category}</p>

      <p className="text-green-600 font-semibold text-lg mt-2">
        Price: ${product.price}
      </p>

      <p><b>Discount:</b> {product.discountPercentage}%</p>
      <p><b>Rating:</b> ⭐ {product.rating}</p>
      <p><b>Stock:</b> {product.stock}</p>
      <p><b>Tags:</b> {product.tags.join(", ")}</p>

      <h3 className="text-xl font-semibold mt-5 mb-1">Specifications</h3>
      <p><b>SKU:</b> {product.sku}</p>
      <p><b>Weight:</b> {product.weight} g</p>
      <p>
        <b>Dimensions:</b> {product.dimensions.width} × {product.dimensions.height} ×{" "}
        {product.dimensions.depth}
      </p>

      <p><b>Warranty:</b> {product.warrantyInformation}</p>
      <p><b>Shipping:</b> {product.shippingInformation}</p>
      <p><b>Status:</b> {product.availabilityStatus}</p>
      <p><b>Return Policy:</b> {product.returnPolicy}</p>
      <p><b>Minimum Order:</b> {product.minimumOrderQuantity}</p>

      <h3 className="text-xl font-semibold mt-5 mb-1">Meta Info</h3>
      <p><b>Created:</b> {product.meta.createdAt}</p>
      <p><b>Updated:</b> {product.meta.updatedAt}</p>
      <p><b>Barcode:</b> {product.meta.barcode}</p>

      <img
        src={product.meta.qrCode}
        alt="QR Code"
        className="w-28 mt-3 border rounded-lg p-2"
      />

      <h3 className="text-xl font-semibold mt-6">Reviews</h3>

      <div className="space-y-3 mt-2">
        {product.reviews.map((r, index) => (
          <div
            key={index}
            className="p-3 bg-gray-50 border rounded-lg shadow-sm"
          >
            <p><b>Rating:</b> ⭐ {r.rating}</p>
            <p><b>Comment:</b> {r.comment}</p>
            <p><b>Reviewer:</b> {r.reviewerName}</p>
            <p><b>Email:</b> {r.reviewerEmail}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
            setItemsui(x)
        }
    ) ()
    },[cartContext])
    
  return (
    <div className='bg-gray-50 py-10'>
      {ItemsUi}
    </div>
  )
}
