import React from 'react'


function Header(){


    return(
      <div className="main_header">
        <h1 className="name-title">RS</h1>
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