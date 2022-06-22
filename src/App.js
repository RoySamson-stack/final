import Header from "./components/header"
import Contact from "./components/contact"
import About from "./components/about"
import Project from "./components/projectFinal"
import Main from "./components/main"
// import Loader from "./components/loader"
// import "./App.scss"
import "./index.css"

import React,{ useState } from "react"

function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener("mousemove", e => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div className="App">
      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      {/* <Loader /> */}
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App
