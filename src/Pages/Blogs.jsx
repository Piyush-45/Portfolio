import React from "react";
import { blogs } from "../data";

const Blogs = () => {
  return (
    <main className="about_middle blog_middle">
      <h2 className="blogs_h2">
        My <span className="me">Blogs</span>
      </h2>

      {blogs.map(({ id, blogDate, blogImage, blogTitle,a }) => {
        return (
          <div className="blogs_container"  key={id}>
            <div className="blog">
              <img src={blogImage} alt="" className="blog_image" />
              <div className="text_area">
                <div className="blog_details">
                <p className="blog_date">{blogDate}</p>
                <a
                  href={a}
                  target="_"
                >
                  <h4 className="blog_title">{blogTitle}</h4>
                </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Blogs;
