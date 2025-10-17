const Hero = () => {
  return (
    // The main container for the hero section
    <section 
      className="relative h-[100vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('mortal.jpg')" }}
      aria-label="A modern kitchen with a focus on tailored design and seamless navigation"
    >
      
      {/* Overlay Container with Centering */}
      <div 
        
        className="absolute inset-0 top-40 flex items-center justify-center p-auto sm:p-8 md:p-12 lg:p-20 pt-0 lg:pt-40"
      >
        <div 
          className="max-w-2xl p-8 sm:p-10 md:p-12 text-center bg-black/10"
          // Custom color and opacity for the overlay background
         
        >
          
          {/* Main Heading - Added text-center to align text inside the box */}
          <h1 className="text-black text-4xl md:text-5xl font-serif leading-tight mb-4 tracking-tight text-center" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            Tailored Design, <br />
            Seamless Navigation
            
          </h1>
          
          {/* Subheading/Body Text - Added text-center to align text inside the box */}
          <p className="text-[#130e09] text-xl md:text-2xl font-sans leading-relaxed text-center" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
            Inviting kitchens and interiors that look stunning today—and <br className="hidden sm:inline" />
            adapt gracefully as life changes.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;