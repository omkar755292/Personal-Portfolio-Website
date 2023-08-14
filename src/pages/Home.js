import React from 'react'
import laptopimg from "../images/laptop.svg";
import internship_acmc from '../images/img-intenship/acmcgrade.jpg'
import internship_oasis from '../images/img-intenship/oasis.jpg'
import internship_tatastu from '../images/img-intenship/tatastu.png'

const Home = () => {
  return (
    <div>
      <main>
        {/* Home Section  */}
        <section className="home-section">
          <div className="home-container">
            <h1>Hello there! I'm Omkar</h1>
            <p>
              A Full Stack Developer and Bloger focused on Developing Software Application and building the
              modules that leads
              to the success of the overall product. <br /> I design and code beautifully simple things, and I
              love what I do.
            </p>
            <div><img src={laptopimg} alt="laptopimg" /></div>
          </div>
        </section>

        {/* About Section  */}
        <section className="about-section">
        <div className="about-container">
          <h1>Who I'm? Get to Know me!</h1>
          <p>
            I'm a Computer Engineering Graduate from Singad Institute, Pune working as a
            Freelancer
            Programmer proficiently in Web Development and Cloud Computing. I like to sharing content
            related
            Technology that I have learned over the years in IT Industy so it can help other people in
            the
            Developer
            Community. Check out some of my Blogs in the Blog section and Feel free to Connect or Follow
            me
            on my Linkedin where I post useful content related to Programming. I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a good opportunity that
            matches my Skills and Experience you can contact me.
          </p>
        </div>
      </section>
      <hr />

      {/* Internship Section  */}
      <section className="internship-section">
        <div className="internship-info">
          <h1>I'm proud to have do Internship in some <br /> awesome companies:</h1>
        </div>
        <div className="internship-container">
          <div className="internship"><img src={internship_acmc} alt="" /></div>
          <div className="internship"><img src={internship_oasis} alt="" /></div>
          <div className="internship"><img src={internship_tatastu} alt="" /></div>
        </div>
      </section>
      <hr />
      </main>
    </div>
  )
}

export default Home