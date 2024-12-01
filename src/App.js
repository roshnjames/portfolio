import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//file and Component imports
import About from './About/About.jsx';
import './App.css';
import Certification from './Certification/Certification.jsx';
import Education from './Education/Education.jsx';
import Experience from './Experience/Experience.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Others from './Others/Others.jsx';
import Project from './Project/Project.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';


//image imports
import menubar from './assets/icons/menubar.png';
import menuclose from './assets/icons/menuclose.png';


function App() {
  
  const [sidebar,setSidebar]=useState(false)
  const location=useLocation()

 //sidebar code
  const showSidebar=()=>{
    setSidebar(s=>!s)
  }

  //disable sidebar if any routing takes place in the app
  useEffect(()=>{
    setSidebar(false)
  },[location])

  //listens click event on anywhere on screen to disable sidebar
  useEffect(()=>{
    const clickEvent=(e)=>{
      if (e.target.id!=='sidebar-div' && e.target.id!=='sidebar-button')
          setSidebar(false)
    }
    document.addEventListener("click",clickEvent)
    return()=>{
      document.removeEventListener("click",clickEvent)
    }
  },[])



  return (

    <div className="App">
      <img onClick={(e)=>{e.stopPropagation(e);showSidebar()}} id='sidebar-button' className='button-app-left'
          style={window.innerWidth<811 ?window.innerWidth<460?{marginLeft:sidebar  && '20vw'}:{marginLeft:sidebar  && '13vw'}:undefined}
          src={sidebar?menuclose:menubar} alt='logo'
          draggable={false}
          onContextMenu={(e)=>e.preventDefault()}
      />

    {sidebar && <Sidebar />}

      <Routes>
          <Route path='/portfolio' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/exp' element={<Experience />} />
          <Route path='/edu' element={<Education />} />
          <Route path='/certs' element={<Certification />} />
          <Route path='/proj' element={<Project />} />
          <Route path='/oth' element={<Others />} />
      </Routes>
      


    </div>
  );
}

export default App;
