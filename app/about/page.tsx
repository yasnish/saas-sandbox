import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-orange-500 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About Page !</h1>
        <p className="text-gray-700 text-center">This is the about page.</p>
      </div>
    </div>
  );
};

export default About;