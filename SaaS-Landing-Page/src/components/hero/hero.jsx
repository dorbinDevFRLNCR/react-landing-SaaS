//Hero.jsx

import React from 'react'
import { motion } from 'framer-motion'
import './hero.css'
import Button from '../button/button'
import HeroImage from '../../assets/image/Hero.png'

function Hero() {
  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <h1>TechVantage Solutions</h1>

        <p>
          Empowering Businesses with Innovative Solutions for Success and Growth. Streamline
          workflows, foster collaboration, and unlock your true potential with TechVantage.
          Experience the future of work today.
        </p>

        <div className="buttons">
          <Button variant="primary">Start Your Free Trial Now</Button>
          <Button variant="secondary">Request a demo</Button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: +60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <img src={HeroImage} alt="Hero image png" />
      </motion.div>
    </div>
  )
}

export default Hero
