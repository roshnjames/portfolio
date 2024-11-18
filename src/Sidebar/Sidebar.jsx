import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const loc=window.location.pathname
  return (
    <div id='sidebar-div' className='sidebar-main' onClick={(e)=>{e.stopPropagation()}}>
        <div className='sidebar-content'>

         <nav>
            <ul>
            {loc !== '/' && <li><NavLink to='/'>home</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>exp</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>edu</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>proj</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>certs</NavLink></li>}
            {loc !== '/test' && <li><NavLink to='/test'>oth</NavLink></li>}

            </ul>
          </nav>

      </div>

    </div>
  )
}
export default Sidebar
