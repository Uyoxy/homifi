import React, { useState } from "react";
import BuyTokens from "./BuyTokens"; // Make sure to import the BuyTokens component

const StatsSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle opening the modal
  const handleBuyTokensClick = () => {
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center w-full py-8 bg--50">
      {/* Main card container */}
      <div className="flex flex-col md:flex-row justify-between w-full bg-white p-6 shadow-lg rounded-lg relative mb-10">
        {/* First stat - Token Balance */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {/* Icon (replace with the correct image if needed) */}
            <span className="ml-2 font-semibold">TOKEN BALANCE</span>
          </div>
          <div className="text-2xl font-bold mt-2">NGN 345,456.00</div>
          <span
            className="text-sm text-green-600 mt-1 hover:underline cursor-pointer"
            onClick={handleBuyTokensClick}
          >
            Buy Tokens
          </span>
        </div>

        {/* Second stat - Total Properties */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">TOTAL PROPERTIES</span>
          <div className="text-3xl font-bold mt-2">65</div>
        </div>

        {/* Third stat - Pending Inspection */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">PENDING INSPECTION</span>
          <div className="text-3xl font-bold mt-2">10</div>
        </div>

        {/* Green bar at the bottom */}
        <div className="flex flex-col justify-center absolute -bottom-4 left-0 right-0 h-4 bg-green-100 w-[90%] mx-auto rounded-b-lg"></div>
        <div className="flex flex-col justify-center absolute -bottom-8 left-0 right-0 h-4 bg-green-500 w-[85%] mx-auto rounded-b-lg border"></div>
      </div>

      {/* Conditionally render the modal for buying tokens */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative">
            <BuyTokens />
            <button
              className="absolute top-2 right-2 text-white bg-red-600 px-2 py-1 rounded-full"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsSection;
