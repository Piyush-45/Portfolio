import React from "react";

import homeIcon from "../images/home f.png";
import aboutIcon from "../images/about green.png";
import servicesIcon from "../images/code f.png";
import projectsIcon from "../images/briefcase green.png";
import contactIcon from "../images/mail green.png";
import blogIcon from "../images/blog green.png";

import { Link } from "react-router-dom";

const Sidemenu = () => {
  return (
    <div className="menu">
      <div className="icon home">
        <div className="tooltip">Home</div>
        <Link to="/">
          <span>
            <img src={homeIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon about">
        <div className="tooltip">About</div>
        <Link to="/about">
          <span>
            <img src={aboutIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon services">
        {/* <div className="tooltip"></div> */}
        <div className="tooltip">Services</div>
        <Link to="/services">
          <span>
            <img src={servicesIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon blogs">
        <div className="tooltip">Blogs
        </div>
        <Link to="/blogs">
          <span>
            <img src={blogIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon contact">
        <div className="tooltip">Projects</div>
        <Link to="/portfolio">
          <span>
            <img src={projectsIcon} alt="" />
          </span>
        </Link>
      </div>

      <div className="icon contact">
        <div className="tooltip">Contact</div>
        <Link to="/contact">
          <span>
            <img src={contactIcon} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidemenu;
