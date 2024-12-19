import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations

const Portfolio = () => {
  const projects = [
    { 
      title: "Project One", 
      description: "E-commerce Website", 
      image: `https://picsum.photos/3000/300` // Dynamic image placeholder
    },
    { 
      title: "Project Two", 
      description: "Portfolio Website", 
      image: `https://picsum.photos/2000/300` // Dynamic image placeholder
    },
    { 
      title: "Project Three", 
      description: "Chat App", 
      image: `https://picsum.photos/200/300` // Dynamic image placeholder
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with smooth transitions
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800" data-aos="fade-up">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:rotate-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Stagger animation delay
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover mb-4"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
