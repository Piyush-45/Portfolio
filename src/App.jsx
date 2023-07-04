import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
// ? importing components

import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import Sidemenu from "./Components/Sidemenu";

// ? importing pages
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import { motion } from "framer-motion";
import image from "./images/swiper_webp/backgroundimage.png";

// ?router
import { Routes, Route } from "react-router-dom";


import MobileMenu from "./Components/MobileMenu";
import Blogs from "./Pages/Blogs";
const App = () => {
  // ! for making background move
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;
      const mouseX = pageX * -1 / 20;
      const mouseY = pageY * -1 / 20;
      document.body.style.backgroundPosition = `${mouseX}px ${mouseY}px`;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  return (
    
    //  <div className='app',style={{ backgroundImage:`url(${image}) ` }} >
    <>

      <div className="parent_container" >
        <div className="main_container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs/>}/>
          </Routes>
        </div>
          {/* <MobileMenu /> */}
      </div>
      <Sidemenu />
    </>
  );
};

export default App;
