// src/components/Global.tsx
import React from "react";

const Global: React.FC = () => {
  return (
    <div className="bg-[#2f3746] w-full py-28 flex justify-center items-center font-body">
      <div className="flex flex-col items-center text-center px-6 max-w-4xl">
        
        {/* Title */}
        <h1 className="font-display text-[#d6ccbc] text-4xl md:text-6xl font-normal leading-tight mb-7">
          Transform Your Space Into a Work of Art
        </h1>

        {/* Subtitle */}
        <p className="text-[#d6ccbc] text-lg opacity-90 mb-10 leading-relaxed max-w-2xl">
          Your home deserves more than just walls and furniture — it deserves a story.  
          Our design philosophy combines architectural precision with emotional warmth, 
          turning every corner into a masterpiece of comfort, elegance, and modern living.  
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-[#d6ccbc] rounded-full mb-10"></div>

        {/* Body / CTA Content */}
        <p className="text-[#d6ccbc] text-base md:text-lg mb-14 max-w-3xl leading-relaxed opacity-90">
          Whether you’re building a new home or redesigning your current space, our design team 
          will guide you from concept to completion — from lighting layouts to material selection.  
          Every project we craft reflects individuality, functionality, and timeless sophistication.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Call Button */}
          <a
            href="tel:07016969298"
            className="flex items-center justify-center gap-2 px-8 py-4 w-64 sm:w-auto 
                       text-[#d6ccbc] text-base font-medium 
                       border-2 border-[#d6ccbc] rounded-full 
                       hover:bg-[#d6ccbc]/10 transition duration-300 ease-in-out"
          >
            <span className="text-xl">📞</span>
            Call Our Design Team
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/07016969298"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 w-64 sm:w-auto 
                       bg-[#d6ccbc] text-[#2f3746] 
                       text-base font-semibold rounded-full 
                       shadow-lg hover:bg-[#d6ccbc]/90 transition duration-300 
                       tracking-wide"
          >
            Book a Design Consultation
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-[#d6ccbc]/80 text-sm mt-14 tracking-wide">
          Every design begins with a conversation — let’s make your home unforgettable.
        </p>
      </div>
    </div>
  );
};

export default Global;
