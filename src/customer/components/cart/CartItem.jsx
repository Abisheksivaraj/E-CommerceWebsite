import { Button } from "@headlessui/react";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex items-center space-x-5">
        {/* Product Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.meesho.com/images/products/458546425/qhtsv_512.webp"
            alt="Product"
          />
        </div>

        {/* Product Details */}
        <div className="ml-5 space-y-2">
          <p className="font-semibold text-lg text-gray-800">dsfghjkl</p>
          <p className="opacity-70 text-sm">Size: L, White</p>
          <p className="opacity-70 text-sm">Seller: dgfhjk</p>

          {/* Price Section */}
          <div className="flex items-center gap-3 pt-4">
            <p className="text-xl font-semibold text-green-600">₹200</p>
            <p className="line-through text-gray-500 opacity-60">₹1000</p>
            <p className="text-[green] font-medium">33% off</p>
          </div>
        </div>
      </div>

      {/* Cart Item Actions */}
      <div className="lg:flex items-center lg:space-x-12 pt-6">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <IconButton className="hover:text-blue-600 transition duration-200 ease-in-out">
            <RemoveCircleOutline className="text-blue-400 cursor-pointer" />
          </IconButton>

          <span className="py-1 px-5 bg-gray-100 rounded-full text-gray-800 font-semibold">
            3
          </span>

          <IconButton className="hover:text-blue-600 transition duration-200 ease-in-out">
            <AddCircleOutline className="text-blue-400 cursor-pointer" />
          </IconButton>
        </div>

        {/* Remove Button */}
        <div>
          <Button className="outline-blue-400 outline text-blue-500 cursor-pointer w-[7rem] h-[2.5rem] rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg active:scale-95">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
