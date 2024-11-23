import React from 'react';
import './Certification.css';
// image imports
import java from '../assets/certification/wallpaper/java.png';

const Certification = () => {
  // Add certifications in this array
  const certifications=[
    {

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




        <div className='certs-card'>
          <div className="certs-bgpic-section" style={{backgroundImage:`url(${java})`}}>

          </div>
          <div className="certs-details-section">

          </div>
          <div className="certs-index">

          </div>
        </div>
        


        
      </div>
    </>
  );
};

export default Certification;
