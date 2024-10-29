import React from 'react';
import { Stethoscope, Pill, Activity } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden" id='services'>
    <div className="relative">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
    </div>
    <div className="p-6 pt-12">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="inline-block mt-4 text-blue-600 font-semibold">Read more →</a>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Stethoscope}
            title="SIMERP Plans"
            description="Comprehensive Self-Insured Medical Expense Reimbursement Plans tailored for your business."
            imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <ServiceCard
            icon={Pill}
            title="Cafeteria 125 Plans"
            description="Flexible benefit plans allowing employees to choose from a variety of pre-tax benefits."
            imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <ServiceCard
            icon={Activity}
            title="Benefit Optimization"
            description="Strategic planning to maximize employee benefits while minimizing costs for employers."
            imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;