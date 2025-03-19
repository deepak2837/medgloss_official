import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 px-4">
      <motion.div
        className="relative w-full max-w-lg p-10 rounded-2xl hover:shadow-lg hover:scale-50 bg-opacity-60 backdrop-blur-md shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-6">Contact Us</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              rows="5"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-pink-500 transition-all text-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
