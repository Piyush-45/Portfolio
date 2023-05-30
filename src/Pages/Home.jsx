import React from "react";
import Typed from "typed.js";

import { useEffect, useRef } from "react";
import MobileMenu from "../Components/MobileMenu";
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' a frontend web developer.', ' a freelancer.', ' a designer  and build beautiful websites.'],
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
    <main className="main_middle about_middle">
      <div className="piyush">
        <h1>Piyush Tyagi</h1>
        <div className="im">
          I'M <span className="auto-type" ref={el}></span>
        </div>
      </div>
      <MobileMenu/>
    </main>
  );
};

export default Home;
