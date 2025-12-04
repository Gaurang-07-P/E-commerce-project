import React, { useState } from "react";
import Productdata from "../Productdata";
import { useParams } from "react-router-dom";
import Navv from "./Navv";
import { cartContext } from "../cartContext";

export default function ProductDetails() {
  let { id } = useParams();
  id = Number(id);

  // Find category containing this product ID
  let category = Productdata.find((p) =>
    p.products.find((item) => item.id === id)
  );

  
  let ProductFullData = category.products.find((item) => item.id === id);

  let additem = (i)=> {
    let add = [];
    add = cartContext.items;
    add.push(i)
    cartContext.setItems(add)
  }

 
  const [mainImg, setMainImg] = useState(ProductFullData.images[0]);

  return (
    <>
    <Navv></Navv>
    <div className="h-[92dvh] bg-gray-100 py-10 px-8">
      <div className=" mx-auto flex flex-row gap-10 max-w-6xl">

        
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white rounded-xl shadow-lg p-5">
            <img
              src={mainImg}
              alt={ProductFullData.name}
              className="h-96 w-96  transition-transform duration-300 hover:scale-105"
            />
          </div>

         
          <div className="flex gap-4 mt-5 flex-wrap justify-center">
            {ProductFullData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImg(img)}
                className={`h-20 w-20 object-cover rounded-lg  border-2 transition 
                hover:border-gray-700 hover:scale-105`}
              />
            ))}
          </div>
        </div>

       
        <div className="flex-1 bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-3xl font-bold">{ProductFullData.name}</h1>

          <p className="text-gray-600 mt-2">{ProductFullData.description}</p>

          <div className="mt-3 flex items-center gap-2">
            <p className="flex items-center gap-1 text-lg">
              <span className="font-semibold">4.3</span>
              <span className="text-yellow-500 text-xl">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-line"></i>
              </span>
            </p>
            <p className="text-blue-700">312 ratings</p>
          </div>

          <p className="text-sm text-gray-500">100+ bought in past month</p>

          <hr className="my-3" />

          
          <p className="text-4xl font-semibold text-green-700">
            {ProductFullData.price}
          </p>

          <hr className="my-3" />

          
          <div className="mt-5 space-y-2">
            <p>
              <span className="font-semibold">Battery Life: </span>
              {ProductFullData.details.battery_life}
            </p>
            <p>
              <span className="font-semibold">Water Resistance: </span>
              {ProductFullData.details.water_resistance}
            </p>
            <p>
              <span className="font-semibold">Bluetooth: </span>
              {ProductFullData.details.bluetooth}
            </p>
            <p>
              <span className="font-semibold">Charging Port: </span>
              {ProductFullData.details.charging_port}
            </p>
            <p>
              <span className="font-semibold">Special Features:</span>
              <br />
              {ProductFullData.details.special_features.map((f) => (
                <span className="block ml-2">• {f}</span>
              ))}
            </p>
          </div>

          
          <div className="mt-6 flex gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition">
              Buy Now
            </button>
            <button onClick={()=>additem(i)} className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
