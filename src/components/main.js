import React from "react"
import "./main.scss"

import {FaGithub} from "react-icons/fa"

function Main() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Roy Samson<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Fullstack Developer</p>
          </div>
        </div>
        <div classNameName="description">

        </div>
      </div>
      <a href="https://github.com/RoySamson-stack/" target="_blank">
        <footer>
          <div className="texto">
            <span>
              <FaGithub classNameName="github-icon"/>
              Github
            </span>
          </div>
        </footer>
      </a>
    </>
  )
}
export default Main
