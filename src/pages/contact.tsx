// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#f8f7f4] min-h-screen flex flex-col justify-center items-center px-6 py-20 font-body">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-semibold text-[#2f3746] mb-4">
          Let’s Design Your Dream Home
        </h1>
        <p className="text-[#6c757d] text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you’re planning a full home renovation or just exploring design options,
          we’re here to bring your vision to life. Reach out, and let’s create something
          extraordinary together.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        
        {/* --- Left Side: Form --- */}
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#2f3746] mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2f3746] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6ccbc]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2f3746] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6ccbc]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#2f3746] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6ccbc]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2f3746] text-[#d6ccbc] py-3 rounded-lg font-medium hover:bg-[#3a4252] transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Options */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:307 462 9173"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2f3746] text-[#2f3746] rounded-full hover:bg-[#2f3746] hover:text-[#d6ccbc] transition-all duration-300"
            >
              📞 Call Us
            </a>
            <a
              href="tel:307 462 9173"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#d6ccbc] text-[#2f3746] rounded-full hover:bg-[#c7bfae] transition-all duration-300"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* --- Right Side: Map + Info --- */}
        <div className="space-y-8">
          {/* Location Info */}
          <div className="bg-[#2f3746] p-10 rounded-2xl text-[#d6ccbc] shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Design Studio</h2>
            <p className="text-[#d6ccbc]/90 leading-relaxed mb-6">
              Visit our design studio to explore material samples, design boards,
              and 3D model previews of your dream home.
            </p>
            <p className="text-sm leading-relaxed">
              📍  600 Dewar Dr, Rock Springs, WY 82901

              <br />
              📞 +307 462 9173
              <br />
              ✉️ info@Designheaven.com
            </p>
          </div>

          {/* Embedded Map */}
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
