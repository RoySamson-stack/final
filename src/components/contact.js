import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gb84o07', form.current, 'user_XU4VHJ6kyKU8vQJxJzXdu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <div className="contact">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="name" className="name-input"/>
      <label>Email</label>
      <input type="email" name="email" className="email-input"/>
      <label>Subject</label>
      <input type="text" name="subject" className="subject-input"/>
      <label>Message</label>
      <textarea name="message" className="messages-input"/>
      <input type="submit" value="Send" className="contact-btn"/>
    </form>
    </div>
  
  );
};