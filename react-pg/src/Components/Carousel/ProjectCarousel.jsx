import React from 'react'
import { useState } from "react";
import "./ProjectCarousel.css"
import NuButton from "../NuButton/NuButton.jsx";

import senkai from '../../assets/carousel/senkai.gif'
import fading from '../../assets/carousel/fading.gif'

const projects = [
  {
    image: senkai,
    title: "SENKAI RULES",
    description: (
      <>
      This was a game made for the {" "}
      <span style={{fontWeight: "bold", color: "#ff0000"}}>
        GameGen Game Jam 2
      </span>
      , where I made most of the sprites and animations as well as the music. 
      <br />
      It was one of my first jams so it was pretty stressful 
      but I learned a lot!
      </>
    ),
    color:"#ffb6ff",
    link:"https://damaca.itch.io/senkai-rules"
  },
  {
    image: fading,
    title: "FADING CROWN",
    description: (
      <>
      This was a game made for the {" "} 
      <span style={{fontWeight: "bold", color: "#ff0000"}}>
      Ludum Dare 50
      </span>
      , I worked on the characters and their animations, as well as the music. 
      <br />
      It was interesting to work with a limited palette with just one accent color.
      </>
    ),
    color:"#fb6813",
    link:"https://arcacrema.itch.io/fading-crown"
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const goPrev = () => {
    if (currentIndex > 0) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsFading(false);
      }, 300); // Match CSS transition duration
    }
  };
  
  const goNext = () => {
    if (currentIndex < projects.length - 1) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsFading(false);
      }, 300);
    }
  };
  
  const getContrastColor = (hex) => {
    hex = hex.replace("#", "");
  
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    return luminance > 0.5 ? "black" : "white";
  };

  return (

    <div className="ccontent"> 

      {/* ARRIBA */}
      <div className="cimage">

        {/* IMAGEN */}
        <img 
        src={projects[currentIndex].image}
        className={`fade ${isFading ? "fade-out" : "fade-in"}`}
        />

        {/* FLECHAS Y PUNTOS */}
        <div className="ccontrols">

        <button onClick={goPrev} disabled={currentIndex === 0} className="cprev">◀</button>

          <div className="dots">
            {projects.map((_, index) => (
              <span key={index} className={index === currentIndex ? "dot active" : "dot"}></span>
            ))}
          </div>

          <button onClick={goNext} disabled={currentIndex === projects.length - 1} className="cnext">▶</button>
          
        </div>

      </div>
      
      {/* TEXTO */}
      <div className="ctext">
        <h2 className="border">{projects[currentIndex].title}</h2>
        <h2 
        className={`fade ${isFading ? "fade-out" : "fade-in"}`}
        style={{ color: projects[currentIndex].color }}>
          {projects[currentIndex].title}
        </h2>
        <p className={`fade ${isFading ? "fade-out" : "fade-in"}`}>{projects[currentIndex].description}</p>
      </div>

      <div className="cbutton">
        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <button 
            className="check"
            style={{ 
              backgroundColor: projects[currentIndex].color,
              color: getContrastColor(projects[currentIndex].color) 
            }}
          > CHECK IT OUT! </button>
        </a>
      </div>
        
    </div>

  );
};

export default ProjectCarousel;
