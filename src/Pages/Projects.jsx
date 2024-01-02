import React from "react";
import MobileMenu from "../Components/MobileMenu";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Autoplay, Pagination, Navigation } from "swiper";
import recipeVideo from "../images/recipeappvideo.mp4"
import newsapp from "../images/newsApp.mp4"
import { projects } from "../data";

import "swiper/css";
const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}
const Projects = () => {
  return (
    <main className="project_middle about_middle">
      <h2 className="projects_h2">
        My <span className="me">Portfolio</span>
      </h2>

      <div className="project_1">
        <div className="appProjectContainer">
          <video width={'100%'} height="360" controls>
            <source src={recipeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="description_heading">
            Culinary Companion: A Feature-Rich React Native Recipe App
          </div>
          <p className="appDescriptionp">
            Introducing my latest React Native creation – a Recipe App that elevates your culinary journey. Immerse yourself in seamless navigation with <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Stack and Drawer Navigation</span>. From dynamic animations to a Masonry List layout, the app ensures a visually delightful experience. <br />
            Unlock culinary exploration with categories, advanced search, and Masonry List. <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Firebase authentication </span>adds a personalized touch, allowing users to save and savor recipes.
          </p>
        </div>

        <div className="appProjectContainer">
          <video width={'100%'} height="360" controls>
            <source src={newsapp} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="description_heading">

            Explore FlahsFeed: Your Modern News Hub in React Native
          </div>
          <p className="appDescriptionp">Unveil a seamless news exploration with <strong> FlashFeed</strong>, my latest React Native project. Navigate effortlessly through the latest stories using intuitive tabs and a fluid FlatList integration. <span style={{ color: "#0b9876", fontWeight: 'bold' }}> The app's responsive design </span>adapts seamlessly across devices for an optimal viewing experience. <br />
            What sets InfoPulse apart is its secure <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Firebase authentication,</span>  ensuring user trust. Save and savor your favorite news stories, adding a personal touch to your news feed. This app is more than a news app; it's a testament to my <span style={{ color: "#0b9876", fontWeight: 'bold' }}>React Native expertise</span> , offering a captivating and personalized news experience. 🌐📲📰</p>
        </div>
        {projects.map(
          ({ id,
            image1,
            image2,
            image3,
            description_heading,
            description_para,
            live_site_link,
            live_site,
            github_image,
            github_link }
          ) => {
            return (
              <>
                <div className="swiper" key={id}>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                  >
                    <SwiperSlide className="swiper-slide">
                      <img src={image1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={image2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={image3} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="description ">
                  <div className="desc">
                    <div className="description_heading">
                      {description_heading}
                    </div>
                    <p>{description_para}</p>

                    <div className="referal-link">
                      <a href={live_site_link} target="_">{live_site}</a>
                      <a href={github_link} target="_"><img src={github_image} alt="" /></a>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>

      <MobileMenu />
    </main>
  );
};

export default Projects;
