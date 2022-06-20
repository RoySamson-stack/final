import React from "react";
// import profile from "./img/me.JPG"
import Github from "./img/github.png";
import Linkedin from "./img/linkedin.png";


function About() {
  return (
    <div className="about-section">
    <h1 className="about-title">About</h1>
    <div className="about">
      <div className="about-content">
      <p>
        I am a full stack developer located in Nairobi, Kenya. 
        I enjoy creating things on the internet. I started my journey back in 2020 and decided to dedicate my time 
        to learn both front and backend web development. 
        Currently am  taking part in a Software Engineering programs at <a className="text-accent" href="" target="blank">Jenga school</a> to increase my programming language pool and further my knowledge.
      </p>
      </div>
    </div>
    </div>
  )
  }
  export default About
 /* <div className="socials">
        <h1 className="contact-title">Socials</h1>
        <div className="socials-container">
          <a href="https://www.linkedin.com/in/samsonroy/">
            <img src={Linkedin} className="social-icons" alt="icons" id="github-icon" />
          </a>
          <a href="https://github.com/RoySamson-stack">
            <img src={Github} className="social-icons" id="linkedin-icon" alt="icon"/>
          </a>
        </div>
      </div> */