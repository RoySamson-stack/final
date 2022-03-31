import Header from "./components/header"
import Contact from "./components/contact"
import Project from "./components/projectFinal"
import Main from "./components/main"
import "./App.scss"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Project />
       {/* <Contact />  */}
    </div>
  )
}

export default App
