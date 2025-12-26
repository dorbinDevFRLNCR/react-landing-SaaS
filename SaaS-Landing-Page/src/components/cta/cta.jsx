import React from 'react'
import './cta.css'
import Button from '../button/button'

function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h3>Experience the Future of Work Today</h3>
          <p>
            Take the first step towards transforming your business. Sign up for our free trial and
            experience the power of TechVantage for yourself.
          </p>
        </div>
        <Button variant="primary">Start Your Free Trial Now</Button>
      </div>
    </section>
  )
}

export default Cta
