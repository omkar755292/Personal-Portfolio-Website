import React from 'react'
import '../asset/css/aboutpage.css'
import InternshipCard from '../component/InternshipCard'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>Who I'm? Get to Know me!</h1>
        <p>
        I'm a Computer Engineering Graduate from Singad Institute, Pune working as a Freelancer Programmer proficiently in Web Development and Cloud Hosting/deployment. I like to sharing content related Technology that I have learned over the years in IT Industy so it can help other people in the Developer Community. Check out some of my Blogs in the Blog section and Feel free to Connect or Follow me on my <a href='https://www.linkedin.com/in/omkarpanchalcse/' target='blank'>Linkedin</a> where I post useful content related to Programming. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my Skills and Experience you can contact me.
        </p>
      </div>
      <InternshipCard />
    </section>
  )
}

export default About