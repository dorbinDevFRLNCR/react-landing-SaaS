import React from 'react'
import './testimonial.css'
import johnIcon from '../../assets/icons/john.svg'
import emilyIcon from '../../assets/icons/emily.svg'
import michaelIcon from '../../assets/icons/michael.svg'
import jonnyIcon from '../../assets/icons/jonny.svg'

function TestimonialBlock() {
  const testimonialData = [
    {
      icon: johnIcon,
      description:
        'TechVantage has transformed the way we work. It has streamlined our processes and improved collaboration across teams. Highly recommended!',
      jobInfo: 'ABC Company',
      info: 'John Smith, CEO',
    },
    {
      icon: emilyIcon,
      description:
        "We've been using TechVantage for months now, and it has become an indispensable tool for our business. The seamless communication and task management features have boosted our productivity significantly.",
      jobInfo: 'DEF Corporation',
      info: 'Emily Johnson, Marketing Manager',
    },
    {
      icon: michaelIcon,
      description:
        "TechVantage's powerful analytics have given us invaluable insights into our business performance. The data visualization and reporting capabilities are exceptional, helping us make data-driven decisions with confidence.",
      jobInfo: 'GHI Industries',
      info: 'Michael Chen, CFO',
    },
    {
      icon: jonnyIcon,
      description:
        'TechVantage has transformed the way we work. It has streamlined our processes and improved collaboration across teams. Highly recommended!',
      jobInfo: 'ABC Company',
      info: 'John Smith, CEO',
    },
  ]

  return (
    <div className="testimonial-inner">
      {testimonialData.map((testimonial, index) => (
        <div key={index} className="testimonial-container">
          <div className="testimonial-image">
            <img src={testimonial.icon} alt={testimonial.info} />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-description">{testimonial.description}</p>
            <span className="testimonial-job-info">{testimonial.jobInfo}</span>
            <p className="testimonial-info">{testimonial.info}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TestimonialBlock
