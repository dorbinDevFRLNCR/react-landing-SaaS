import React from 'react'
import './footer.css'
import Logo from '../../assets/image/TechVantage.png'
import Twitter from '../../assets/icons/fa-twitter.svg'
import Facebook from '../../assets/icons/fa-facebook-square.svg'
import Google from '../../assets/icons/fa-google-plus.svg'
import BlogImage1 from '../../assets/image/footer-post-1.jpg'
import BlogImage2 from '../../assets/image/footer-post-2.jpg'
import Button from '../button/button'

function Footer() {
  const blogData = [
    {
      image: BlogImage1,
      title: 'Webinar: The Future of Digital Transformation in Business',
    },
    {
      image: BlogImage2,
      title: 'Mastering Social Media Marketing: A Comprehensive Guide',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-intro">
          <div className="footer-logo">
            <img src={Logo} alt="TechVantage Logo" />
          </div>
          <div className="intro-content">
            <p>Transforming Industries through Innovative Technology</p>
            <div className="intro-links">
              <div className="twitter-link link">
                <img src={Twitter} alt="Twitter icon" />
              </div>
              <div className="facebook-link link">
                <img src={Facebook} alt="Facebook icon" />
              </div>
              <div className="google-link link">
                <img src={Google} alt="Google icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-about column">
          <h3>About</h3>
          <ul className="about-list list">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-company column">
          <h3>Company</h3>
          <ul className="company-list list">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Help Desk</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-blog column">
          <h3>Blog</h3>
          {blogData.map((post, index) => (
            <div key={index} className="post-container">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <h4>{post.title}</h4>
                <Button variant="login">Read more</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
