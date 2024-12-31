import { Button } from "@headlessui/react";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      CartItemId: item?._id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex items-center space-x-5">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.image}
            alt="Product"
          />
        </div>

        <div className="ml-5 space-y-2">
          <p className="font-semibold text-lg text-gray-800">
            {item.product.title}
          </p>
          <p className="opacity-70 text-sm">Size:{item.size}, White</p>
          <p className="opacity-70 text-sm">Seller: {item.product.brand}</p>

          <div className="flex items-center gap-3 pt-4">
            <p className="text-xl font-semibold text-green-600">
              ₹{item.price}
            </p>
            <p className="line-through text-gray-500 opacity-60">
              ₹{item.discountedPrice}
            </p>
            <p className="text-[green] font-medium">
              {item.discountPercent}% off
            </p>
          </div>
        </div>
      </div>

      {/* Cart Item Actions */}
      <div className="lg:flex items-center lg:space-x-12 pt-6">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
            className="hover:text-blue-600 transition duration-200 ease-in-out"
          >
            <RemoveCircleOutline className="text-blue-400 cursor-pointer" />
          </IconButton>

          <span className="py-1 px-5 bg-gray-100 rounded-full text-gray-800 font-semibold">
            {item.quantity}
          </span>

          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            // disabled={item.quantity <= 1}
            className="hover:text-blue-600 transition duration-200 ease-in-out"
          >
            <AddCircleOutline className="text-blue-400 cursor-pointer" />
          </IconButton>
        </div>

        {/* Remove Button */}
        <div>
          <Button
            onClick={handleRemoveCartItem}
            className="outline-blue-400 outline text-blue-500 cursor-pointer w-[7rem] h-[2.5rem] rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg active:scale-95"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
