import Header from "./components/header";
import Main from "./components/main";
import About from "./components/about";
import Project from "./components/projectFinal";
import Contact from "./components/contact";
import "./App.scss"

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
