import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChatbot}>
        💬
      </div>
      {isOpen && (
        <div className="chatbot-popup">
          <p>Hey, are you a ⭐ lover? Then add by clicking on the screen.</p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
