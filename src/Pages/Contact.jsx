import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import locationImg from "../images/location.png";
import mailIcon from "../images/mail green.png";
import tickicon from "../images/tick.png";
import MobileMenu from "../Components/MobileMenu";
import { motion } from "framer-motion";

const boxVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Contact = () => {
  return (
    <main className="about_middle">
      <h2 className="projects_h2 lets_talk">
        Let's<span className="me"> Chat</span>
      </h2>
      <div className="contact_container">
        <motion.div
          className="left"
          variants={boxVariant}
          initial="hidden"
          animate="show"
        >
          <motion.div className="card card-1" variants={childVariant}>
            <img src={locationImg} alt="" />
            <p>Utttar Pradesh, India</p>
          </motion.div>

          <motion.div className="card card-2" variants={childVariant}>
            <img src={mailIcon} alt="" />
            <p>piyushtyagidev@gmail.com</p>
          </motion.div>

          <motion.div className="card card-3" variants={childVariant}>
            <img src={tickicon} alt="" />
            <p>Available for Freelance and Full-time Jobs</p>
          </motion.div>
        </motion.div>

        <div className="right">
          <div className="details">
            <form action="https://formspree.io/f/xknaraen" method="POST">
              <div className="top-item">
                <motion.div
                  className="name-half"
                  variants={boxVariant}
                  initial="hidden"
                  animate="show"
                >
                  <motion.input
                    id="name"
                    type="text"
                    name="Username"
                    required
                    placeholder="Your Name"
                    variants={childVariant}
                  />

                  <motion.input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail"
                    variants={childVariant}
                  />

                  <motion.input
                    type="text"
                    placeholder="Subject"
                    autoComplete="off"
                    name="Subject"
                    variants={childVariant}
                  />
                </motion.div>

                <motion.div className="msg-half" initial={{opacity:0, x:100}} animate={{x:0, opacity:1}} transition={{duration:1}}>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="message"
                  ></textarea>
                </motion.div>
              </div>

              <div>
                <motion.button
                initial={{opacity:0}}
                animate={{opacity:1}}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  value="send message"
                  className="btn-grad"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <MobileMenu />
    </main>
  );
};

export default Contact;
