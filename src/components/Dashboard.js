import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
// import propertyImage from "../src/assets/images/hhh.svg"; // Use your image path

const Dashboard = () => {
	const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePropertyClick = (property) => {
    console.log('Property clicked:', property); // Debug log
    setSelectedProperty(property); // Set the selected property for the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProperty(null); // Reset the selected property
  };
	const properties = [
		{
			id: 1,
			name: "Two Bedroom Self-Condo",
			price: "NGN 5,600,000/Yr",
			status: "Occupied",
			// image: propertyImage,
		},
		{
			id: 2,
			name: "Three Bedroom Luxury Suite",
			price: "NGN 8,000,000/Yr",
			status: "Unoccupied",
			// image: propertyImage,
		},
		{
			id: 3,
			name: "Studio Apartment",
			price: "NGN 3,200,000/Yr",
			status: "Occupied",
			// image: propertyImage,
		},
		{
			id: 4,
			name: "Penthouse Suite",
			price: "NGN 12,000,000/Yr",
			status: "Unoccupied",
			// image: propertyImage,
		},
		{
			id: 5,
			name: "Luxury Villa",
			price: "NGN 15,000,000/Yr",
			status: "Unoccupied",
			// image: propertyImage,
		},
		{
			id: 6,
			name: "Single Room Flat",
			price: "NGN 1,500,000/Yr",
			status: "Occupied",
			// image: propertyImage,
		},
		{
			id: 7,
			name: "Family Suite",
			price: "NGN 10,000,000/Yr",
			status: "Occupied",
			// image: propertyImage,
		},
		{
			id: 8,
			name: "Bachelor's Apartment",
			price: "NGN 2,000,000/Yr",
			status: "Unoccupied",
			// image: propertyImage,
		},
	];

	return (
		<div className="p-6">
			{/* <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-bold">Token Balance</h3>
            <p className="text-green-500 text-3xl font-bold">NGN 345,456.00</p>
            <button className="text-blue-500 mt-2">Buy Tokens</button>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Total Properties: 65</p>
            <p className="text-gray-500">Pending Inspections: 10</p>
          </div>
        </div>
      </div> */}

			<div className="bg-white p-6 rounded-lg shadow-md">
				<div className="flex justify-between mb-4">
					<h3 className="text-xl font-bold">Occupied Property</h3>
					<button className="text-blue-500">See All</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					{properties.map((property) => (
						<PropertyCard key={property.id} property={property} onClick={handlePropertyClick} />
					))}
				</div>
			</div>
			<PropertyModal
          isOpen={isModalOpen}
          onClose={closeModal}
          property={selectedProperty}
        />
		</div>
	);
};

export default Dashboard;
