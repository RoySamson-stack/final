import React from "react"
import "./main.css"
// import Loader from 'react-loaders'
import profile from "./img/me.JPG"

import { FaGithub } from "react-icons/fa"

function Main() {
  return (
    <>
      <div className="container">
        <div className="box">
          <main id="main" class="grid-container grid-container--home">
            <div>
            <p>Hi, my name is</p>
              <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
              Roy Samson 
                <span class="d-block fs-900 ff-serif text-white">FULLSTACK DEVELOPER</span>
              </h1>

              <p>
                specialising in both backend and frontend web developement building and making smooth deisgn websites.
              </p>
            </div>
            <div>
              <a
                href="destination.html"
                class="large-button uppercase ff-serif text-dark bg-white"
              >
              <img src={profile} alt="profile" className="profile-pic"/>
              </a>
              {/* <img src={profile} alt="profile" 
              class="large-button uppercase ff-serif text-dark bg-white profile-pic"/> */}

            </div>
          </main>
        </div>
        <div className="btn-group">
          <button className="btn">Contact</button>
        </div>
      </div>
      {/* <a
        href="https://github.com/RoySamson-stack/"
        target="_blank"
        rel="noreferrer"
      >
        <footer>
          <div className="texto">
            <span>
              <FaGithub classNameName="github-icon" />
              Github
            </span>
          </div>
        </footer>
      </a> */}
      {/* <Loader type="pacman" /> */}
    </>
  )
}
export default Main
