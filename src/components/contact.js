import React, { useRef } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_143xt2i",
        "template_gb84o07",
        form.current,
        "user_XU4VHJ6kyKU8vQJxJzXdu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1 className="contact-title">CONTACT</h1>
        <div className="contact-details">
        <input type="text" name="subject" className="subject-input" placeholder="Subject"/>
        <input type="text" name="name" className="name-input" placeholder="Name"/>
        <input type="email" name="email" className="email-input" placeholder="Email"/>
        <textarea name="message" className="messages-input" placeholder="Messages"/>
        <input type="submit" value="Send" className="contact-btn" />
        </div>
      </form>
    </div>
  );
}
