import { useState } from 'react'

import './App.css'
import { Link, Route, Routes } from "react-router-dom";
// import ProductPage from "./componants/ProductPage";
// import Products from "./componants/Products";
// import ProductDetails from "./componants/ProductDetails";
 import Cart from "./componants/Cart";
import { cartContext } from './cartContext';
import Addcart from './componants/Addcart';
import ProDetails from './componants/ProDetails';
import Allpro from './componants/Allpro';
import Procate from './componants/Procate'
// import Cart from './componants/Cart';




function App() {

  // const [items,setItems] = useState([])

  const [cart_items_ary,set_cart_items_ary] = useState([])


 
  
 
  return (
    <>
    <cartContext.Provider value={{cart_items_ary:cart_items_ary, set_cart_items_ary:set_cart_items_ary}}>
     {/* <cartContext.Provider value={{items:items,setItems:setItems}}>
      <Routes>
    <Route path="/" element={<ProductPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:id" element={<Products />} />
    <Route path="/productdetails/:id" element={<ProductDetails />} />
    <Route path="/Allproducts" element={<Allproducts />} />
    


</Routes>
</cartContext.Provider> */}
 <Link to='/Allpro'></Link>
 <Routes>
    <Route path='/' element={<Allpro></Allpro>}></Route>
    <Route path='/Procate' element={<Procate></Procate>}></Route>
    <Route path='/Allpro' element={<Allpro></Allpro>}></Route>
    <Route path='/ProDetails/:id' element={<ProDetails></ProDetails>}></Route>
    <Route path='/Cart' element={<Cart></Cart>}></Route>
    

  </Routes>
  </cartContext.Provider>
    </>
  )
}

export default App
