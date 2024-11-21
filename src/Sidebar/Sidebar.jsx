import React from 'react'
import { NavLink } from 'react-router-dom'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import './Sidebar.css'

const Sidebar = () => {
  const loc=window.location.pathname
  return (
    <div id='sidebar-div' className='sidebar-main' onClick={(e)=>{e.stopPropagation()}}>
        <div className='sidebar-content'>

         <nav>
            <ul>
            {loc !== '/' && <li><NavLink to='/'>home</NavLink></li>}
            {loc !== '/exp' && <li><NavLink to='/exp'>exp</NavLink></li>}
            {loc !== '/edu' && <li><NavLink to='/edu'>edu</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>proj</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>certs</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>oth</NavLink></li>}

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
