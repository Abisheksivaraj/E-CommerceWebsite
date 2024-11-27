import React from 'react'

import SavedAddress from './SavedAddress'
import CartItem from '../cart/CartItem';

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-sm border">
        <SavedAddress />
      </div>

      <div>
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="container mx-auto lg:grid lg:grid-cols-3 lg:px-16 relative">
            {/* Cart Items Section */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md grid gap-4">
              {[1, 1, 1, 1].map((item, index) => (
                <CartItem key={index} />
              ))}
            </div>

            {/* Price Details Section */}
            <div className="px-5 sticky top-0 h-full mt-5 lg:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="uppercase font-bold text-gray-600 pb-4">
                  Price Details
                </p>
                <hr className="border-t border-gray-200 mb-4" />

                <div className="space-y-4 font-semibold text-gray-700">
                  {/* Price Details */}
                  <div className="flex justify-between items-center">
                    <span>Price</span>
                    <span className="font-semibold text-lg">₹1000</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Discount</span>
                    <span className="font-semibold text-lg text-green-500">
                      -₹100
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Delivery Charge</span>
                    <span className="font-semibold text-lg text-yellow-500">
                      ₹50
                    </span>
                  </div>

                  <hr className="border-t border-gray-200 mb-4" />

                  {/* Total Amount */}
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-bold">Total Amount</span>
                    <span className="font-bold text-2xl text-blue-600">
                      ₹950
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Proceed To Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary