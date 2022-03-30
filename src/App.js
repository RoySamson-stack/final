import Header from "./components/header"
import  Layout  from "./components/layout/index"
import "./App.scss"
import { Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />u
      <Routes>
       <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
