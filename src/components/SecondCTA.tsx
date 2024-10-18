import React from 'react';

const SecondCTA = () => {
  return (
    <div className="relative bg-blue-600 py-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Family"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Optimize Your Employee Benefits</h2>
          <p className="text-xl mb-8">Get a personalized quote and provide security for years to come.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 flex items-center mx-auto">
            Get a Quote Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondCTA;