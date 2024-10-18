import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-lg col-span-2"
              />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Business professional"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-blue-100 rounded-lg shadow-lg flex items-center justify-center p-4">
                <p className="text-blue-600 font-semibold text-lg text-center">Empowering Businesses</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-blue-600 font-semibold text-lg mb-2">ABOUT US</h2>
            <h3 className="text-4xl font-bold mb-6">Stoic Business Solutions, LLC</h3>
            <p className="text-gray-600 mb-8">
              Stoic Business Solutions is a leading workforce benefits group specializing in Self-Insured Medical Expense Reimbursement Plans (SIMERP) and Cafeteria 125 Plans. We provide innovative solutions to help businesses optimize their employee benefits while reducing costs.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts is dedicated to delivering tailored benefit strategies that meet the unique needs of each client. With years of experience in the industry, we've helped numerous businesses nationwide implement effective SIMERP and Cafeteria 125 Plans.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-gray-700 font-semibold mr-2">Client Satisfaction</span>
                <div className="flex-grow bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <span className="text-blue-600 font-semibold ml-2">95%</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;