import React, { useState } from 'react'
import copy from '../assets/icons/copy.png'
import tick from '../assets/icons/tick.png'
import pic from '../assets/pictures/aboutme.png'
import './About.css'
import about from './about.js'


const About = () => {
    const mail='roshinjames19@gmail.com'
    const aboutme=about


    //mail copying with support for all browsers
    const [copymail,setCopymail]=useState(false)
    const copyMailid = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(mail)
                .then(() => {
                    setCopymail(true);
                })
                .catch((_) => {
                    fallbackCopyTextToClipboard(mail);
                });
        } else {
            fallbackCopyTextToClipboard(mail);
        }
    };
    
    // Fallback function for unsupported browsers
    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
    
        // Hide the textarea
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
    
        // Select the text and copy it
        textArea.focus();
        textArea.select();
    
        try {
            const successful = document.execCommand("copy");
            if (successful)
                setCopymail(true);
        } catch (_) {
            alert("Failed to copy mail id...")
        }
        document.body.removeChild(textArea);
    };
    



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
                <span className='mail-title'>Contact me</span>
                <span className='mail-id'>{mail}</span>
                <button className='copy-button' style={{backgroundImage:`url(${copymail?tick:copy})`}} onClick={()=>copyMailid()} />
            </div>
        </div>

        <div className='about-image-holder' style={{backgroundImage:`url(${pic})`}}/>
     
    </div>
  )
}

export default About
