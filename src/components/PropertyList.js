import React, { useState } from "react";
import propertyImage from "../assets/images/hhh.svg";
import PropertyModal from "../components/PropertyModal"; // Import Modal component
import StatsSection from "../components/StatsSection"; // Make sure to import StatsSection

console.log('PropertyList component is rendering');

const properties = [
  // Property data...
];

const PropertyList = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTable, setActiveTable] = useState("unoccupied");
  const [isExpanded, setIsExpanded] = useState(false); // To toggle between "See All" and "See Less"

  const handleTableChange = (table) => {
    setActiveTable(table);
  };

  const handlePropertyClick = (property) => {
    console.log('Property clicked:', property); // Debug log
    setSelectedProperty(property); // Set the selected property for the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProperty(null); // Reset the selected property
  };

  const filteredProperties = properties.filter(
    (property) => property.status.toLowerCase() === activeTable
  );

  const visibleProperties = isExpanded
    ? filteredProperties // Show all properties when expanded
    : filteredProperties.slice(0, 4); // Show only 4 properties when not expanded

	
  return (
	
    <>

      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <StatsSection />
        {/* Table and Property list UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 z-10">
          {visibleProperties.length > 0 ? (
            visibleProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white border rounded-lg shadow-lg p-4 cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <img
                  src={property.image} // Use the correct property image URL
                  alt={property.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="font-bold text-lg">{property.name}</h4>
                <p className={`font-semibold ${property.status === "Occupied" ? "text-green-600" : "text-red-600"}`}>
                  {property.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center w-full text-gray-500">
              No properties available.
            </p>
          )}
        </div>

        {/* Render the modal */}
        <PropertyModal
          isOpen={isModalOpen}
          onClose={closeModal}
          property={selectedProperty}
        />
      </div>
    </>
  );
};

export default PropertyList;
