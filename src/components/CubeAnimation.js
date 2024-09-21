import React from 'react';
import '../Styles/CubeAnimation.css'; // Ensure this points to the correct location of your CSS file

const CubeAnimation = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face front">T</div>
        <div className="cube-face back">A</div>
        <div className="cube-face left">L</div>
        <div className="cube-face right">V</div>
        <div className="cube-face top">O</div>
        <div className="cube-face bottom">X</div>
      </div>
    </div>
  );
};

export default CubeAnimation;
