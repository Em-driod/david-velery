

const Hero = () => {
  return (
    // The main container for the hero section
    <section 
      className="relative h-[95vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('mortal.jpg')" }}
      aria-label="A modern kitchen with a focus on tailored design and seamless navigation"
    >
      
      {/* Overlay Container with Centering */}
      <div 
        // Added justify-center and items-center to center the content box within the hero area
        className="absolute inset-0 flex items-center justify-center p-auto sm:p-8 md:p-12 lg:p-20 pt-0 lg:pt-40"
      >
        <div 
          className="max-w-2xl p-8 sm:p-10 md:p-12 text-center"
          // Custom color and opacity for the overlay background
          style={{ backgroundColor: 'rgba(57, 63, 76, 0.75)' }} 
        >
          
          {/* Main Heading - Added text-center to align text inside the box */}
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight text-center">
            Tailored Design, <br />
            Seamless Navigation
          </h1>
          
          {/* Subheading/Body Text - Added text-center to align text inside the box */}
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed text-center">
            Inviting kitchens and interiors that look stunning today—and <br className="hidden sm:inline" />
            adapt gracefully as life changes.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;