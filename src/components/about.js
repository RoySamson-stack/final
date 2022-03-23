import React from "react";
import profile from "./img/me.JPG"
import Github from "./img/github.png";
import Linkedin from "./img/linkedin.png";


function About() {
  return (
    <div className="about">
      <h1 className="">About</h1>
      <div className="about-content">
      <p>Hello my name is Roy Samson and I love creating web apps and websites. I started my web development journey back in 2020
        by starting out in Youtube tutorials and eventually enrolled in Moringa school in 2021 and did the Introduction to programming module learning HTML , CSS and 
        Javascript. 

        Fast-forward am currently can do both frontend and backend developement using technologies such as React for frontend and Nodejs for backend.

        Techologies I have used as listed below.
        <div className="lang-list">
          <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul>
          <li>React</li>
          <li>Expressjs</li>
          <li>Nodejs</li>
        </ul></div>
        You can also iew more projects that are not listed below on my github.
      </p>
      <img src={profile} alt="profile" className="profile-pic"/>
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
