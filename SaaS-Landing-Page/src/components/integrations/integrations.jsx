import React from 'react'
import { motion } from 'framer-motion'
import './integrations.css'
import interationsImage from '../../assets/image/integrations-image.png'
import Button from '../button/button'

function Integrations() {
  return (
    <section className="integation-section">
      <motion.div
        className="integration-content"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <h2>Seamless Software Integrations</h2>
        <p>
          Connect, collaborate, and automate with TechVantage's extensive library of integrations.
          Our platform seamlessly integrates with popular software, empowering you to streamline
          workflows and maximize productivity.
        </p>
        <Button variant="primary">Explore Our Integrations Today</Button>
      </motion.div>

      <motion.div
        className="integration-image"
        initial={{ opacity: 0, x: +60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <img src={interationsImage} alt="Explore Our Integrations Today image" />
      </motion.div>
    </section>
  )
}

export default Integrations
