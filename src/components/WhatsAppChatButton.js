import React from 'react';
import '../Styles/WhatsAppChatButton.css'; 

const WhatsAppChatButton = () => {
  const phoneNumber = '+919959002091'; // Replace with your WhatsApp number in international format
  const message = 'Hello, I would like to chat!'; // Your predefined message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <i className="fab fa-whatsapp"></i> {/* Font Awesome icon */}
    </a>
  );
};

export default WhatsAppChatButton;
