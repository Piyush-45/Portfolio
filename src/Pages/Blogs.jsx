import React from "react";
import { blogs } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileMenu from "../Components/MobileMenu";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale:0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale:1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const Blogs = () => {
  return (
    <main className="about_middle blog_middle">
      <h2 className="blogs_h2">
        My <span className="me">Blogs</span>
      </h2>

      {blogs.map(({ id, blogDate, blogImage, blogTitle, a }) => {
        return (
          <div className="blogs_container" key={id}>
            <SingleBlog
              blogDate={blogDate}
              blogImage={blogImage}
              blogTitle={blogTitle}
              a={a}
            />
          </div>
        );
      })}
      <MobileMenu/>
    </main>
  );
};

const SingleBlog = ({ blogDate, blogImage, blogTitle, a }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.div
      className="blog"
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={cardVariants}
      ref={ref}
      
    >
      <img src={blogImage} alt="" className="blog_image" />
      <div className="text_area">
        <div className="blog_details">
          <p className="blog_date">{blogDate}</p>
          <a href={a} target="_">
            <h4 className="blog_title underline-hover">{blogTitle}</h4>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
