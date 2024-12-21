import React, { useState } from "react";
import SavedAddress from "./SavedAddress";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { store } from "../../../State/Store";

const AddressForm = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    MobileNumber: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Form submitted", formData);

    const orderData = { formData, navigate };
    dispatch(createOrder(orderData));
  };

  return (
    <div className="flex justify-between gap-8 p-8 bg-gray-50">
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Saved Address
        </h3>
        <div className="max-h-96 overflow-y-auto space-y-4">
          {auth.user?.address.map((item) => 
            <SavedAddress address={item} />
          )}
        </div>
      </div>

      <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Delivery Address
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              {[
                {
                  name: "firstName",
                  label: "First Name",
                  value: formData.firstName,
                },
                {
                  name: "lastName",
                  label: "Last Name",
                  value: formData.lastName,
                },
              ].map((field, index) => (
                <div key={index} className="relative w-1/2">
                  <input
                    type="text"
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                    placeholder=" "
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-sm"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Street Address */}
            <div className="relative">
              <input
                type="text"
                name="address"
                value={formData.street}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 h-[6rem] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-sm"
              >
                Street Address
              </label>
            </div>

            {/* City and State */}
            <div className="flex space-x-4">
              {[
                { name: "city", label: "City", value: formData.city },
                { name: "state", label: "State", value: formData.state },
              ].map((field, index) => (
                <div key={index} className="relative w-1/2">
                  <input
                    type="text"
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                    placeholder=" "
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-sm"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {[
                {
                  name: "postalCode",
                  label: "postalCode",
                  value: formData.zip,
                },
                {
                  name: "MobileNumber",
                  label: "Mobile Number",
                  value: formData.MobileNumber,
                },
              ].map((field, index) => (
                <div key={index} className="relative w-1/2">
                  <input
                    type="text"
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                    placeholder=" "
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-sm"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all duration-300 ease-in-out"
            >
              Deliver To This Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
