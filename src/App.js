import Header from "./components/header"
import Contact from "./components/contact"
import About from "./components/about"
import Project from "./components/projectFinal"
import Main from "./components/main"
// import Loader from "./components/loader"
import "./App.scss"
import "./index.css"

import {useRef, useState} from "react"

function App() {
  // const [loading, setLoading] = useState

  return (
    <div className="App">
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
