import React, { useState } from "react";
import StatsSection from "../components/StatsSection";
import bwimag from '../assets/images/bw.svg';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <StatsSection />
        <div className="flex flex-col items-center">
          <div c                            lassName="relative mb-4">
            <img
              src={profileImage || bwimag} 
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer"
            >
              Upload
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <p className="text-xl font-bold">Johnson Maxwell</p>
          <p>Narayi Pipeline Kaduna, Nigeria</p>
        </div>
      </div>
    </>
  );
};

export default Profile;