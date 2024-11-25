import React from 'react'
import './Project.css'


const Project = () => {

  //add projects in the below array

  const projects=[
    {
      title:'Lost & Found',
      domain:'Web app',
      backend:'Django',
      frontend:'HTML5, CSS',
      database:'PostgreSQL',
      link:'https://github.com/roshnjames/lost_found_django',
    },
    {
      title:'Currency Classification for Visually Impaired',
      domain:'Machine Learning',
      backend:'Python, CNN',
      frontend:'Tkinter',
      database:null,
      link:'https://github.com/roshnjames/currency-classification--ML',
    },
    {
      title:'Ticket Reservation System',
      domain:'Web app',
      backend:'PHP',
      frontend:'HTML5, CSS',
      database:'MySQL',
      link:'https://github.com/roshnjames/ticket-reservation-system-PHP',
    },
    {
      title:'Face Mask & Social Distancing Analyzer',
      domain:'Machine Learning',
      backend:'Python, CNN',
      frontend:'Tkinter',
      database:null,
      link:'https://github.com/roshnjames/Face-Mask-detection-Social-Distancing-analayzer',
    },
  ]



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

      {projects.map((proj,index)=>(
         <div className="proj-card" key={index}>
              <div className="card-index">{index+1}</div>
              <div className="proj-details-section">
                  <ul>
                    <li>{proj.title}</li>
                    <li>{proj.domain}</li>
                    {proj.backend?<li>{proj.backend}</li>:undefined}
                    {proj.frontend?<li>{proj.frontend}</li>:undefined}
                    {proj.database?<li>{proj.database}</li>:undefined}

                  </ul>
              </div>
              {proj.link?
                  <button className="proj-doc-button" onClick={()=>window.open(proj.link,"_blank")}>link</button>
              :undefined}
        </div>
      ))}
     
      
    </div>
    </>
  )
}

export default Project
