import React from 'react';
import './Popup.css';
const Popup = (props) => {

  return props.visible?(
    <div className="popup-main-div">
      <div className="popup-content">
        <button className='popup-close-btn' onClick={()=>props.closeFunc(false)} >x</button>
          <div className='popup-content-doc'>
          
            <img className='popup-image' src={props.doc} />
          </div>
      </div>
    </div>
  ):"";
};

export default Popup;
