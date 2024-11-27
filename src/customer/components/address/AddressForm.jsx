import React, { useState } from "react";
import SavedAddress from "./SavedAddress";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex justify-between gap-8 p-8 bg-gray-50">
      {/* Left Section: Saved Address */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Saved Address
        </h3>
        <div className="max-h-96 overflow-y-auto space-y-4">
          {/* Each SavedAddress component will be displayed in a scrollable container */}
          <SavedAddress />
          <SavedAddress />
          <SavedAddress />
          <SavedAddress />
        </div>
      </div>

      {/* Right Section: Delivery Address Form */}
      <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Delivery Address
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.name ? "text-sm -top-4" : "text-lg"
                }`}
              >
                Full Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.email ? "text-sm -top-4" : "text-lg"
                }`}
              >
                Email
              </label>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.phone ? "text-sm -top-4" : "text-lg"
                }`}
              >
                Phone Number
              </label>
            </div>

            {/* Address Input */}
            <div className="relative">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.address ? "text-sm -top-4" : "text-lg"
                }`}
              >
                Street Address
              </label>
            </div>

            {/* City Input */}
            <div className="relative">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="city"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.city ? "text-sm -top-4" : "text-lg"
                }`}
              >
                City
              </label>
            </div>

            {/* State Input */}
            <div className="relative">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="state"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.state ? "text-sm -top-4" : "text-lg"
                }`}
              >
                State
              </label>
            </div>

            {/* Zip Code Input */}
            <div className="relative">
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="zip"
                className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 ease-in-out ${
                  formData.zip ? "text-sm -top-4" : "text-lg"
                }`}
              >
                Zip Code
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all duration-300 ease-in-out"
            >
              Submit Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
