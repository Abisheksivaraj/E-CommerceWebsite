import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Homepage/HomePage";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer/Footer";
import Cart from "../components/cart/Cart";
import Product from "../../customer/components/products/Product";
import Navigation from "../components/navigation/Navigation";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Address from "../components/address/Address";
import Order from "../components/orderPage/Order";
import OrderDetails from "../components/orderPage/OrderDetails";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/register" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        {/* <OrderDetails/> */}
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouter;
