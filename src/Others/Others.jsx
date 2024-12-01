import React from 'react'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkdedin_background.png'
import mailwallpaper from '../assets/icons/mail.png'
import './Others.css'

const Others = () => {
  const email='roshinjames19@gmail.com'
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

            <div className='oth-card'>
                <div className='oth-bgpic-section' style={{backgroundImage:`url(${mailwallpaper})`}} />
                  <div className="oth-details-section">
                    <button className='oth-button'><a href={`mailto:${email}?subject=Mail from portfolio visiter`}
                                                      style={{textDecoration:'none',backgroundColor:'inherit',color:'inherit'}}>
                                                      send Mail</a>
                    </button>
                  </div>

           </div>
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
