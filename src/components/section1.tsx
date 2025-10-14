

const Section1 = () => {
  return (
    <section className="bg-[#2D3748] py-16 md:py-24 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Container for the Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 text-center mx-0 lg:mx-5">
          
          {/* Column 1: Certified Kitchen Bath Designer (DROPPED DOWN) */}
          <div className="flex flex-col items-center mt-6 md:mt-0 md:translate-y-8 lg:translate-y-36 transition-transform duration-500">
            {/* Image for Susan Benedict */}
            <div className="w-full max-w-sm overflow-hidden mb-6 aspect-w-1 aspect-h-1">
              <img 
                src="susan.png" 
                alt="Susan Benedict, Certified Kitchen Bath Designer" 
                // Removed rounded-full class from parent div, added to img for better control
                className="w-full h-auto object-cover " 
              />
            </div>
            {/* INCREASED TITLE SIZE */}
            <h3 className="text-white text-3xl font-semibold mb-4">
              Certified Kitchen Bath <br /> Designer
            </h3>
            {/* INCREASED BODY TEXT SIZE */}
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Susan Benedict, CMKBD, translates 20 years of experience into floor plans that feel 
              effortless and look extraordinary.
            </p>
          </div>

          {/* Column 2: CAPS Specialist (NORMAL POSITION) */}
          <div className="flex flex-col items-center">
            {/* Image for CAPS Bathroom */}
            <div className="w-full max-w-sm rounded-lg overflow-hidden mb-6 shadow-lg">
              <img 
                src="bath.png" 
                alt="CAPS Specialist bathroom design" 
                className="w-full h-auto object-cover rounded-lg" 
              />
            </div>
            {/* INCREASED TITLE SIZE */}
            <h3 className="text-white text-2xl font-semibold mb-4">
              CAPS Specialist
            </h3>
            {/* INCREASED BODY TEXT SIZE */}
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Subtle, future-ready upgrades—pull-outs, clear pathways, better lighting—keep 
              you comfortable at every age.
            </p>
          </div>

          {/* Column 3: Locally Owned Est. 1994 (DROPPED DOWN) */}
          <div className="flex flex-col items-center mt-6 md:mt-0 md:translate-y-8 lg:translate-y-38 transition-transform duration-500">
            {/* Image for Barn */}
            <div className="w-full max-w-sm rounded-lg overflow-hidden mb-6 shadow-lg">
              <img 
                src="barn.png" 
                alt="Locally Owned Barn building" 
                className="w-full h-auto object-cover rounded-lg" 
              />
            </div>
            {/* INCREASED TITLE SIZE */}
            <h3 className="text-white text-2xl font-semibold mb-4">
              Locally Owned <br /> Est. 1994
            </h3>
            {/* INCREASED BODY TEXT SIZE */}
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Serving Greater Lafayette, Indiana since ‘94 with proven trade partners and 
              white-glove project oversight.
            </p>
          </div>

        </div>

        {/* Discover Your Alternatives Button */}
        <div className="text-center mt-16">
          <button 
            className="text-[#3C4A5C] bg-white text-lg font-medium py-3 px-8 rounded-full 
                       hover:bg-[#4A5D74] transition duration-300 shadow-md"
            aria-label="Discover Your Alternatives"
          >
            Discover Your Alternatives
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section1;