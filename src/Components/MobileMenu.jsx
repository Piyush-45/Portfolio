import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../images/home f.png";
import aboutIcons from "../images/about green.png";
import servicesIcon from "../images/code f.png";
import portfolioIcon from "../images/briefcase green.png";
import contactIcon from "../images/mail green.png";
import blogIcon from "../images/blog green.png"
const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="home-icon">
        <Link to="/">
          <img src={homeIcon} alt="" />
        </Link>
      </div>
      <div className="about-icon">
        <Link to="/about">
          <img src={aboutIcons} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/services">
          <img src={servicesIcon} alt="" />
        </Link>
      </div>
      <div>
        <Link  to="/portfolio">
          <img src={portfolioIcon} alt="" />
        </Link>
      </div>
      <div>
        <Link  to="/portfolio">
          <img src={blogIcon} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <img src={contactIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
