import React, { useState } from 'react';

//file imports
import './App.css';
import Homepage from './Homepage/Homepage.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
//image imports
import linkedin from './assets/icons/linkedin.png';
import menubar from './assets/icons/menubar.png';
import menuclose from './assets/icons/menuclose.png';


function App() {
  //sidebar code
  const [sidebar,setSidebar]=useState(false)
  const showSidebar=()=>{
    setSidebar(s=>!s)
  }


  return (

    <div className="App">
      <Homepage />
      <img onClick={showSidebar} className='button-app-left' src={sidebar?menuclose:menubar} alt='logo'/>
      <img className='button-app-right' src={linkedin}/>
      {sidebar && <Sidebar />}
    </div>
  );
}

export default App;
