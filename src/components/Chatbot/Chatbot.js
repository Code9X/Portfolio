import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const location = useLocation();

  const whatsappNumber = process.env.REACT_APP_WHATSAPPNUMBER;
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#";

  const togglePanel = () => setIsOpen((prev) => !prev);

  const handleEmailClick = () => {
    // Check if the user is already on the /connect page
    if (location.pathname === "/connect") {
      toast.info("You are already on this page!");
    } else {
      navigate("/connect");
    }
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
          disabled={!whatsappNumber}
        >
          WhatsApp Chat
        </button>
        <button onClick={handleEmailClick} className="chatbot-option">
          Send an Email
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
