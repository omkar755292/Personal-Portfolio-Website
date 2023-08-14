import React from 'react'

const Contact = () => {
  return (
    <div>
    <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" id="name" name="name" placeholder='Name' required />

            <input type="email" id="email" name="email" placeholder='Email' required />

            <textarea id="message" name="message" rows="4" placeholder='Message' required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact