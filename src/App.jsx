import React from 'react'
import Navbar from './customer/components/navigation/Navbar'
import HomePage from './customer/Pages/Homepage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/products/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/cart/Cart'
import Address from './customer/components/address/Address'
import Order from './customer/components/orderPage/Order'
import OrderDetails from './customer/components/orderPage/OrderDetails'
import { Route, Routes } from 'react-router-dom'
import CustomerRouter from './customer/Router/CustomerRouter'
const App = () => {
  return (
    <div>
    
    <Routes>
      <Route path='/*' element={<CustomerRouter/>}/>
    </Routes>


    
    
   
    </div>
  )
}

export default App