import React from 'react';

const Gallery = () => {
  const images = [
    '/barn.png',
    '/bath.png',
    '/coffe.jpg',
    '/dev1.png',
    '/dev2.png',
    '/dom3.png',
    '/fahja.png',
    '/habitat.png',
    '/hert.png',
    '/logo 1.png',
    '/med.png',
    '/mortal.jpg',
    '/nit1.png',
    '/susan.png',
    '/very.png',
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
