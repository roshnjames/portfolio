import React from 'react'
import { NavLink } from 'react-router-dom'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import './Sidebar.css'

const Sidebar = () => {
  let loc=window.location.hash
  loc =loc.replace('#','')
  
  return (
    <div id='sidebar-div' className='sidebar-main' onClick={(e)=>{e.stopPropagation()}}>
        <div className='sidebar-content'>

         <nav>
            <ul>
            {(loc !== '/portfolio') && <li><NavLink to='/portfolio'>home</NavLink></li>}
            {loc !== '/about' && <li><NavLink to='/about'>about</NavLink></li>}
            {loc !== '/exp' && <li><NavLink to='/exp'>exp</NavLink></li>}
            {loc !== '/edu' && <li><NavLink to='/edu'>edu</NavLink></li>}
            {loc !== '/certs' && <li><NavLink to='/certs'>certs</NavLink></li>}
            {loc !== '/proj' && <li><NavLink to='/proj'>works</NavLink></li>}
            {loc !== '/oth' && <li><NavLink to='/oth'>oth</NavLink></li>}

            </ul>
          </nav>

      </div>
      <div className='external-links'>
        <a href="https://www.linkedin.com/in/roshnjames">
            <img src={linkedin} alt="in" className='external-logo'/>
        </a>
        <a href="https://www.github.com/roshnjames">
            <img src={github} alt="in" className='external-logo'/>
        </a>
        
      </div>

    </div>
  )
}
export default Sidebar
