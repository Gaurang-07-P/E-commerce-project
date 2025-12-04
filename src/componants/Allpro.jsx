import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Addcart from './Addcart'
import Navv from './Navv'

export default function Allpro() {
  const [items, setItems] = useState([])
  const [itemsUI, setitemsUi] = useState([])
  useEffect(() => {

    let x = async () => {
      let d = await axios.get('https://dummyjson.com/products')
      setItems(d.data.products)
    }
    x()
    let p = items.map((i) => {
      return<div className="bg-white shadow-lg mt-20 rounded-xl p-5 flex flex-col gap-3 hover:shadow-2xl transition-all duration-300">

  <img 
    src={i.thumbnail} 
    alt={i.title} 
    className="w-full h-60 object-cover rounded-lg"
  />

  <div className="text-lg font-semibold text-gray-800">
    {i.title}
  </div>

  <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
    ₹{i.price}
    <span className="text-red-500 text-sm font-semibold">
      {i.discountPercentage}% OFF
    </span>
  </div>

  <Addcart product={i} />

  <Link 
    to={`/Prodetails/${i.id}`} 
    className="text-blue-600 underline mt-2 hover:text-blue-800 transition"
  >
    View details
  </Link>
</div>

    })
    setitemsUi(p)
  }, [items])

  return (
    <>    
    <Navv></Navv>
    <div className='h-screen'>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {itemsUI}
      </div>
    </div>
    </>

  )
}
