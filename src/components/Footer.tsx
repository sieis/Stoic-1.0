import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-bold">Epic Concepts</span>
          </div>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2023 Epic Concepts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;