import React from 'react';

// --- Interface for type safety ---
interface Reason {
  title: string;
  description: string;
}

const Appointment: React.FC = () => {
  const reasons: Reason[] = [
    {
      title: 'Depth of Expertise',
      description: 'Certified Kitchen and Bath Designer + CAPS, backed by NKBA & NAHB memberships.',
    },
    {
      title: 'Latest Features & Tech',
      description: 'Smart storage, ergonomic hardware, energy-saving lighting.',
    },
    {
      title: 'End-to-End Oversight',
      description: 'Susan designs, sources, and manages every trade until the final wipe-down.',
    },
    {
      title: 'Custom to the Core',
      description: 'No template layouts; every plan responds to your routines and style.',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Saturday appointments and virtual consults available for busy homeowners.',
    },
  ];

  // External placeholder image URL to ensure visibility
  const imageUrl = '/med.png';

  return (
    <section 
      // Elite background color: soft stone/cream
      className="flex flex-col lg:flex-row min-h-screen bg-black font-sans antialiased"
      id="appointments"
    >
      
      {/* Left Section: Image (Elevated with Shadow) */}
      <div className="lg:w-1/2 w-full h-96 lg:h-auto overflow-hidden shadow-2xl lg:shadow-stone-900/50">
        <img 
          // Replaced local path with external, working URL
          src={imageUrl} 
          alt="Luxury kitchen interior with coffee station" 
          // Subtle hover effect for engagement
          className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700 ease-out"
        />
      </div>

      {/* Right Section: Content (Clean White Panel) */}
      <div className="lg:w-1/2 w-full p-8 md:p-16 flex flex-col justify-center bg-white shadow-inner">
        
        {/* Sub-heading/Divider */}
        <p className="text-sm uppercase tracking-[0.3em] font-medium text-amber-600 mb-4 border-b-2 border-amber-300 w-fit pb-1">
          Our Value Proposition
        </p>

        {/* Main Title - Serif font for elegance */}
        <h2 className="font-serif text-5xl md:text-6xl font-light leading-snug text-stone-900 mb-10">
          Why Design Alternatives <br /> is the Right Choice
        </h2>

        {/* Reasons List - Refined Spacing and Coloring */}
        <ul className="space-y-8 mb-12">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start">
              {/* Icon: Elevated to Gold/Amber */}
              <svg 
                className="flex-shrink-0 h-6 w-6 text-amber-600 mt-1 mr-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div>
                <p className="font-semibold text-xl text-stone-700 leading-snug">
                  {reason.title}
                </p>
                <p className="text-lg text-stone-500 mt-1">
                  {reason.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Book An Appointment Button - Primary CTA */}
        <a 
          href="#contact-form" // Assuming the appointment links to a form section
          className="self-start px-10 py-4 bg-red-600 text-white text-xl font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-amber-500 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Book Your Initial Consultation
        </a>
        
        {/* Subtle Footer Text */}
        <p className="mt-8 text-sm text-stone-400">
          Design excellence starts here. Let's build your dream space.
        </p>
      </div>
    </section>
  );
};

export default Appointment;