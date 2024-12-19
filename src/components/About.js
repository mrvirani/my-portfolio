import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-16 left-10 bg-blue-300 h-32 w-32 rounded-full opacity-30 blur-xl animate-pulse"
        ></div>
        <div
          className="absolute bottom-20 right-20 bg-green-400 h-40 w-40 rounded-full opacity-30 blur-2xl animate-bounce"
        ></div>
      </div>

      <div
        className="container mx-auto text-center relative z-10"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl font-bold mb-6 text-gray-800"
          data-aos="fade-down"
        >
          About Me
        </h2>
        <p
          className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700"
          data-aos="zoom-in"
        >
          I am a passionate React Native developer with experience in building
          modern and engaging mobile applications. My expertise lies in creating
          seamless, high-performance apps for both iOS and Android. I enjoy
          exploring new technologies, solving complex problems, and delivering
          exceptional user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
