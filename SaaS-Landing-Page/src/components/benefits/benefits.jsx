import React from 'react'
import { motion } from 'framer-motion'
import './benefits.css'
import clockIcon from '../../assets/icons/clock-icon.svg'
import backpackIcon from '../../assets/icons/backpack-icon.svg'
import grafikIcon from '../../assets/icons/grafik-icon.svg'
import secureIcon from '../../assets/icons/security-icon.svg'
import hourIcon from '../../assets/icons/hourly-icon.svg'

function Benefits() {
  const benefitsData = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline your workflow and save time.',
      icon: clockIcon,
    },
    {
      title: 'Improved cooperation',
      description: 'Foster teamwork and communication.',
      icon: backpackIcon,
    },
    {
      title: 'Scalability',
      description: 'Adapt to growing business needs seamlessly.',
      icon: grafikIcon,
    },
    {
      title: 'Data Security',
      description: 'Ensure the safety and privacy of your valuable data.',
      icon: secureIcon,
    },
    {
      title: '24/7 Support',
      description: 'Provide round-the-clock assistance to your customers.',
      icon: hourIcon,
    },
  ]

  return (
    <section className="benefits">
      <div className="benefits-container">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: index * 0.1,
            }}
          >
            <div className="benefit-content">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>

              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
