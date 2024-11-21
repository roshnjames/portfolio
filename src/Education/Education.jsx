import React from 'react'
import './Education.css'

const Education = () => {
    const heading="education".split('')
    return (
        <>
            <div className='heading-banner'>
                {heading.map((char,index)=>(
                    <span className='heading-text' key={index}>{char}</span>
                ))}
            </div>

            <div className='edu-main-div'>
            hi its roshin
            </div>


        </>
    )
}

export default Education
