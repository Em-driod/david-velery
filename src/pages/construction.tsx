

const Construction = () => {
  return (
    // Outer container for a dramatic full-bleed section
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Elite Heading Section */}
        <header className="text-center mb-16 mt-5">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#e07000] mb-2">
            Our Expertise
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Building Your Vision <br className="hidden sm:inline" /> With Precision
          </h1>
        </header>

        {/* Content Grid - Enhanced with better spacing and a subtle shadow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Block - Given a more sophisticated look */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-indigo-500/50 transform hover:-translate-y-1">
              {/* Aspect ratio container for image consistency */}
              <div className="aspect-w-16 aspect-h-9 sm:aspect-h-11 lg:aspect-h-9"> 
                <img 
                  src="/dom3.png" 
                  alt="Construction project blueprint or completed building" 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Optional: Overlay for subtle visual effect */}
              <div className="absolute inset-0 bg-black opacity-10 mix-blend-multiply"></div>
            </div>
          </div>
          
          {/* Text & CTA Block - More refined typography and layout */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            
            <div className="space-y-6 text-gray-700">
              
              {/* Core Services Paragraph - Highlighted with a border or background for visual separation */}
              <p className="text-xl font-medium leading-relaxed border-l-4 border-[#e07000] pl-4 py-1">
                Our construction services are 'second to none'. We have a team of experienced professionals who are dedicated to 
                providing the 'highest quality workmanship'. 
              </p>

              {/* Comprehensive List of Services */}
              <p className="text-lg">
                We specialize in a wide range of services, encompassing 'residential' and 'commercial construction', detailed 'remodeling', and full-scale 'renovations'. We manage every project with meticulous attention, from concept to completion.
              </p>
              
              {/* Commitment Paragraph */}
              <p className="text-lg">
                We are 'committed' to providing our clients with the best possible experience. We work closely with you to ensure 
                your vision is brought to life, dedicated to completing projects 'on time and within budget'.
              </p>
            </div>
            
            {/* Prominent Call-to-Action (CTA) Button */}
            <div className="mt-10">
              <a 
                href="/contact" // Update this link to your contact page
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg shadow-xl
                 text-white bg-[#e07000] hover:bg-[white] hover:text-[#e07000] transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Get Your Free Project Estimate &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Construction;