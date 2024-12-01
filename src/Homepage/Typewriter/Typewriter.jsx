import React, { useEffect, useState } from "react";
import './Typewriter.css';

const Typewriter = () => {
  const textArray = ["hi...","i am Roshin", " developer !"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[loopIndex % textArray.length];

      if (isDeleting) {
        // Deleting
        setText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(100);
      } else {
        // Writing
        setText((prev) => currentText.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
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
