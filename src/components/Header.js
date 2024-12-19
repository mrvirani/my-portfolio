import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out" });
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white relative">
      <nav className="container mx-auto flex justify-between items-center py-6 px-8">
        <h1
          data-aos="fade-right"
          className="text-3xl font-bold tracking-wide"
        >
          My Portfolio
        </h1>
        <ul
          className="flex space-x-6"
          data-aos="fade-left"
        >
          <li>
            <a href="#about" className="hover:text-yellow-300 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-300 transition duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-yellow-300 transition duration-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div
        className="text-center py-20 relative overflow-hidden"
        data-aos="zoom-in"
      >
        {/* Background Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute top-10 left-10 bg-yellow-400 h-36 w-36 rounded-full opacity-30 blur-xl animate-bounce"
          ></div>
          <div
            className="absolute top-20 right-20 bg-purple-500 h-48 w-48 rounded-full opacity-20 blur-xl animate-pulse"
          ></div>
        </div>

        {/* Main Content */}
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to My Portfolio
        </h2>
        <p
          className="text-lg mb-6 animate-fade-in text-center max-w-screen-lg mx-auto"
          data-aos="fade-up"
        >
         I am a passionate React Native developer creating modern,
          high-performance mobile applications for both iOS and Android, focusing on seamless user experiences and cutting-edge features.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
          data-aos="flip-up"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;
