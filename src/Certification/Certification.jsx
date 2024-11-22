import React from 'react'
import './Certification.css'


const Certification = () => {

  const heading='certifications.'.split('')

  return (
    <>
      <div className='heading-banner'>
          {heading.map((char,index)=>(
              <span className='heading-text' key={index}>
                {char}
              </span>
          ))}
      </div>

      <div className='certs-main-div'>
          hello from certificates
      </div>
    </>
  )
}

export default Certification
