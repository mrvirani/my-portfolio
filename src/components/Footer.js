import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 py-8 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-semibold">Connect with Me</h3>
        <div className="flex justify-center items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 text-xl transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl transition duration-300"
          >
            <FaGithub />
          </a>

          {/* Gmail */}
          <a
            href="mailto:maulikvirani5050@gmail.com"
            className="text-gray-300 hover:text-red-500 text-xl transition duration-300"
          >
            <FaEnvelope />
          </a>

          {/* Phone */}
          <a
            href="tel:+919909588273"
            className="text-gray-300 hover:text-green-500 text-xl transition duration-300"
          >
            <FaPhoneAlt />
          </a>
        </div>
        <p className="text-gray-400">
          &copy; 2024 MyPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
