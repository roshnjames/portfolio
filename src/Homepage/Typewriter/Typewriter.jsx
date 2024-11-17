import React, { useEffect, useState } from "react";
import './Typewriter.css';

const Typewriter = () => {
  const textArray = ["hi...","i am Roshin", "developer!"]; // Texts to display
  const [text, setText] = useState(""); // Current text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Flag to check if deleting
  const [loopIndex, setLoopIndex] = useState(0); // Index of the current text
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing/deleting

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[loopIndex % textArray.length]; // Current text to display

      if (isDeleting) {
        // Deleting logic
        setText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(100); // Faster deleting speed
      } else {
        // Writing logic
        setText((prev) => currentText.slice(0, prev.length + 1));
        setTypingSpeed(150); // Typing speed
      }

      // When the text is fully written, switch to deleting mode
      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      // When the text is fully deleted, move to the next text
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1); // Move to the next text
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); // Cleanup timeout
  }, [text, isDeleting, loopIndex, typingSpeed, textArray]);

  return (
    <div className="writer-text">
      {text}<br/>
      <span className='writer-span' >
        
      </span>
    </div>
  );
};

export default Typewriter;
