import React from 'react'
import Navbar from './customer/components/navigation/Navbar'
import HomePage from './customer/Pages/Homepage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/products/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/cart/Cart'
import Address from './customer/components/address/Address'
const App = () => {
  return (
    <div>
    
    <Navbar/>
    {/* <HomePage/> */}
    {/* <Product/> */}
    {/* <ProductDetails/> */}
    {/* <Cart/> */}
    <Address/>
    <Footer/>
    </div>
  )
}

export default App