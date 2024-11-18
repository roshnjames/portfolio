import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <div className='sidebar-content'>

         <nav>
           <ul>
            {window.location.pathname!=='/' && <li><NavLink to='/'>Home</NavLink></li>}
            <li><NavLink to='/test' >edu</NavLink></li>
          </ul>
          </nav>
      </div>

    </div>
  )
}
export default Sidebar
