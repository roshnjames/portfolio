import React from 'react';
import './Certification.css';

const Certification = () => {
  // Add experiences in this array

  const heading='certs'.split('')
  return (
    <>
      <div className="heading-banner">
        {heading.map((char, index) => (
          <span className="heading-text" key={index}>
            {char}
          </span>
        ))}
      </div>

      <div className="certs-main-div">

        hello form certified
        
      </div>
     
    </>
  );
};

export default Certification;
