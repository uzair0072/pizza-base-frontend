import React, { useState } from 'react';
import "./toggle-switch.css"

function FancyToggleButton() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div
        className={`fancy-toggle-button ${isOn ? 'on' : 'off'}`}
        onClick={handleToggle}
      >
        <div className="toggle-switch" />
      </div>
    );
  }
  

  export default FancyToggleButton;