import React from 'react';
import './NuButton.css';

const NuButton = ({ name, color, link, imgSrc, target = "_self"}) => {

  return (
    <div className="cont">
      <a 
        href={link} 
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="buttonbg" 
        style={{'--hover-color': color}}
      >
        {imgSrc ? <img src={imgSrc} alt={name || 'imagen'} className="button-image" /> : name}
      </a>
    </div>
  );
};

export default NuButton;
