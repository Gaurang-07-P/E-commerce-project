import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../cartContext";


export default function Addcart(props) {
  let product = props.product
let itemid = product.id

  const [count, setcount] = useState(0)

  let cartCNTX = useContext(cartContext)

  let cart_items = cartCNTX.cart_items_ary;
  let item = cart_items.find((i) => i.pid === itemid)

  useEffect(() => {
    if (item) {
      setcount(item.quantity)
    }
  }, [item])
  let increment = () => {
    let index = cart_items.findIndex((i) => i.pid === itemid);

    cart_items[index].quantity = cart_items[index].quantity + 1
    cartCNTX.set_cart_items_ary(cart_items)
    setcount(count + 1)
  }

  let decrement = ()=> {
    let idx = cart_items.findIndex((i) => i.pid === itemid)

    cart_items[idx].quantity = cart_items[idx].quantity - 1
    cartCNTX.set_cart_items_ary(cart_items)
    setcount(count - 1)
  }

  let addcart = () => {

     let cartitem = {
    pid: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity: 1
  }

    cart_items.push(cartitem)

    cartCNTX.set_cart_items_ary(cart_items)
    setcount(1)
  }
  let add_minus =  <div className="flex gap-5">
                {count==0?  <button className="h-5 w-5 p-3 bg-red-400 flex items-center justify-center">-</button> :
               <button className="h-5 w-5 p-3 bg-red-400 flex items-center justify-center" onClick={()=>decrement()}>-</button> }
                
                <h1>{count}</h1>
                

               {count==4? <button className="h-5 w-5 p-3 bg-green-400 flex items-center justify-center" disabled>+</button> :
               <button className="h-5 w-5 p-3 bg-green-400 flex items-center justify-center"  onClick={()=>increment()}>+</button> }
                
            </div>

  let ui = (count > 0) ? add_minus : <div>
    
    <input type="button" value="Add to cart" className="bg-red-400 px-2 py-1 rounded-3xl text-white " onClick={() => addcart()} />
  </div>


  return (
    <div>
      {ui}
    </div>
  )
}