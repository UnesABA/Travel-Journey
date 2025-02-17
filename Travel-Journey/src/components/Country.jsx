import React from 'react'
import Mount_fuji from '/Mount_fuji.jpg'

const Country = () => {
  return (
    <div className= "country-container">
      <div>
        <img src= {Mount_fuji} className= "mount-fuji" alt="Mount Fuji" />
      </div>
      <div className= "about-mount-fuji">
        <div className='location'>
          <div></div>
          <p className= "country-name">JAPAN</p>
          <u className= "google-maps-link">View on Google Maps</u>
        </div>

        <div className= "place-name">
          <h1>Mount Fuji</h1>
        </div>
        
        <div>
          <div className= "start-end-date">
            <h3>12 jan, 2025</h3>
            <h3>-</h3>
            <h3>24 jan, 2025</h3>
          </div>
          <div className= "description">
            <h4>
              Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet), Mount Fuji is the single most popular tourist site in Japan, for both japanese and foreign tourists.
            </h4>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Country