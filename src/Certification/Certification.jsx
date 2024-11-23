import React from 'react';
import './Certification.css';
// wallpaper imports
import java from '../assets/certification/wallpaper/java.png';

// certificates imports
import java_crash from '../assets/certification/certificates/java_crash.jpeg';
import java_oop from '../assets/certification/certificates/java_oop.png';



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
      date:'Sept 24',
      wallpaper:java,
      doc:java_crash
    }
  ]


  const heading='certificates'.split('')

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

                </div>
                <div className="certs-index">

                </div>
            </div>
        ))}


      </div>
    </>
  );
};

export default Certification;
