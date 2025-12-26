import React from 'react'
import './posts.css'
import Button from '../button/button'
import firstPost from '../../assets/image/post-1.jpg'
import secondPost from '../../assets/image/post-2.jpg'
import thirdPost from '../../assets/image/post-3.jpg'
import fourthPost from '../../assets/image/post-4.jpg'
import fifthPost from '../../assets/image/post-5.jpg'
import sixthPost from '../../assets/image/post-6.jpg'

function Posts() {
  const postData = [
    {
      image: firstPost,
      tags: ['E-book', 'Business Growthas'],
      title: '10 Essential Strategies for Business Growth',
    },
    {
      image: secondPost,
      tags: ['Case Study', 'Success Story'],
      title: 'Success Story: How Company XYZ Increased Sales by 50%',
    },
    {
      image: thirdPost,
      tags: ['Data Analytics', 'Tips and Techniques'],
      title: 'Unlocking Data Analytics: Practical Tips and Techniques',
    },
    {
      image: fourthPost,
      tags: ['Webinar', 'Digital Transformation'],
      title: 'Webinar: The Future of Digital Transformation in Business',
    },
    {
      image: fifthPost,
      tags: ['Case Study', 'Workflow Transformation'],
      title: "Case Study: How TechVantage Transformed Company ABC's Workflow",
    },
    {
      image: sixthPost,
      tags: ['Guide', 'Social Media Marketing'],
      title: 'Mastering Social Media Marketing: A Comprehensive Guide',
    },
  ]

  return (
    <section className="posts-section">
      <div className="posts-container">
        {postData.map((post, index) => (
          <div key={index} className="post-container">
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
              <div className="tags">
                {post.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="tag">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <h3 className="post-title">{post.title}</h3>
              <Button variant="login">Read more</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Posts
