import React from 'react'
import { FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className= "header">
        <div>
          <FaGlobe className='header-icon'/>
        </div>
        <div className= "header-title">
          my travel journey
        </div>
      </div>
    </>
  )
}

export default Header