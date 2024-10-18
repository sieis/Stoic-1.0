import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare professionals"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 relative z-10">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Stoic Business Solutions</h1>
          <p className="text-xl mb-10 text-blue-100"> Workforce benefits group specializing in Self-Insured Medical Reimbursement (SIMERP) Cafeteria 125 Plans</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 flex items-center">
            Book Appointment
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-700 to-transparent"></div>
    </div>
  );
};

export default Hero;