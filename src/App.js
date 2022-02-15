import Header from "./components/header"
import Main from "./components/main"
import About from "./components/about"
import ProjectCard from "./components/projectCard"
import projects from "./components/projects"

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <About />
   {projects.map(project => <ProjectCard 
   name={project.name}
   img={project.img}
   description={project.description}
   url={project.url}
   />)}
    </div>
  );
}

export default App;
