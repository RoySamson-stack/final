import React from "react";
import ReactDOM from "react-dom";
import profile from "./img/me.JPG"

function About() {
  return (
    <div className="about">
      <h1 className="">About</h1>
      <div className="about-content">
      <img src={profile} alt="profile" className="profile-pic" />
      <p>I am a full stack developer using the technologies above. 
        I am currently a freelancer worling on personal projects and working
        while learning new languages and frameworks.
        I am currently looking for a job in the field of web development.
      </p>
      </div>
    </div>
  );
}
export default About;
