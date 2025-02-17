import React from 'react'
import { MapPin } from "lucide-react";

const Country = ({place}) => {
  return (
    <div className= "country-container">
      <div>
        <img src= {`/${place.coverImg}`} className= "place-pic" alt="Mount Fuji" />
      </div>
      <div className= "about-place">
        <div className='location'>
          <MapPin className= "location-icon" />
          <h3 className= "country-name">{place.location}</h3>
          <a href= {place.googleMapUrl} className= "google-maps-link">
            <u>View on Google Maps</u>
          </a>
        </div>

        <div className= "place-name">
          <h1>{place.title}</h1>
        </div>
        
        <div>
          <div className= "start-end-date">
            <h3>{place.startDate}</h3>
            <h3>-</h3>
            <h3>{place.endDate}</h3>
          </div>
          <div className= "description">
            <h4>
              {place.description}
            </h4>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Country