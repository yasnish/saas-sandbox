import React from 'react';

type Props = { vol?: number };

const Contact: React.FC<Props> = ({ vol = 1 }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Page Vol. {vol}</h1>
        <p className="text-gray-700 text-center">This is the contact page.</p>
      </div>
    </div>
  );
};

export default Contact;