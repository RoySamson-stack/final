import Header from "./components/header";
import Main from "./components/main";
import About from "./components/about";
import Project from "./components/projectFinal";
import Contact from "./components/contact";
import {  Route , Switch, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
