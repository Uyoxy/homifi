import React from 'react';
import Modal from 'react-modal';
import naf from '../assets/images/hhh.svg';

Modal.setAppElement('#root'); // Set the root element to avoid accessibility issues

const PropertyModal = ({ isOpen, onClose, property }) => {
  if (!property) return null; // If no property is selected, don't render anything.

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Property Details"
      className="bg-white p-8 max-w-xl mx-auto rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="text-right">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
          X
        </button>
      </div>
      <div>
        {/* Reduced image height */}
        <img src={naf} alt={property.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <p className="text-lg text-green-600">{property.price}</p>
          <p className="mt-2 text-gray-700">
            Description: {property.description || "UYO'S COMFY HOME."}
          </p>
          <div className="mt-4">
            <h4 className="font-bold">Properties:</h4>
            <ul className="list-disc pl-5">
              <li>4 Rooms</li>
              <li>Two Kitchens</li>
              <li>One Dining Area</li>
              <li>Two Swimming Pools</li>
              <li>Balcony</li>
              <li>3 Bathrooms</li>
            </ul>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={onClose}>
              Close
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PropertyModal;

