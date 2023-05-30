import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import locationImg from "../images/location.png";
import mailIcon from "../images/mail green.png";
import tickicon from "../images/tick.png";
import MobileMenu from "../Components/MobileMenu";

const Contact = () => {
  // const [state, handleSubmit] = useForm("https://formspree.io/f/xknaraen");
  // if (state.succeeded) {
  //   return <p>Message Sent Successfully!</p>;
  // }

  return (
    <main className="about_middle">
      <h2 className="projects_h2 lets_talk">
        Let's<span className="me"> Chat</span>
      </h2>
      <div className="contact_container">
        <div className="left">
          <div className="card card-1">
            <img src={locationImg} alt="" />
            <p>Utttar Pradesh, India</p>
          </div>

          <div className="card card-2">
            <img src={mailIcon} alt="" />
            <p>piyushtyagidev@gmail.com</p>
          </div>

          <div className="card card-3">
            <img src={tickicon} alt="" />
            <p> Available for Freelance and Full-time Jobs</p>
          </div>
        </div>

        <div className="right">
          {/* <h3>
            How can I <span>Help you ?</span>
          </h3> */}
          <div className="details">
            <form
           
              action="https://formspree.io/f/xknaraen"
              method="POST"
            >
              <div className="top-item">
                <div className="name-half">
                  {/* <label htmlFor="name">Full Name</label> */}
                  <input
                    id="name"
                    type="text"
                    name="Username"
                    required
                    placeholder="Your Name"
                  />

                  {/* <label htmlFor="email">Email Address</label> */}
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail"
                  />

                  <input type="text" placeholder="Subject" autoComplete="off" name="Subject"/>
                </div>

                {/* <label htmlFor="message">Message</label> */}
                <div className="msg-half">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="message"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  value="send message"
                  className="btn-grad"
                >
                  Submit
                </button>
                {/* <ValidationError errors={state.errors} /> */}
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
