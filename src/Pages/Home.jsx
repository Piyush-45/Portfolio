import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import MobileMenu from "../Components/MobileMenu";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
     strings: [' Full-Stack MERN Developer.', 'Cross-Platform App Developer(React Native)', 'YouTube Content Creator'],
      // Speed settings, try diffrent values untill you get good results
      startDelay: 30,
      typeSpeed:70,
      backSpeed: 50,
      backDelay: 200,
      loop: true
    });
    //Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <motion.main className="main_middle about_middle" initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:1}}>
      <div className="piyush">
        <h1>Piyush Tyagi</h1>
        <div className="im">
          I'M <span className="auto-type" ref={el}></span>
        </div>
      </div>
      <MobileMenu/>
    </motion.main>
  );
};

export default Home;
