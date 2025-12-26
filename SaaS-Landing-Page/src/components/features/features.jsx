import React from 'react'
import './features.css'
import { motion } from 'framer-motion'
import featureImage from '../../assets/image/first-feature.jpg'
import Button from '../button/button'

function Features() {
  const featuresData = [
    {
      subtitle: '1st functionality',
      title: 'Effortless Task Management',
      description:
        'Simplify project management with our intuitive task tracking system. Assign tasks, set deadlines, and track progress effortlessly.',
      buttonText: 'Streamline Tasks Now',
      featureImage: featureImage,
    },
    {
      subtitle: '2nd functionality',
      title: 'Seamless Communication',
      description:
        'Facilitate seamless communication and collaboration with integrated messaging and real-time updates. Stay connected and never miss.',
      buttonText: 'Connect and Collaborate Today',
      featureImage: featureImage,
    },
    {
      subtitle: '3rd functionality',
      title: 'Powerful Analytics',
      description:
        'Gain valuable insights into your business with our powerful analytics tools. Track key metrics, visualize data, and make informed decisions.',
      buttonText: 'Gain Insights Instantly',
      featureImage: featureImage,
    },
  ]

  const textVariants = {
    hidden: (isReverse) => ({
      opacity: 0,
      x: isReverse ? 60 : -60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: (isReverse) => ({
      opacity: 0,
      x: isReverse ? -60 : 60,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="features">
      <div className="features-subinfo">
        <h2>Streamline Your Workflow with TechVantage</h2>
        <p>
          TechVantage is a cutting-edge SaaS solution designed to revolutionize the way businesses
          operate. Our powerful platform empowers you to streamline your workflow, optimize
          collaboration, and drive productivity. Experience the future of work with TechVantage.
        </p>
      </div>
      {featuresData.map((feature, index) => {
        const isReverse = index % 2 !== 0

        return (
          <motion.div
            key={index}
            className={`feature-container ${isReverse ? 'reverse' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="feature-content"
              custom={isReverse}
              variants={textVariants}
              style={{ willChange: 'transform' }}
            >
              <h4 className="feature-subtitle">{feature.subtitle}</h4>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <Button variant="primary">{feature.buttonText}</Button>
            </motion.div>

            <motion.div
              className="feature-image"
              custom={isReverse}
              variants={imageVariants}
              style={{ willChange: 'transform' }}
            >
              <img src={feature.featureImage} alt={feature.title} />
            </motion.div>
          </motion.div>
        )
      })}
    </section>
  )
}

export default Features
