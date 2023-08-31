import React, { useState } from 'react'
import Avatar from '../component/Avatar'

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const add = (e) => {
    e.preventDefault();
    const newMessage = {name, email, message}
    console.log(newMessage);
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <Avatar />
          <form className="contact-form" onSubmit={add}>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              placeholder='Name'
              required />

            <input type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder='Email'
              required />

            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
              rows="4"
              placeholder='Message'
              required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact