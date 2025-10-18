// src/pages/DetailPage.tsx
import React from "react";

const DetailPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans mt-6 lg:mt-6 sm:mt-20">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/a01.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Modern House Design Excellence
          </h1>
          <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the art of transforming spaces into modern, functional, and luxurious homes.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-3">
            Our House Design Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At <strong>Urban Design Studio</strong>, we believe that every home should be a
            perfect balance between elegance, comfort, and innovation. Our approach to house design
            goes beyond just architecture — it’s about crafting spaces that reflect your lifestyle,
            enhance daily living, and leave a lasting impression. We integrate sustainable materials,
            advanced building technologies, and timeless aesthetics into every project.
          </p>

          {/* Image Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <img
              src="/dev1.png"
              alt="Modern House Exterior"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
            <img
              src="/dom3.png"
              alt="Interior Design"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Key Features */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Design Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Elegant open-plan living spaces with abundant natural light</li>
            <li>Energy-efficient materials and sustainable architectural designs</li>
            <li>Seamless indoor-outdoor integration with lush landscaping</li>
            <li>Smart home systems for modern living and security</li>
            <li>Custom interiors tailored to individual preferences</li>
          </ul>

          {/* Vision Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Design Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Each project begins with a vision — your vision. We collaborate closely with our
            clients, understanding their preferences, lifestyle, and inspirations to create homes
            that are both personal and timeless. Our designs embody sophistication while ensuring
            functionality, ensuring every inch of space is optimized for comfort and flow.
          </p>

          {/* CTA Section */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg text-center shadow-inner">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Design Your Dream Home?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let’s bring your dream space to life — tailored to your taste, lifestyle, and budget.
              From concept to completion, our expert team ensures a seamless and inspiring design
              journey.
            </p>
            <a
              href="https://wa.me/07016969298"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Book a Free Design Consultation
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailPage;
