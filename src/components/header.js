import React, {Component} from 'react'
import Typewriter from 'typewriter-effect';
import $ from 'jquery' 

function Header(){

  
    return(
      <div className="main_header">
        <Typewriter
        className="typewriter"
        onInit={(typewriter) =>{
            typewriter.typeString("<h1>Hello world</h1>")
            .pauseFor(2000)
            .deleteAll()
            .typeString("<h1>Welcome to my page!</h1>")
            .deleteAll()
            .typeString('<h1>Thank you for visiting my page</h1>')
            .start();
          }}
        /> 
        <div className="header_btn">
        <a href="#projects" className="project_btn" id="">Projects</a>
        <a href="#contacts" className="contact_btn">Contact</a>  
        <div class="switch">
          <div class="flicker">
            <div class="moon"></div>
          </div>
        </div>
        </div>  
       
      </div>
    )
  }
 
export default Header