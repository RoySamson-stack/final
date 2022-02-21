import React from "react";
import ReactDOM from "react-dom";
import profile from "./img/me.JPG"


function About() {
  return (
    <div className="about">
      <h1 className="">About</h1>
      <div className="about-content">
      <img src={profile} alt="profile" className="profile-pic" />
      <p>I am a full stack developer currenlty located in Nairobi, Kenya.
        I am currenlty a freelancer doing projects and also still doing personal projects and learning more
        languages and frameworks.
      </p>
      </div>
    </div>
  );
}
export default About;
