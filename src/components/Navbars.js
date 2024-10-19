import React, { useState } from 'react';
import Notifications from './Notifications'; 
import bwImage from '../assets/images/bw.svg';
import { FiAlignJustify, FiBell } from "react-icons/fi";

const Navbars = ({ onToggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  // Function to toggle notifications visibility
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <nav className="w-full bg-white shadow-md flex justify-between items-center p-4 relative">
      {/* Hamburger Icon */}
      <div className="w-10 h-10 flex items-center justify-center lg:hidden" onClick={onToggleSidebar}>
        <FiAlignJustify className="w-full h-full text-black-500 cursor-pointer" />
      </div>
      
      {/* User Info with Bell Icon */}
      <div className="flex items-center">
        <div className=" mr-4">
          <button
            onClick={toggleNotifications} // Toggle on click
            className="bg-gray-200 p-2 rounded-full"
          >
            <FiBell />
          </button>
          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute top-14 right-[1rem] w-full md:w-[80%] z-[999] bg-white shadow-lg rounded-md ">
              <Notifications />
            </div>
          )}
        </div>
        
        <div className="flex items-center bg-blue-600 border-r rounded-full">
          <img
            src={bwImage} 
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2">Johnson Maxwell ▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;