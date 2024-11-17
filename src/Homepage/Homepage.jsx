import React from 'react'
import './Homepage.css'
import Profilepic from './Profilepic/Profilepic.jsx'
import Typewriter from './Typewriter/Typewriter.jsx'

const Homepage = () => {
  return (
    <div className='homepage-main'>
      <Typewriter />
      <Profilepic />
    </div>
  )
}

export default Homepage
