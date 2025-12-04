import React, { useContext } from 'react'
import { cartContext } from '../cartContext'

export default function Cart() {

  let cartCNTX = useContext(cartContext)
  let cart_items = cartCNTX.cart_items_ary

  return (
    <div className="p-4 space-y-4">
      {cart_items.map((i, idx) => (
        <div key={idx} className="flex gap-4 p-4 bg-white border rounded-lg shadow">
          
          <img src={i.thumbnail} className="w-20 h-20 object-cover rounded" />
          
          <div>
            <p className="text-xl font-semibold">{i.title}</p>
            <p className="text-gray-500">₹ {i.price}</p>
            <p className="text-sm">Quantity: {i.quantity}</p>
          </div>
          
        </div>
      ))}
    </div>
  )
}
