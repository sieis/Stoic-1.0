import React from 'react';
import { PhoneCall, Calendar, Stethoscope, Clipboard } from 'lucide-react';

const StepCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const GetStarted = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            icon={PhoneCall}
            title="1. Contact Us"
            description="Reach out to our friendly team to discuss your health needs and concerns."
          />
          <StepCard
            icon={Calendar}
            title="2. Schedule Appointment"
            description="Book a convenient time for your initial consultation or check-up."
          />
          <StepCard
            icon={Stethoscope}
            title="3. Initial Assessment"
            description="Meet with our healthcare professionals for a comprehensive evaluation."
          />
          <StepCard
            icon={Clipboard}
            title="4. Personalized Plan"
            description="Receive a tailored health plan designed to meet your specific needs and goals."
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;