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
  //sidebar code
  const [sidebar,setSidebar]=useState(false)
  const location=useLocation()


  const showSidebar=()=>{
    setSidebar(s=>!s)
  }
  
  useEffect(()=>{
    setSidebar(false)
  },[location])



  return (

    <div className="App">

      <img onClick={showSidebar} className='button-app-left'
          style={window.innerWidth<811 ?window.innerWidth<460?{marginLeft:sidebar  && '15vw'}:{marginLeft:sidebar  && '13vw'}:undefined}
          src={sidebar?menuclose:menubar} alt='logo'
      />

      <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/' element={<Homepage />} />
      </Routes>
      {sidebar && <Sidebar />}


    </div>
  );
}

export default App;
