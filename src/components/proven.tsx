// src/components/ProvenProcess.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// --- INTERFACES ---

interface ProcessStepProps {
  title: string;
  description: string;
  emoji: string;
  link?: string;
}

interface QualificationProps {
  title: string;
  description: string;
  emoji: string;
}

interface LogoProps {
  src: string;
  alt: string;
}

// --- ANIMATION VARIANTS ---

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

// --- SUB-COMPONENTS ---

const ProcessStep: React.FC<ProcessStepProps & { index: number }> = ({
  emoji,
  title,
  description,
  link,
  index,
}) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col items-center text-center px-6 py-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
  >
    {/* Emoji Icon */}
    <div className="text-5xl mb-4">{emoji}</div>

    {/* Title */}
    <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-3">
      {title}
    </h3>

    {/* Description */}
    <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed mb-4">
      {description}
    </p>

    {/* CTA */}
    {link && (
      <a
        href={link}
        className="mt-3 inline-block px-6 py-2 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-red-600 to-amber-500 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        📞 Call to Book
      </a>
    )}
  </motion.div>
);

const QualificationItem: React.FC<QualificationProps & { index: number }> = ({
  emoji,
  title,
  description,
  index,
}) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="flex items-start space-x-4 bg-gray-50 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="text-3xl flex-shrink-0">{emoji}</div>
    <div>
      <h3 className="text-lg font-bold text-gray-800 font-serif mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 font-sans">{description}</p>
    </div>
  </motion.div>
);

const Logo: React.FC<LogoProps & { index: number }> = ({ src, alt, index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex justify-center items-center mx-6 my-4 w-32 sm:w-40"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
    />
  </motion.div>
);

// --- MAIN COMPONENT ---

const ProvenProcess: React.FC = () => {
  const steps: ProcessStepProps[] = [
    {
      emoji: "📅",
      title: "Book an Appointment",
      description:
        "Let’s schedule your first consultation to discuss your goals, preferences, and budget. Your dream design starts here!",
      link: "tel:07016969298",
    },
    {
      emoji: "🎨",
      title: "Concept & Renderings",
      description:
        "We design creative concepts, moodboards, and detailed visualizations that bring your ideas to life in stunning form.",
    },
    {
      emoji: "📐",
      title: "Detailed Plans",
      description:
        "We create exact specifications, layout blueprints, and select high-quality materials to ensure perfect execution.",
    },
    {
      emoji: "🏡",
      title: "Final Reveal",
      description:
        "The grand moment — you experience your transformed space with every detail perfected. We also follow up for a full year!",
    },
  ];

  const qualifications: QualificationProps[] = [
    {
      emoji: "🏅",
      title: "Certified Aging-in-Place Specialist (CAPS)",
      description:
        "We design with long-term comfort, safety, and accessibility in mind — so your space grows with you beautifully.",
    },
    {
      emoji: "🎓",
      title: "Professional Design Affiliations",
      description:
        "Proud member of top industry associations, maintaining excellence, ethics, and innovation in every project.",
    },
  ];

  const logos: LogoProps[] = [
    { src: "/logo 1.png", alt: "Logo 1" },
    { src: "/fahja.png", alt: "Fahja" },
    { src: "/habitat.png", alt: "Habitat" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-gray-50 py-20 px-6 sm:px-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center font-semibold text-gray-800 mb-16"
        >
          Our Proven Process ✨
        </motion.h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <ProcessStep key={index} index={index} {...step} />
          ))}
        </div>

        {/* Qualifications */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-serif text-center text-gray-800 mb-12"
        >
          Our Qualifications 🏆
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {qualifications.map((q, i) => (
            <QualificationItem key={i} index={i} {...q} />
          ))}
        </div>

        {/* Trusted By */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-serif text-center text-gray-500 mb-8"
        >
          Trusted By
        </motion.h3>
        <div className="flex flex-wrap justify-center items-center mt-8">
          {logos.map((logo, index) => (
            <Logo key={index} index={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;
