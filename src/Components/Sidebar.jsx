import React from "react";

// !importing images
import git from "../images/swiper_webp/git webp.webp";
import twitter from "../images/swiper_webp/twitter-webp.webp";
import linkedin from "../images/swiper_webp/linkdin-webp.webp";
import profilePhoto from "../images/profile.svg";
import { motion } from "framer-motion";
// !importing css

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="top_part">
        <div className="profile_photo">
          <img src={profilePhoto} alt="" />
        </div>
        <div className="name">Piyush Tyagi</div>
        <p>Frontend Developer</p>
        <ul className="social_icons">
          <li>
            <a href="https://github.com/Piyush-45" target="_blank">
              <motion.img src={git} alt="" whileHover={{scale:1.1}} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Piyush_ty" target="_blank">
              <motion.img src={twitter} alt="" whileHover={{scale:1.1}}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/piyushtyagidev/"
              target="_blank"
            >
              <motion.img src={linkedin} alt="" whileHover={{scale:1.1}}/>
            </a>
          </li>
        </ul>
      </div>
      <a href="https://drive.google.com/file/d/17zUvt6rsKVO0ERnZPqX6b8LY8LYV8bzo/view?usp=sharing" target="_blank" className="cv_btn">
        Download CV
      </a>
      <div className="copyright">© 2022 All rights reserved.</div>
    </motion.aside>
  );
};

export default Sidebar;
