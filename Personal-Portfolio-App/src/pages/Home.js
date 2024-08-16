import React from 'react'
import laptopimg from '../asset/images/laptop.svg'
import DownloadCV from '../component/DownloadCV'

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
              modules that leads to the success of the overall product. <br /> I design and code beautifully simple things, and I
              love what I do.
            </p>
            <div><img src={laptopimg} alt="laptopimg" /></div>
          </div>
          <DownloadCV />
        </section>
          <hr />
      </main>
    </div>
  )
}

export default Home