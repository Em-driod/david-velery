import React from "react";
import { motion } from "framer-motion";

const AppointmentPage: React.FC = () => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <div className="flex-grow container mx-auto px-4 py-24 flex items-center justify-center"> 
      {/* ↑ Increased py from 16 → 24 to drop it down more */}

      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden mt-10">
        {/* ↑ Added mt-10 to further push the card downward */}

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/coffe.jpg"
            alt="Appointment"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Let's Chat!
            </h1>
            <p className="text-gray-600 mb-8">
              We're excited to hear about your project. Fill out the form below
              and we'll get back to you shortly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4"
              >
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-4"
              >
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              {/* Project Select */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-4"
              >
                <label
                  htmlFor="project"
                  className="block text-gray-700 font-medium mb-2"
                >
                  What are you looking to do?
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  className="w-full px-4 py-3 border border-[#c2803f] rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-[#e07000]"
                >
                  <option value="">Select an option</option>
                  <option>Kitchen Remodel</option>
                  <option>Bathroom Remodel</option>
                  <option>New Construction</option>
                  <option>Other</option>
                </select>
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-8"
              >
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Tell us a little more
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="bg-[#e07000] text-white font-bold py-3 px-8 rounded-full 
                               transition duration-300 hover:bg-blue-600 shadow-lg"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
