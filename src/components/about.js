import React from "react";
import profile from "./img/me.JPG"
import Github from "./img/github.png";
import Linkedin from "./img/linkedin.png";


function About() {
  return (
    <div className="about">
      <h1 className="">About</h1>
      <div className="about-content">
      <img src={profile} alt="profile" className="profile-pic"/>
      <p>I am a full stack developer currenlty located in Nairobi, Kenya.
        I am currenlty a freelancer doing projects and also still doing personal projects and learning more
        languages and frameworks.
      </p>
      </div>
      <div className="socials">
        <h1 className="contact-title">Socials</h1>
        <div className="socials-container">
          <a href="https://www.linkedin.com/in/samsonroy/">
            <img src={Linkedin} className="social-icons" alt="icons" id="github-icon" />
          </a>
          <a href="https://github.com/RoySamson-stack">
            <img src={Github} className="social-icons" id="linkedin-icon" alt="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
