import React from 'react';

const TestimonialCard = ({ quote, author, position }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Epic Concepts transformed our employee benefits program. We've seen significant cost savings and increased employee satisfaction."
            author="John Doe"
            position="CEO, Tech Innovators Inc."
          />
          <TestimonialCard
            quote="The SIMERP plan implementation was smooth, and the ongoing support is exceptional. Highly recommended!"
            author="Jane Smith"
            position="HR Director, Global Manufacturing Co."
          />
          <TestimonialCard
            quote="Their expertise in Cafeteria 125 Plans has given our employees more flexibility and improved our retention rates."
            author="Mike Johnson"
            position="CFO, Retail Giants Ltd."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;