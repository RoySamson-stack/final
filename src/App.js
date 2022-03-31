import Header from "./components/header"
import Contact from "./components/contact"
import Main from "./components/main"
import "./App.scss"
import { Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
    <Main />
    {/* <Contact /> */}
    </div>
  )
}

export default App
