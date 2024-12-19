import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
