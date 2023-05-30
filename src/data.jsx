// ? importing images
import webdevices from "./images/undraw_web_devices_re_m8sc (1).svg";
import responsive from "./images/responsive.svg";
import bugfixing from "./images/bug fixing.svg";
import seo from "./images/search-engine-optimization.png";

import blog1 from "./images/blog_images/hoisting.webp";
import blog2 from "./images/blog_images/blog2.webp";
import blog3 from "./images/blog_images/usecontext cover image.png";

// !project images
import layer_1 from "../src/images/swiper_webp/layer-ss-1-webp.webp";
import layer_2 from "../src/images/swiper_webp/layerss-2.webp";
import layer_3 from "../src/images/swiper_webp/layer-ss-3-webp.webp";

import ff1 from "../src/images/swiper_webp/ff1.webp";
import ff2 from "../src/images/swiper_webp/ff2.webp";
import ff3 from "../src/images/swiper_webp/filmfrenzy desktop 1.webp";
import ffcheck1 from "../src/images/swiper_webp/checkff1.png";

import spacex1 from "../src/images/swiper_webp/space-x-1.webp";
import spacex2 from "../src/images/swiper_webp/space-x-2.webp";
import spacex3 from "../src/images/swiper_webp/space-x-3.webp";

import hb1 from "../src/images/swiper_webp/hoo1.webp";
import hb2 from "../src/images/swiper_webp/hoo2.webp";
// import hb1 from "../src/images/swiper_webp/hoo.webp"
import github from "../src/images/githubf.png";

import plateful1 from "../src/images/swiper_webp/plateful1.webp";
import plateful2 from "../src/images/swiper_webp/plateful2.webp";
import plateful3 from "../src/images/swiper_webp/plateful3.webp";

export const aboutme = [
  {
    heading: "About ",
    aboutme_p1: `Hello ! My Name is Piyush Tyagi. I'm a self taught Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product`,
    aboutme_p2: `I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications. When not working or futzing around with code, I study how to escape from University. Actually for hire.
    Check out some of my work `,
  },
];

export const services = [
  {
    id: 1,
    image: `${webdevices}`,
    service_name: "WEB DESIGNER",
    service_detail:
      "From nothing to working, get your idea designed and developed. And I Will help you in telling that story.",
  },
  {
    id: 2,
    image: `${responsive}`,
    service_name: "Responsive / Mobile First",
    service_detail:
      "Get a mobile-first website. Fully responsive for all screen sizes, from small screens, tablets, to desktops.",
  },
  {
    id: 3,
    image: `${bugfixing}`,
    service_name: "Revamp Your Website",
    service_detail:
      "Improve a present website, fix bugs, or add a new feature to your site.",
  },
  {
    id: 4,
    image: `${seo}`,
    service_name: "SEO Optimization",
    service_detail:
      "Content is what the search engines use to fulfill user intent. Get Your websites SEO optimized and Go above and beyond",
  },
];

export const blogs = [
  {
    id: 1,
    blogDate: "10 Jan 2023",
    blogTitle: "JavaScript Variables Under the Hood",
    blogImage: `${blog1}`,
    a: `https://piyushtyagidev.hashnode.dev/javascript-variables-under-the-hood-how-var-let-and-const-impact-hoisting-scoping-and-shadowing`,
  },
  {
    id: 2,
    blogDate: "14 Jan 2023",
    blogTitle: "Unlocking the Power of Array Method",
    blogImage: `${blog2}`,
    a: `https://piyushtyagidev.hashnode.dev/unlocking-the-power-of-array-methods-a-comprehensive-guide-to-map-filter-and-reduce-in-javascript`,
  },
  {
    id: 3,
    blogDate: "May 19 2023",
    blogTitle: "Simplifying State Management with React’s useContext Hook",
    blogImage: `${blog3}`,
    a: `https://piyushtyagidev.hashnode.dev/simplifying-state-management-with-reacts-usecontext-hook`,
  },
];

export const projects = [
  {
    id: 1,
    image1: `${plateful1}`,
    image2: `${plateful2}`,
    image3: `${plateful3}`,
    description_heading: `Plateful: Elevate Your Culinary Journey `,
    description_para: ` 
  Plateful is a captivating frontend web development project, designed using React JS and CSS 3, that takes recipe management to new heights. With Firebase integration, users can create accounts, ensuring a secure experience, and save their cherished recipes. The app features an intuitive UI, complete with a smart search box and voice-powered audio search, making it a delightful and convenient cooking companion. `,
    live_site_link: `https://plateful.netlify.app/`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/Plateful`,
  },
  {
    id: 2,
    image1: `${ffcheck1}`,
    image2: `${ff2}`,
    image3: `${ff1}`,
    description_heading: `Filmfrenzy`,
    description_para: `FilmFrenzy is a  video streaming app built with React JS and CSS 3 for the UI and Firebase for the backend. In this application user can create thier account  and save their favourite shows, hence it also has authentication.  `,
    live_site_link: `https://filmyfrenzy.netlify.app`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/film-frenzy-draft1`,
  },
  {
    id: 3,
    image1: `${layer_1}`,
    image2: `${layer_2}`,
    image3: `${layer_3}`,
    description_heading: `Layers`,
    description_para: `A frontend for an eCommerce website built with Html5, CSS3, Vanila JS. It is one of my personal projects, the goal was to build a site with no frameworks and libraries and to show my core Javascript skills.   `,
    live_site_link: `https://layers-check.netlify.app`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/layerscheck1`,
  },
  {
    id: 4,
    image1: `${spacex1}`,
    image2: `${spacex2}`,
    image3: `${spacex3}`,
    description_heading: `Clone of SpaceX`,
    description_para: ` A Clone website of SpaceX, built with Html5, CSS3, Tailwind
    CSS. It is one of my personal project, the goal was to build component based website
    with HTML, CSS, without using any framework`,
    live_site_link: `https://spacexclone1.netlify.app/index.html`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/SpaceX-clone`,
  },
  {
    id: 5,
    image1: `${hb1}`,
    image2: `${hb2}`,
    image3: `${hb1}`,
    description_heading: `HooBank`,
    description_para: ` A Modern UI/UX website made with React js And Tailwind css.The goal was to showcase my react skills like. Multi page, authorization and some oher advanced and interactive feature  is coming soon... `,
    live_site_link: `https://hoobankpayement.netlify.app/`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/hoobank_payements`,
  },
  
];

// export const aboutme = [
//   {
//     heading: "About me",
//     aboutme_p1:
//       "Hello, I'm Piyush Tyagi, a self-taught developer and tech enthusiast based in [location]. With a passion for solving problems and a drive to learn, I've developed a strong foundation in frontend development and mastered several cutting-edge technologies.I decided to drop out of college because I wanted to pursue a more practical approach to learning that would equip me with real-life skills. Through hard work and determination, I have successfully developed a comprehensive skill set in frontend development, including proficiency in React, JavaScript, CSS, and HTML.",

//     aboutme_p2:
//       " My journey as a developer started when I realized that programming offers a powerful way to create innovative solutions and make an impact on the world. I am constantly looking to expand my knowledge and explore new technologies to create more efficient, user-friendly, and accessible solutions.",
//     aboutme_p3:
//       "With my passion for coding and problem-solving, I am committed to creating valuable products that meet the needs of clients and end-users alike. My goal is to help build and deliver high-quality web applications that provide real value to individuals and businesses.",
//   },
// ];
