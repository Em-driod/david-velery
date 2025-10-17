import React from "react";
import { motion } from "framer-motion";

interface Reason {
  title: string;
  description: string;
}

const Appointment: React.FC = () => {
  const reasons: Reason[] = [
    {
      title: "Depth of Expertise",
      description:
        "Certified Kitchen and Bath Designer + CAPS, backed by NKBA & NAHB memberships.",
    },
    {
      title: "Latest Features & Tech",
      description:
        "Smart storage, ergonomic hardware, and energy-saving lighting innovations.",
    },
    {
      title: "End-to-End Oversight",
      description:
        "Susan designs, sources, and manages every trade — right up to the final wipe-down.",
    },
    {
      title: "Custom to the Core",
      description:
        "No cookie-cutter templates; every plan adapts to your style and daily flow.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Saturday appointments and virtual consults for modern, busy homeowners.",
    },
  ];

  const imageUrl = "/med.png";
  const phoneNumber = "tel:07016969298";

  return (
    <section
      id="appointments"
      className="flex flex-col lg:flex-row bg-[#0E0E0E] text-white font-sans overflow-hidden"
    >
      {/* LEFT SIDE - IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2 w-full h-96 lg:h-auto relative overflow-hidden"
      >
        <img
          src={imageUrl}
          alt="Luxury kitchen interior"
          className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </motion.div>

      {/* RIGHT SIDE - CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2 w-full p-8 md:p-16 flex flex-col justify-center bg-[#F9F9F9] text-[#1A1A1A]"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-amber-600 mb-4 border-b-2 border-amber-400 w-fit pb-1">
          Our Value Proposition
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-snug text-[#111] mb-10">
          Why Design Alternatives <br className="hidden sm:block" /> Is the Right
          Choice
        </h2>

        <ul className="space-y-8 mb-12">
          {reasons.map((reason, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <svg
                className="flex-shrink-0 h-6 w-6 text-amber-600 mt-1 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>

              <div>
                <p className="font-semibold text-xl text-[#111] leading-snug">
                  {reason.title}
                </p>
                <p className="text-lg text-gray-600 mt-1">
                  {reason.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* CTA BUTTON - Direct Call */}
      <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  href={phoneNumber}
  className="
    inline-block // Now it shows on all screens (mobile first)
    sm:w-auto 
    text-center 
    px-10 py-4 // Larger padding for desktop/tablet
    bg-gradient-to-r from-amber-600 to-red-600 
    text-white 
    text-lg font-semibold uppercase tracking-wider 
    rounded-full 
    shadow-lg hover:shadow-amber-500/50 
    transition-all duration-300 hover:scale-[1.03]
    sm:self-start
  "
>
  Call to Book Your Consultation
</motion.a>
        <p className="mt-8 text-sm text-gray-500">
          Design excellence starts here. Let’s build your dream space.
        </p>
      </motion.div>
    </section>
  );
};

export default Appointment;
