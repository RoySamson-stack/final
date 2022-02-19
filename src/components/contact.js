import React from "react"
import ReactDOM from "react-dom"


export default function Contact(){
  return(
    <div className="contact">
      <form className="contact-form">
        <input type="text" placeholder="Name" className="name-input"/>
        <br />
        <input type="email" placeholder="Email" className="email-input" />
        <br />
        <textarea placeholder="Message" className="messages-input"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}