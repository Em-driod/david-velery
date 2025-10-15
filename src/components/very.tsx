

const Testimonial = () => {
  // Assumption: vertical split means left/right halves (white on left, cream on right).
  // Uses an existing public image from the project (mortal.jpg). Replace src if you prefer another image.
  const IMAGE_SRC = '/very.png';

  return (
    <section
      className="w-full min-h-screen flex items-start justify-center"
      style={{ background: 'linear-gradient(180deg, #ffffff 50%, #F4EEE0 50%)' }}
      aria-label="Split white and cream background with centered image and text"
    >
      <div className="w-full max-w-12xl px-1 py-16 flex flex-col items-center">
        {/* Image: 80% of viewport width (responsive) */}
        <img
          src={IMAGE_SRC}
          alt="Showcase"
          className="w-[90%] max-w-[1200px] object-cover rounded-lg shadow-xl"
          style={{ height: '600px' }}
        />

        {/* Text below the image */}
        <div className="mt-6 text-center">
          <h2 className="text-6xl  font-semibold text-[#8f867e]">Happy Client</h2>
          <p className="mt-3 text-gray-700 max-w-7xl mx-auto text-base md:text-lg">
           "Susan was integral to our Kitchen remodel project. She was able to draw the best design given our current space, source our cabinetry, as well as provide excellent interior design. We came to her with little more than the overall vibe we were going for (colors and materials that we knew we liked) and she helped us hone in on our vision. She also held our hand throughout every step of the process to ensure that our design was being executed faithfully.
           "
          </p>
          <h2 className="text-3xl  mt-8 font-semibold text-[#8f867e]">~ Cameron Maynard</h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;