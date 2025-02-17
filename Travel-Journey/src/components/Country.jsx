import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParachuteBox } from "@fortawesome/free-solid-svg-icons";
import Mount_fuji from '/Mount_fuji.jpg'

const Country = () => {
  return (
    <div className= "japan-container">
      <div>
        <img src= {Mount_fuji} className= "mount-fuji" alt="Mount Fuji" />
      </div>
      <div className= "about-mount-fuji">
        <div>
          <div></div>
          <div>JAPAN</div>
          <div><u>View on Google Maps</u></div>
        </div>
      </div>
    </div>
  )
}

export default Country