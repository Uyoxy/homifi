import React from 'react';
import { AiOutlineLock, AiOutlineLogout, AiOutlineHome } from 'react-icons/ai';
import StatsSection from '../components/StatsSection';
const Settings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
         
      <StatsSection/>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <div className="space-y-4 max-w-md mx-auto"> {/* Center the container */}
  {/* Change Password */}
  <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
    <span className="text-sm">Change Password</span>
    <AiOutlineLock size={20} />
  </div>

  {/* Change Address */}
  <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
    <span className="text-sm">Change Address</span>
    <AiOutlineHome size={20} />
  </div>

  {/* Log Out Button */}
  <button className="flex items-center justify-center w-full p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
    <AiOutlineLogout size={20} className="mr-2" />
    Log Out
  </button>
</div>
    </div>
  
  );
};

export default Settings; 