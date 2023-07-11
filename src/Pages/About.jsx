import React from "react";
import { aboutme } from "../data";

import html from "../images/html color.png";
import css from "../images/css blue.png";
import js from "../images/javascript yellow.png";
import reactjs from "../images/react icon.svg";
import tailwind from "../images/tailwind css.jpg";
import api from "../images/apis.png";
import github from "../images/github color.png";
import webdesign from "../images/web design.png";
import firebase from "../images/firebase2.png";
import nextjs from "../images/next js.png";
import MobileMenu from "../Components/MobileMenu";
import native from "../images/native1.svg";
const About = () => {
  return (
    <>
      <main className="about_middle">
        <h2 className="about_h2">
          About <span className="me">me</span>
        </h2>
        <AboutmeTop />
        <div className="skills_icons">
          <div className="portfolio_description">
            Here are a few technologies I've been working with recently :
          </div>

          <div className="skills_icons_container">
            <div className="html si">
              <img src={html} alt="" />
              <p>HTML 5</p>
            </div>
            <div className="css si">
              <img src={css} alt="" />
              <p>CSS 3</p>
            </div>
            <div className="tailwind si">
              <img src={tailwind} alt="" />
              <p>Tailwind CSS</p>
            </div>
            <div className="ui si">
              <img src={webdesign} alt="" />
              <p>UI / UX</p>
            </div>
            <div className="js si">
              <img src={js} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="react si">
              <img src={reactjs} alt="" />
              <p>React JS</p>
            </div>
            <div className="react si">
              <img src={native} alt="" />
              <p>React Native</p>
            </div>
            <div className="tailwind si">
              <img src={nextjs} alt="" />
              <p>Next Js</p>
            </div>
            <div className="github si">
              <img src={github} alt="" />
              <p>Git & GitHub</p>
            </div>
            <div className="ui si">
              <img src={api} alt="" />
              <p>API's</p>
            </div>
            <div className="ui si">
              <img src={firebase} alt="" />
              <p>Firebase</p>
            </div>
          </div>
        </div>

        {/* <a href="https://github.com/Piyush-45" className="cv_btn">
        Download CV
      </a> */}
        <div className="resume_container">
          <a href="https://drive.google.com/file/d/17zUvt6rsKVO0ERnZPqX6b8LY8LYV8bzo/view?usp=sharing" target="_blank"  className="cv_btn about-cv">
            Download CV
          </a>
        </div>
        <MobileMenu />
      </main>
    </>
  );
};

const AboutmeTop = () => {
  return (
    <>
      {aboutme.map(
        ({ aboutme_p1, aboutme_p2, aboutme_p3, aboutme_p4, aboutme_p5 }) => {
          return (
            <div className="text_about_me">
              <div className="about_p_1">{aboutme_p1}</div>
              <br />
              <div className="about_p_2">{aboutme_p2}</div>
              <br />
              <div className="about_p_1">{aboutme_p3}</div>
              <br />
              <div className="about_p_1">{aboutme_p4}</div>
              <br />
              <div className="about_p_1">{aboutme_p5}</div>
            </div>
          );
        }
      )}
    </>
  );
};

export default About;
