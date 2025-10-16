import React from 'react';

// --- INTERFACES ---

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

interface LogoProps {
  alt: string;
}

interface QualificationProps {
  icon: string;
  title: string;
  description: string;
}

// --- SUB-COMPONENTS ---

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 mb-8 sm:mb-0">
    {/* Icon Container with subtle styling */}
    <div className="mb-4 text-4xl text-gray-700">
      <span role="img" aria-label={title}>{icon}</span>
    </div>
    
    {/* Title */}
    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-sm text-gray-600 font-sans leading-relaxed">
      {description}
    </p>
  </div>
);

const Logo: React.FC<LogoProps & { src: string }> = ({ alt, src }) => (
  <div className="flex justify-center items-center h-32 sm:h-40 mx-4">
    <img
      src={src}
      alt={alt}
      className="max-h-28 sm:max-h-36 object-contain"
      style={{ maxWidth: '100%' }}
    />
  </div>
);

const QualificationItem: React.FC<QualificationProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg">
    <div className="text-2xl text-blue-700 pt-1 flex-shrink-0">
      {/* Placeholder for the checkmark/badge icon */}
      <span role="img" aria-label="qualification icon">{icon}</span>
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800 font-serif">{title}</h3>
      <p className="text-sm text-gray-600 font-sans">{description}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const ProvenProcess: React.FC = () => {
  const steps: ProcessStepProps[] = [
    {
      icon: '🗓️', 
      title: 'Book an Appointment',
      description: 'Define style, budget, must-haves.',
    },
    {
      icon: '📐', 
      title: 'Concept & Renderings',
      description: 'Moodboards + 3-D views. Source Materials.',
    },
    {
      icon: '♿', 
      title: 'Detailed Plans',
      description: 'CAPS-guided layouts, spec book, timeline.',
    },
    {
      icon: '✍️', 
      title: 'Final Reveal',
      description: 'Punch-list walk-through + one-year check-in.',
    },
    {
      icon: '🗓️', 
      title: 'Book an Appointment',
      description: 'Define style, budget, must-haves.',
    },
  ];

  const logos = [
    { alt: 'Logo 1', src: '/logo 1.png' },
    { alt: 'Fahja', src: '/fahja.png' },
    { alt: 'Habitat', src: '/habitat.png' },
  ];
  
  const qualifications: QualificationProps[] = [
    {
      icon: '✅',
      title: 'Certified Aging-in-Place Specialist (CAPS)',
      description: 'Expertise in designing safe, accessible, and comfortable homes for lifelong living, often in partnership with NAHB.',
    },
    {
      icon: '✨',
      title: 'Professional Design Affiliations',
      description: 'Proud members of the National Kitchen & Bath Association (NKBA), adhering to the highest industry standards.',
    },
  ];


  return (
    <div className="bg-white py-16 px-4 font-sans">
      
      {/* 1. Title Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-gray-800 font-medium">
          Our Proven Process
        </h2>
      </div>

      {/* 2. Process Steps Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-4">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
      
      {/* --- NEW SECTION: QUALIFICATIONS --- */}
      
      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-serif text-center text-gray-800 mb-8">
            Our Qualifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualifications.map((q, index) => (
            <QualificationItem 
              key={index}
              icon={q.icon}
              title={q.title}
              description={q.description}
            />
          ))}
        </div>
      </div>

      {/* --- END NEW SECTION --- */}
      
      {/* 3. Logos Section */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center pt-8 mt-12">
        {logos.map((logo, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4 flex justify-center">
            <Logo alt={logo.alt} src={logo.src} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

// Exporting the component, replacing your original 'proven' function
const proven: React.FC = () => {
  return <ProvenProcess />;
}

export default proven;