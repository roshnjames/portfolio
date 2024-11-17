import Profile from '../../assets/portfolio_profile.png'
import './Profilepic.css'

import React from 'react'

const Profilepic = () => {
  return (
    <div className='profilepic_main'>
        <img className='profilepic-pic' src={Profile} alt='image ⚠️' />
    </div>
  )
}

export default Profilepic
