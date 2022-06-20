import Header from "./components/header"
import Contact from "./components/contact"
import About from "./components/about"
import Project from "./components/projectFinal"
import Main from "./components/main"
import "./App.scss"
import "./index.css"
import {useState} from "react"

function App() {
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
