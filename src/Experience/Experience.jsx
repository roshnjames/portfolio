import React from 'react'
import '../Card/Card.css'
import './Experience.css'


const Experience = () => {
    const heading="experience".split('')

  return (
    <>

    <div className='heading-banner'>
        {heading.map((char,index)=>(
            <span className='heading-text' key={index}>{char}</span>
        ))}
    </div>


    <div className='exp-main-div'>
        <div className='Card'>
            from the exp page
        </div>

    </div>
    </>
  )
}

export default Experience
