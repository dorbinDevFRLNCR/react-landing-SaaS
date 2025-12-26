//Button.jsx

import React from 'react'
import { motion } from 'framer-motion'
import './button.css'

function Button({ variant = 'default', children, ...rest }) {
  return (
    <motion.button className={`button button--${variant}`} {...rest} whileHover={{ scale: 1.05 }}>
      {children}
    </motion.button>
  )
}

export default Button
