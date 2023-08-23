import React from 'react'
import internship_acmc from '../asset/images/img-intenship/acmcgrade.jpg'
import internship_oasis from '../asset/images/img-intenship/oasis.jpg'
import internship_tatastu from '../asset/images/img-intenship/tatastu.png'

const InternshipCard = () => {
  return (
    <div>
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
    </div>
  )
}

export default InternshipCard