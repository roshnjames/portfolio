import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div id='sidebar-div' className='sidebar-main' onClick={(e)=>{e.stopPropagation()}}>
        <div className='sidebar-content'>

         <nav>
           <ul>
            {window.location.pathname!=='/' && <li><NavLink to='/'>home</NavLink></li>}
            <li><NavLink to='/test' >experience</NavLink></li>
            <li><NavLink to='/test' >education</NavLink></li>
            <li><NavLink to='/test' >certifications</NavLink></li>
            <li><NavLink to='/test' >others</NavLink></li>
          </ul>
          </nav>
      </div>

    </div>
  )
}
export default Sidebar
