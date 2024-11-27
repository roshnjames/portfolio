import React from 'react'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkdedin_background.png'
import './Others.css'

const Others = () => {

  const social=[
    {
      media:'Linkedin',
      wallpaper:linkedin,
      link:'https://www.linkedin.com/in/roshnjames'
    },
    {
      media:'Github',
      wallpaper:github,
      link:'https://www.github.com/roshnjames'
    }
  ]


  
  return (
    <div className='oth-main-div'>
      {social.map((media,index)=>(
             <div className='oth-card' key={index}>
                <div className='oth-bgpic-section' style={{backgroundImage:`url(${media.wallpaper})`}} />
                  <div className="oth-details-section">
                    <button className='oth-button' onClick={()=>window.open(media.link,"__blank")}>open {media.media}</button>
                  </div>

           </div>
      ))}
     
    </div>
  )
}

export default Others
