import React from 'react'
import elxsi from '../assets/experience/elxsi.jpg'
import './Experience.css'

const Experience = () => {
    //add experiences in this array
    const experiences=[
        {
            company:"Tata Elxsi",
            position:"Intern",
            time:"March 24 - July 24",
            location:"Trivandrum",
            image:elxsi,
        }
    ]
    //add experiences in the above array
    const heading="experience".split('')

  return (
    <>

    <div className='heading-banner'>
        {heading.map((char,index)=>(
            <span className='heading-text' key={index}>{char}</span>
        ))}
    </div>


    <div className='exp-main-div'>


        { experiences.map((exp,index)=>(
            <div className='Card' key={index}>
                <div className='bgpic-section' />

                <div className='details-section'>
                <ul key={index}>
                    <li>{exp.company}</li>
                    <li>{exp.position}</li>
                    <li>{exp.time}</li>
                    <li>{exp.location}</li>
                </ul>
                </div>
            </div>
        ))}


    </div>
    </>
  )
}

export default Experience
