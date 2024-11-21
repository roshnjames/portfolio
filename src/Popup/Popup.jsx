import React from 'react';
import './Popup.css';
const Popup = (props) => {

  return props.visible?(
    <div className="popup-main-div">
      <div className="popup-content">
        <button className='popup-close-btn' onClick={()=>props.closeFunc(false)} >X</button>
          <div className='popup-content-doc'>
          
            <img className='popup-image' src={props.doc} draggable={false} onContextMenu={(e)=>e.preventDefault()}/>
          </div>
      </div>
    </div>
  ):"";
};

export default Popup;
