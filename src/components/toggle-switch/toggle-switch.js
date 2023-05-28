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
        <span className="toggle-text-left">{isOn ? 'ON' : ''}</span>
        <div className="toggle-switch" />
        <span className="toggle-text-right">{isOn ? '' : 'OFF'}</span>
      </div>
    );
  }
  
  
  export default FancyToggleButton;