import React, { useState } from 'react'
import copy from '../assets/icons/copy.png'
import tick from '../assets/icons/tick.png'
import pic from '../assets/pictures/aboutme.png'
import './About.css'
import about from './about.js'


const About = ({appref}) => {
    const mail='roshinjames19@gmail.com'
    const aboutme=about//from the about js page

    //manage visibility of the scrollbar on scroll up for mobile devices
    // useEffect(()=>{
    //     const startpos=window.scrollY
    //     const handleScroll=()=>{
    //         let lastpos=window.scrollY
    //         if (lastpos-startpos >= window.innerHeight/2){
    //             appref.current.classList.remove('button-app-left');
    //         }else{
    //             appref.current.classList.add('button-app-left')
    //         }
    //     }
    //     window.addEventListener('scroll',handleScroll)

    //     return()=>{
    //         window.removeEventListener('scroll',handleScroll)
    //     }
        
    // },[appref])

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
        {/* for aligning the image at top of non desktop devices */}
        {window.innerWidth<1000?<div className='about-image-holder' style={{backgroundImage:`url(${pic})`}}/>:undefined}
        
     
        <div className="about-content-holder">
            <div className="about-me-header">
                <span className='about-first-word'>About</span> <span className='about-second-word'>me</span>
            </div>
            <div className="about-content-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;{aboutme}
            </div>
            <div className="about-mail-copy">
                <span className='mail-title'>Contact me</span>
                <div className='about-mail-copy-holder'>
                    <span className='mail-id'>{mail}</span>
                    <button className='copy-button' style={{backgroundImage:`url(${copymail?tick:copy})`}} onClick={()=>copyMailid()} />
                </div>
            </div>
        </div>

        {window.innerWidth>1000?<div className='about-image-holder' style={{backgroundImage:`url(${pic})`}}/>:undefined}
    </div>
  )
}

export default About
