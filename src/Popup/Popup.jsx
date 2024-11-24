import React, { useEffect } from 'react';
import '../App.css';
import './Popup.css';


const Popup = (props) => {

  useEffect(()=>{
    if (props.visible){
      document.body.classList.add('popup-active');
    }else {
      document.body.classList.remove('popup-active');
    }
    return () => {
      document.body.classList.remove('popup-active');
    };

  },[props.visible])


  return props.visible?(
    <div className="popup-main-div">
      <div className="popup-content">
        <button className='popup-close-btn' onClick={()=>props.closeFunc(false)} >X</button>
        <span className='button-app-left' style={{display:'none'}} />
          <div className='popup-content-doc'>
          
            <img className='popup-image' src={props.doc} draggable={false} onContextMenu={(e)=>e.preventDefault()}/>
          </div>
      </div>
    </div>
  ):"";
};

export default Popup;
