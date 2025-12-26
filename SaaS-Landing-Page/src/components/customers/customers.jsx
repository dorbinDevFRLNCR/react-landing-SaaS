import React from 'react'
import './customers.css'
import TestimonialBlock from '../testimonial/testimonial'

function Customers() {
  return (
    <section className="customers-section">
      <div className="customer-intro">
        <h3>Join Thousands of Satisfied Customers</h3>
        <p>
          Don't just take our word for it. Hear what our customers have to say about their
          experience with TechVantage.
        </p>
      </div>
      <TestimonialBlock />
    </section>
  )
}

export default Customers
