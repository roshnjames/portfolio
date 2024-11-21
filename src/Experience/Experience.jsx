import React, { useState } from 'react';
import elxsi from '../assets/experience/elxsi.jpg';
import elxsi_certificate from '../assets/experience/elxsi_certificate.png';
import Popup from '../Popup/Popup.jsx';
import './Experience.css';

const Experience = () => {
  // Add experiences in this array
  const experiences = [
    {
      company: 'Tata Elxsi',
      position: 'Intern',
      time: 'March 24 - July 24',
      location: 'Trivandrum',
      image: elxsi,
      docs:elxsi_certificate,
    },
  ];

  const heading = 'experience'.split('');
  const [popup, setPopup] = useState(false);
  const [doc,setDoc]=useState(null)

  const showPopup = (content) => {
    setDoc(content)
    setPopup(true);
  };

  return (
    <>
      <div className="heading-banner">
        {heading.map((char, index) => (
          <span className="heading-text" key={index}>
            {char}
          </span>
        ))}
      </div>

      <div className="exp-main-div">
        {experiences.map((exp, index) => (
          <div className="Card" key={index}>
            <div
              className="bgpic-section"
              style={{ backgroundImage: `url(${exp.image})` }}
            />
            <div className="details-section">
              <ul style={{ listStyleType: 'square' }} key={index}>
                <li>{exp.company}</li>
                <li>{exp.position}</li>
                <li>{exp.time}</li>
                <li>{exp.location}</li>
              </ul>
            </div>
            <div className="index">{index + 1}</div>
            <button
              className="doc-button"
              onClick={() => showPopup(exp.docs)}
            >
              docs
            </button>
          </div>
        ))}
        
      </div>
      <Popup visible={popup} doc={doc} closeFunc={setPopup}/>
     
    </>
  );
};

export default Experience;
