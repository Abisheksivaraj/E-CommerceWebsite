import React from "react";

const AddressForm = () => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Delivery Address
      </h2>
      <form className="space-y-4">
        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            placeholder="example@mail.com"
          />
        </div>

        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            placeholder="+1234567890"
          />
        </div>

        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            id="address"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            rows="3"
            placeholder="123 Street Name, City, State"
          ></textarea>
        </div>

        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            placeholder="City"
          />
        </div>

        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="state"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            placeholder="State"
          />
        </div>

        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="zipCode"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            placeholder="Zip Code"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
