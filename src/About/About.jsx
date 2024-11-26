import React, { useState } from 'react'
import copy from '../assets/icons/copy.png'
import tick from '../assets/icons/tick.png'
import pic from '../assets/pictures/aboutme.png'
import './About.css'
import about from './about.js'


const About = () => {
    const mail='roshinjames19@gmail.com'
    const aboutme=about

    const [copymail,setCopymail]=useState(false)
    const copyMailid=()=>{
        navigator.clipboard.writeText(mail)
        setCopymail(true)
    }

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
                <span className='mail-title'>Contact me:</span>
                <span className='mail-id'>{mail}</span>
                <button className='copy-button' style={{backgroundImage:`url(${copymail?tick:copy})`}} onClick={()=>copyMailid()} />
            </div>
        </div>

        <div className='about-image-holder' style={{backgroundImage:`url(${pic})`}}/>
     
    </div>
  )
}

export default About
