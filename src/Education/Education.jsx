import React from 'react'
import './Education.css'

const Education = () => {
    const educations=[
        
        {
            institution:'College of Engineering Trivandrum,(CET)',
            course:'MCA',
            year:2024,
        },
        {
            institution:'Marian College, Kuttikkanam',
            course:'BCA',
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

                    <div className='edu-parent-holder' key={index} style={{left:`${(index+1)%2!==0?'0%':'48.5%'}`}}>
                        <div className='edu-logo-holder' style={(index+1)%2!==0?{left:'90%'}:undefined}/>
                        <div className='edu-content-holder' style={(index+1)%2!==0?{left:'0%'}:{left:'14%'}}>
                            <b>{edu.institution}</b>
                            <p>{edu.course}</p>
                            <small>{edu.year}</small>
                        </div>
                    </div>

                ))}

                
            </div>


        </>
    )
}

export default Education
