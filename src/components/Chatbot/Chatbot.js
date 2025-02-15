import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const whatsappNumber = process.env.REACT_APP_WHATSAPPNUMBER; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={togglePanel}>
        💬
      </div>
      <div className={`chatbot-panel ${isOpen ? "open" : ""}`}>
        <button
          onClick={() => window.open(whatsappLink, "_blank")}
          className="chatbot-option"
        >
          WhatsApp Chat
        </button>
        <button onClick={() => navigate("/connect")} className="chatbot-option">
          Send an Email
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
