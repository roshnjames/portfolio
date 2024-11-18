import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//file imports
import './App.css';
import Homepage from './Homepage/Homepage.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Test from './test.jsx';
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
          style={window.innerWidth<811 ?window.innerWidth<460?{marginLeft:sidebar  && '15vw'}:{marginLeft:sidebar  && '13vw'}:undefined}
          src={sidebar?menuclose:menubar} alt='logo'
      />

      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/test' element={<Test />} />
      </Routes>
      {sidebar && <Sidebar />}


    </div>
  );
}

export default App;
