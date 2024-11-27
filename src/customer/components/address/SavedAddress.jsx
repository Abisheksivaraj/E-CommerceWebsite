import React, { useState } from "react";

const SavedAddress = () => {
  // State to track the selection of the radio button
  const [isSelected, setIsSelected] = useState(false);

  // Function to handle the change in radio button
  const handleRadioChange = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="bg-white p-6 w-[30rem] rounded-lg shadow-lg border border-gray-200">
      <div className="space-y-4">
        {/* Name Section */}
        <div className="flex">
          <p className="text-gray-600 font-medium">Name:</p>
          <span className="text-gray-800">Abishek</span>
        </div>

        {/* Address Section */}
        <div className="flex">
          <p className="text-gray-600 font-medium">Address:</p>
          <span className="text-gray-800">123, Main Road, Chennai, 641458</span>
        </div>

        {/* Phone Number Section */}
        <div className="flex">
          <p className="text-gray-600 font-medium">Phone Number:</p>
          <span className="text-gray-800">9677953545</span>
        </div>

        {/* Radio Button for selecting the address */}
        <div className="mt-4 flex items-center">
          <input
            type="radio"
            id="useThisAddress"
            name="addressSelection"
            checked={isSelected}
            onChange={handleRadioChange}
            className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="useThisAddress" className="ml-2 text-gray-700">
            Deliver to this address
          </label>
        </div>

        {/* Show the "Deliver to this address" button when radio button is selected */}
        {isSelected && (
          <button
            type="button"
            className="mt-4 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all duration-300 ease-in-out"
          >
            Deliver to this address
          </button>
        )}
      </div>
    </div>
  );
};

export default SavedAddress;
