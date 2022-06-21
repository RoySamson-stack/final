import Header from "./components/header"
import Contact from "./components/contact"
import About from "./components/about"
import Project from "./components/projectFinal"
import Main from "./components/main"
import "./App.scss"
import "./index.css"
import {useRef, useState} from "react"

function App() {
  const contact = useRef(null)
  const projects = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Project />
       <Contact /> 
    </div>
  )
}

export default App
