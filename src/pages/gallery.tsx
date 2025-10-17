

const Gallery = () => {
  const images = [
    '/hert.png',
    
    '/a01.png',
    '/a02.png',
    '/a04.png',
    '/dev1.png',
    '/dev2.png',
    '/dom3.png',
    
    
    '/hert.png',
   
    '/med.png',
    '/mortal.jpg',
    '/nit1.png',
    '/barn.png',
    '/bath.png',
  ];

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
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
