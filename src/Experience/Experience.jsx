import React, { useState } from 'react';
import Popup from '../Popup/Popup.jsx';
import './Experience.css';
// file imports
import elxsi from '../assets/experience/elxsi.jpg';
import elxsi_certificate from '../assets/experience/elxsi_certificate.png';

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

  ////////////////////////////
  const heading = 'experience'.split('');
  const [popup, setPopup] = useState(false);
  const [doc,setDoc]=useState(null)

  const showPopup = (content) => {
    setDoc(content)
    setPopup(true);
  };

  return (
    <>
      <div className="exp-heading-banner">
        {heading.map((char, index) => (
          <span className="exp-heading-text" key={index}>
            {char}
          </span>
        ))}
      </div>

      <div className="exp-main-div">
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>
            <div
              className="exp-bgpic-section"
              style={{ backgroundImage: `url(${exp.image})` }}
            />
            <div className="exp-details-section">
                <ul key={index}>
                    <li>{exp.company}</li>
                    <li>{exp.position}</li>
                    <li>{exp.time}</li>
                    <li>{exp.location}</li>
                </ul>
            </div>
            <div className="exp-index">{index + 1}</div>
                {exp.docs?
                  <button className="exp-doc-button" onClick={() => showPopup(exp.docs)}>
                  doc
                  </button>
                :undefined}
          </div>
        ))}
        
      </div>
      <Popup visible={popup} doc={doc} closeFunc={setPopup}/>
     
    </>
  );
};

export default Experience;
