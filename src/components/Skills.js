import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "Tailwind CSS"];

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" }); // Initialize AOS with a smooth duration
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-black py-4 rounded-lg shadow-lg transform hover:scale-110 hover:rotate-6 hover:translate-y-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              data-aos="zoom-in-up" // Add AOS effect for each skill card
              data-aos-delay={index * 100} // Staggered animation delay
            >
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
