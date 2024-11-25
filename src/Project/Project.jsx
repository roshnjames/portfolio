import React from 'react'
import './Project.css'


const Project = () => {


  const heading='projects'.split('')


  return (
    <>

    <div className='proj-heading-banner'>
      {heading.map((char,index)=>(
        <span className='proj-heading-text' key={index}>
          {char}
        </span>
      ))}
    </div>



    
    <div className='proj-main-div'>
      <div className="proj-card">
        <div className="card-index">1</div>
        <div className="proj-details-section">ehlloo o i ai ghkh skd fk  kfjslf i.s jp r k sl sjf</div>
        <button className="proj-doc-button">link</button>
      </div>
      
    </div>
    </>
  )
}

export default Project
