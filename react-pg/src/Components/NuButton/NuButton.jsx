import React from 'react';
import './NuButton.css';

const NuButton = ({ name, color, link, imgSrc}) => {

  return (
    <div className="cont">
      <a 
        href={link} 
        className="buttonbg" 
        style={{'--hover-color': color}}
      >
        {imgSrc ? <img src={imgSrc} alt={name || 'imagen'} className="button-image" /> : name}
      </a>
    </div>
  );
};

export default NuButton;
