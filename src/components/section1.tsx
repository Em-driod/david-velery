

const Section1 = () => {
  return (
    <section className="bg-[#1B1F27] py-20 md:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-white font-semibold tracking-tight mb-4">
            Where Experience Meets Design Excellence
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            For over two decades, we’ve transformed everyday spaces into
            breathtaking interiors with craftsmanship, precision, and a touch of artistry.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 text-center">
          
          {/* --- Column 1 --- */}
          <div className="flex flex-col items-center bg-[#232A35] rounded-2xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_30px_rgba(255,191,0,0.25)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-full max-w-xs overflow-hidden mb-6 rounded-xl">
              <img
                src="susan.png"
                alt="Certified Kitchen Bath Designer"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-serif italic mb-3">
              Certified Kitchen Bath Designer
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Susan Benedict, CMKBD, translates 20 years of experience into
              effortless floor plans and extraordinary design details.
            </p>
          </div>

          {/* --- Column 2 --- */}
          <div className="flex flex-col items-center bg-[#232A35] rounded-2xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_30px_rgba(255,191,0,0.25)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-full max-w-xs overflow-hidden mb-6 rounded-xl">
              <img
                src="bath.png"
                alt="CAPS Specialist"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-serif italic mb-3">
              CAPS Specialist
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Subtle, future-ready upgrades—pull-outs, wide pathways, and better lighting—
              keep your home elegant and functional at every stage of life.
            </p>
          </div>

          {/* --- Column 3 --- */}
          <div className="flex flex-col items-center bg-[#232A35] rounded-2xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_30px_rgba(255,191,0,0.25)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-full max-w-xs overflow-hidden mb-6 rounded-xl">
              <img
                src="barn.png"
                alt="Locally Owned Est. 1994"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-serif italic mb-3">
              Locally Owned • Est. 1994
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Serving Greater Lafayette since ‘94 with proven trade partners and
              dedicated project management built on trust.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button
            className="relative overflow-hidden text-[#1B1F27] bg-amber-500 text-lg md:text-xl font-semibold py-4 px-10 rounded-full shadow-xl tracking-wide 
            transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] hover:bg-amber-400"
            aria-label="Discover Your Alternatives"
          >
            <span className="relative z-10">Discover Your Alternatives</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
