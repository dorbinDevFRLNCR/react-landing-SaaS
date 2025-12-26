import React from 'react'
import './awards.css'

function Awards() {
  const awardsData = [
    {
      awardInfo: '10+',
      awardTitle: 'Years in the Market',
    },
    {
      awardInfo: '200,000+',
      awardTitle: 'Happy Customers',
    },
    {
      awardInfo: '99%',
      awardTitle: 'Uptime',
    },
    {
      awardInfo: '98%',
      awardTitle: 'Customer Retention Rate',
    },
    {
      awardInfo: '24/7',
      awardTitle: 'Support',
    },
  ]

  return (
    <section className="awards-section">
      <div className="awards-container">
        {awardsData.map((award, index) => (
          <div key={index} className="award-container">
            <h4 className="award-info">{award.awardInfo}</h4>
            <p className="award-title">{award.awardTitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards
