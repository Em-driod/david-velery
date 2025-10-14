// src/components/Service.tsx

const services = [
  {
    img: "/dev1.png", // kitchen image
    title: "Kitchen Design",
    desc: "Beautiful, one-of-a-kind layouts using the industry’s newest cabinetry, lighting, and storage tech.",
  },
  {
    img: "/dom3.png", // outdoor kitchen
    title: "Outdoor Kitchen Design",
    desc: "Weather-proof kitchens with chef-grade grills, bar seating, and smart lighting for seamless alfresco entertaining.",
  },
  {
    img: "/dev2.png", // bathroom
    title: "Bathroom Design",
    desc: "Spa-worthy, accessible baths featuring zero-threshold showers and luxury finishes.",
  },
  {
    img: "/nit1.png", // living room
    title: "Living Room Design",
    desc: "Elegant, comfortable spaces that merge functionality with luxurious aesthetics, tailored for relaxation and gatherings.",
  },
  {
    img: "/med.png", // bedroom
    title: "Bedroom Design",
    desc: "Tranquil retreats designed for deep rest — blending cozy textures, warm lighting, and spatial flow.",
  },
  {
    img: "/hert.png", // office
    title: "Home Office Design",
    desc: "Modern workspaces optimized for productivity and inspiration, balancing natural light with ergonomic design.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#f9f8f4] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f3f1ec] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-3 hover:shadow-2xl duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover" // taller image
            />
            <div className="p-8 text-center">
              <h3 className="italic text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-8 text-[16px] leading-relaxed">
                {service.desc}
              </p>
              <button className="bg-[#1b2a3b] text-white text-sm font-medium py-3 px-7 rounded-full hover:bg-[#293a4b] transition">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
