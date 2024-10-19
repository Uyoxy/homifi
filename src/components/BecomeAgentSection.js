import React from 'react';

const BecomeAgentSection = () => {
  return (
    <section className="bg-blue-700 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="relative w-full h-full">
            <img 
              src="https://via.placeholder.com/400x500" // Replace this with the actual image URL
              alt="Agent holding house model and keys"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-green-500 w-full h-full rounded-lg" 
              style={{zIndex: -1}}></div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-white md:pl-10">
          <h2 className="text-4xl font-bold mb-4">Become an Agent.</h2>
          <p className="mb-6">
            When it comes to selling or renting out your property, time is of the essence.
            With HOMIFI, you can quickly list your property and start reaching out to potential buyers or renters right away, saving you valuable time and effort.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md">
            Become An Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default BecomeAgentSection;
