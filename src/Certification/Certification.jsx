import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import './Certification.css';

// wallpaper imports
import c from '../assets/certification/wallpaper/c.png';
import dbms from '../assets/certification/wallpaper/dbms.png';
import java from '../assets/certification/wallpaper/java.png';
import js from '../assets/certification/wallpaper/js.png';
import python from '../assets/certification/wallpaper/python.jpeg';

// certificates imports
import java_crash from '../assets/certification/certificates/java_crash.jpg';
import java_oop from '../assets/certification/certificates/java_oop.png';
import js_beg from '../assets/certification/certificates/javascript_crash.png';
import nptel_c from '../assets/certification/certificates/nptel_c.png';
import nptel_dbms from '../assets/certification/certificates/nptel_dbms.png';



const Certification = () => {
  // Add certifications in this array
  const certifications=[
    {
      course:'Java with object-oriented programmming',
      issuer:'Udemy',
      date:'Oct 24',
      wallpaper:java,
      doc:java_oop
    },
    {
      course:'Java for programmers',
      issuer:'Udemy',
      date:'Sept 23',
      wallpaper:java,
      doc:java_crash
    },
    {
      course:'Javascript for beginners',
      issuer:'Simplilearn',
      date:'Nov 24',
      wallpaper:js,
      doc:js_beg
    },
    {
      course:'Data base management system',
      issuer:'NPTEL-IIT Kharagpur',
      date:'Sept 23',
      wallpaper:dbms,
      doc:nptel_dbms
    },
    {
      course:'Problem solving with C programming',
      issuer:'NPTEL-IIT Kharagpur',
      date:'Oct 23',
      wallpaper:c,
      doc:nptel_c
    },
    {
      course:'Functional programming with python',
      issuer:'Linkedin',
      date:'Mar 24',
      wallpaper:python,
      doc:null
    }
  ]
////////////////////////////////

  const heading='certificates'.split('')
  const [doc,setDoc]=useState(null)
  const [popup,setPopup]=useState(false)

  const showPopup=(file)=>{
    setDoc(file)
    setPopup(true)
  }

  return (
    <>
      <div className='certs-heading-banner'>
        {heading.map((char, index) => (
          <span className='certs-heading-text' key={index}>
            {char}
          </span>
        ))}
      </div>

      <div className='certs-main-div'>

        {certifications.map((cert,index)=>(

            <div className='certs-card' key={index}>
                <div className="certs-bgpic-section" style={{backgroundImage:`url(${cert.wallpaper})`}} />

                <div className="certs-details-section">
                    <div className="certs-details-section">
                      <ul key={index}>
                          <li>{cert.course}</li>
                          <li>{cert.issuer}</li>
                          <li>{cert.date}</li>
                      </ul>
                    </div>
                </div>
                <div className="certs-index">
                    {index+1}
                </div>
                {cert.doc?
                    <button className="certs-doc-button" onClick={()=>showPopup(cert.doc)}>
                      docs
                    </button>
                :undefined}
            </div>
        ))}
        {popup && <Popup visible={popup} doc={doc} closeFunc={setPopup}/>}

      </div>
    </>
  );
};

export default Certification;
