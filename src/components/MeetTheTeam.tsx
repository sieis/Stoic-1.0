import React from 'react';

const ProfileCard = ({ imageSrc, name, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={imageSrc} alt={name} className="w-full h-64 object-cover object-center" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const MeetTheTeam = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProfileCard
            imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            name="Dr. Sarah Johnson"
            title="Co-Founder & Chief Medical Officer"
            description="With over 15 years of experience in internal medicine, Dr. Johnson is dedicated to providing comprehensive, patient-centered care."
          />
          <ProfileCard
            imageSrc="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            name="Dr. Michael Chen"
            title="Co-Founder & Chief of Operations"
            description="Dr. Chen combines his medical expertise with a passion for healthcare management to ensure our patients receive the best possible care."
          />
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;