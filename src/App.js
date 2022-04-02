import Header from "./components/header"
// import Contact from "./components/contact"
import About from "./components/about"
import Project from "./components/projectFinal"
import Main from "./components/main"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Project />

       {/* <Contact />  */}
    </div>
  )
}

export default App
