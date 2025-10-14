





const Appointment = () => {
  // Path for the background image, assuming it's in the public folder.
  // Please replace 'kitchen-interior.jpg' with the actual filename you'll provide.
 

  const reasons = [
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
      title: 'Saturday Appointments',
      description: 'Flexible consults for busy homeowners.',
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-gray-50 font-serif">
      {/* Left Section: Image */}
      <div className="lg:w-1/2 w-full h-96 lg:h-auto overflow-hidden">
        <img 
          src={'/coffe.jpg'} 
          alt="Modern kitchen interior with island" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 w-full p-8 md:p-16 flex flex-col justify-center bg-white">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800 mb-8">
          Why Clients Choose <br /> Design Alternatives
        </h2>

        <ul className="space-y-6 mb-10">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start">
              {/* Checkmark icon */}
              <svg 
                className="flex-shrink-0 h-6 w-6 text-gray-500 mt-1 mr-3" 
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
                <span className="font-semibold text-lg text-gray-700">{reason.title}</span>
                <span className="text-lg text-gray-600"> &ndash; {reason.description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Book An Appointment Button */}
        <button className="self-start px-8 py-4 bg-gray-200 text-gray-700 text-lg font-medium rounded-md hover:bg-gray-300 transition-colors duration-200 shadow-md">
          Book An Appointment
        </button>
      </div>
    </section>
  );
};

export default Appointment;