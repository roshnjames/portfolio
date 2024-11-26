import React from 'react'
import pic from '../assets/pictures/aboutme.png'
import './About.css'
import aboutme from './about.js'
const About = () => {
  return (
    <div className='about-page'>
        <div className="about-content-holder">
            <div className="about-me-header">
                <span className='about-first-word'>About</span> <span className='about-second-word'>me</span>
            </div>
            <div className="about-content-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{aboutme}
            </div>
            <div className="about-mail-copy">
                contact me roshinjames19@gmail.com
                <button>copy</button>
            </div>
        </div>

        <div className='about-image-holder' style={{backgroundImage:`url(${pic})`}}/>
     
    </div>
  )
}

export default About
