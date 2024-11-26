import Profile from '../../assets/pictures/portfolio_profile.png'
import './Profilepic.css'

import React from 'react'

const Profilepic = () => {
  return (
    <div className='profilepic_main'>
        <img className='profilepic-pic' src={Profile} alt='image ⚠️' draggable={false} onContextMenu={(e)=>e.preventDefault()}/>
    </div>
  )
}

export default Profilepic
