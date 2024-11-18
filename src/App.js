import React, { useState } from 'react';

//file imports
import './App.css';
import Homepage from './Homepage/Homepage.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
//image imports
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
      <img onClick={showSidebar} className='button-app-left'
          style={window.innerWidth<811 ?window.innerWidth<460?{marginLeft:sidebar  && '15vw'}:{marginLeft:sidebar  && '13vw'}:undefined}
          src={sidebar?menuclose:menubar} alt='logo'
      />
      {sidebar && <Sidebar />}
    </div>
  );
}

export default App;
