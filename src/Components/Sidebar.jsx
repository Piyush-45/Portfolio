import React from 'react'

// !importing images
import git from "../images/swiper_webp/git webp.webp"
import twitter from "../images/swiper_webp/twitter-webp.webp"
import linkedin from "../images/swiper_webp/linkdin-webp.webp"
import profilePhoto from "../images/profile.svg"
// !importing css


const Sidebar = () => {
  return (
    <aside>
        <div className="top_part">
                    <div className="profile_photo"><img src={profilePhoto} alt="" /></div>
                    <div className="name">Piyush Tyagi</div>
                    <p>Frontend Developer</p>
                    <ul className="social_icons">
                        <li><a href="https://github.com/Piyush-45" ><img src={git} alt=""/></a></li>
                        <li><a href="https://twitter.com/Piyush_ty"><img src={twitter} alt=""/></a></li>
                        <li><a href=""><img src={linkedin} alt=""/></a></li>
                    </ul>
                </div>
                <a href="https://github.com/Piyush-45" className="cv_btn">Download CV</a>
                <div className="copyright">© 2022 All rights reserved.</div>
    </aside>
  )


}

export default Sidebar
