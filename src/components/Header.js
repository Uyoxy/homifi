import React from 'react';

const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">Johnson Maxwell</span>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
