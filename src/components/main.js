import React from "react"
import "./main.css"
import "../index.css"


function Main() {
  return (
    <>
      <div className="container">
         <div className="box minor name">
          Hi, my name is<br/>
                  <h1 class="text-accent major ff-sans-cond uppercase letter-spacing-1">{/* text accent */}
                  Roy Samson <br />
                    <span class="">FULLSTACK DEVELOPER</span>{/*text white*/}
                  </h1>
                  <p id="description minor">
                    specialising in both backend and frontend web developement building and making smooth deisgn websites.
                  </p>
             </div>
            </div>
            <div>

            </div>
        {/* <div className="btn-group">
          <button className="btn">Contact</button>
        </div> */}
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
