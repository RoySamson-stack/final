import React from 'react'
import ReactDOM from "react-dom"


function Header(){
  return(
    <div className="main_header">
      <h1>Hello world</h1>
      <div className="header_btn">
      <button className="project_btn" id="">Projects</button>
      <button className="contact_btn">Contact</button>  
      </div>   
    </div>
  )
}
export default Header