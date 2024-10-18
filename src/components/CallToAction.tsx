import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-600 font-semibold text-lg mb-2">ABOVE AND BEYOND WELLNESS</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            All business owners with full time W2 employees nationwide that pay payroll taxes
          </h2>
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center mx-auto">
            Book Appointment Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;