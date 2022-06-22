import React, {useState} from "react"
import "./main.css"
import "../index.css"
import resume from "../assets/files/FULLSTACKCV (2).pdf"
import {Document, Page, pdfjs} from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Main() {


  return (
    <>

      <div className="container">
         <div className="box minor">
          Hi, my name is<br/>
                  <h1 className="text-accent major ff-sans-cond uppercase letter-spacing-1 name">{/* text accent */}
                  Roy Samson <br />
                    <span className="name">FULLSTACK DEVELOPER</span>{/*text white*/}
                  </h1>
                  <p id="description minor">
                    specialising in both backend and frontend web developement building and making smooth deisgn websites.
                  </p>
                  <button className="resume-loader">resume</button>
                  <Document
                  className="resume"
                    file={resume}
                    onLoadError={console.error}
                    style={{width: '20px', height: '20px'}}
                  >
                    <Page pageIndex={0}/>
                  </Document>
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
