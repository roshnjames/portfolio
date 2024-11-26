import React from 'react'
import pic from '../assets/pictures/aboutme.png'
import './About.css'
const About = () => {
  return (
    <div>
      <div className='about-image-holder' style={{backgroundImage:`url(${pic})`}}/>
    </div>
  )
}

export default About
