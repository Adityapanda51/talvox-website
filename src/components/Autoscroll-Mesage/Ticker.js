import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ticker.css";

const Ticker = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);

  const handleClick = () => {
    navigate("/corporate-gifting"); 
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="ticker" onClick={handleClick}>
      <p
        className={`ticker-message ${isPaused ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Discover Exclusive Corporate Gifting Solutions at Talvox – Click Here for Tailored Options!
      </p>
    </div>
  );
};

export default Ticker;



