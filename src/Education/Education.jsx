import React from 'react'
import './Education.css'

const Education = () => {
    const educations=[
        
        {
            institution:'College of Engineering Trivandrum,(CET)',
            course:'Master of Computer Applications (MCA)',
            year:2024,
        },
        {
            institution:'Marian College, Kuttikkanam',
            course:'Bachelor of Computer Applications (BCA)',
            year:2022,
        },
        {
            institution:'Jawahar Navodaya Vidyalaya, Kottayam',
            course:'Twelfth',
            year:2018
        },
        {
            institution:'Jawahar Navodaya Vidyalaya, Kottayam',
            course:'Tenth',
            year:2016
        },
    ]



    const heading="education".split('')

    
    return (
        <>
            <div className='heading-banner'>
                {heading.map((char,index)=>(
                    <span className='heading-text' key={index}>{char}</span>
                ))}
            </div>

            <div className='edu-main-div'>

                {educations.map((edu,index)=>(
                    

                    <div className='edu-parent-holder' key={index} >
                        <div className='edu-logo-holder' />
                        <div className='edu-content-holder'>
                            <b>{edu.institution}</b><hr/>
                            <p>{edu.course}</p><hr/>
                            <i>{edu.year}</i>
                        </div>
                    </div>

                ))}

                
            </div>


        </>
    )
}

export default Education
