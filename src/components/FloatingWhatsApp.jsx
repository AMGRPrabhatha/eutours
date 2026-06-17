import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon-inner">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C6.48 4 2 7.58 2 12C2 14.7 3.56 17.08 5.92 18.52L4 22L8.26 20.57C9.43 20.85 10.68 21 12 21C17.52 21 22 17.42 22 12C22 7.58 17.52 4 12 4Z" fill="#0f172a"/>
          <circle cx="8" cy="12.5" r="1.5" fill="#25d366"/>
          <circle cx="12" cy="12.5" r="1.5" fill="#25d366"/>
          <circle cx="16" cy="12.5" r="1.5" fill="#25d366"/>
        </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
