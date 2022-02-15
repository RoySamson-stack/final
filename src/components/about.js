import React from "react";
import ReactDOM from "react-dom";
import profile from "./img/me.JPG"

function About() {
  return (
    <div className="about">
      <h1 className="">About</h1>
      <div className="about-content">
      <p>I am a full stack developer using the technologies above</p>
      <img src={profile} alt="profile" className="profile-pic" />
      </div>
    </div>
  );
}
export default About;
