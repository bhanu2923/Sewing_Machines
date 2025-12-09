import React from 'react';

export default function Types() {
  const machineTypes = [
    {
      name: 'Industrial',
      description: 'Heavy-duty machines for professional and industrial use.'
    },
    {
      name: 'Embroidery',
      description: 'Specialized machines for beautiful embroidery work.'
    },
    {
      name: 'Mini Models',
      description: 'Compact and portable machines for home use.'
    },
    {
      name: 'Overlock',
      description: 'Professional finishing for your sewing projects.'
    },
    {
      name: 'Computerized',
      description: 'Advanced machines with digital controls and patterns.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-8">Sewing Machine Types</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-[#c54513] mb-2">{type.name}</h2>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
