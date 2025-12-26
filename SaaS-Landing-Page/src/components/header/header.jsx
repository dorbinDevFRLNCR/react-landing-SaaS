//Header.jsx

import React from 'react'
import { useState } from 'react'
import './header.css'
import Logo from '../../assets/image/TechVantage.png'
import Button from '../button/button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={Logo} alt="TechVantage Logo" />
        </div>

        <button className="burger-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>

          <div className="mobile-cta">
            <Button variant="login">Log-In</Button>
            <Button variant="primary">Get started now</Button>
          </div>
        </nav>

        <div className="header-cta desktop-cta">
          <Button variant="login">Log-In</Button>
          <Button variant="primary">Get started now</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
