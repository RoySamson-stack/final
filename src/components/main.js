import React from "react";
import ReactDOM from "react-dom";

function Main() {
  return (
    <div className="main_body">
      <p className="name">Roy Samson</p>
      <p className="role">Full stack developer</p>
      <div className="language_container">
        <p className="language cube" id="html">HTML</p>
        <p className="language cube" id="css">CSS</p>
        <p className="language cube" id="js">JavaScript</p>
        <p className="language cube" id="react">React</p>
        <p className="language cube" id="node">Node.js</p>
        <p className="language cube" id="express">Express</p>
        <p className="language cube" id="mongo">MongoDB</p>
        <p className="language cube" id="sql">MySQL</p>
        <p className="language cube" id="git">Git</p>
        <p className="language cube" id="github">Github</p>
        <p className="language cube" id="php">PHP</p>
      </div>
      
    </div>
  )
}
export default Main;