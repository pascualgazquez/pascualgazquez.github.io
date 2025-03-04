import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import "./MusicPlayerH.css";

import playIcon from "../../assets/icons/play.svg";
import pauseIcon from "../../assets/icons/pause.svg";
import soundOn from "../../assets/icons/soundon.svg";
import soundOff from "../../assets/icons/soundoff.svg";

const lightenColor = (hex, percent) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map(char => char + char).join("");
  }

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = Math.round(r + (255 - r) * (percent / 100));
  g = Math.round(g + (255 - g) * (percent / 100));
  b = Math.round(b + (255 - b) * (percent / 100));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const MusicPlayerH = ({ title, cover, track, color }) => {
  const waveformRef = useRef(null);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    if (waveformRef.current && !waveSurfer) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "black",
        progressColor: color,
        cursorColor: color,
        barWidth: 2,
        responsive: true,
        height: 80,
        normalize: true,
      });

      ws.load(track);
      setWaveSurfer(ws);

      ws.on("finish", () => {
        setIsPlaying(false);
      });

      return () => ws.destroy();
    }
  }, [track]);

  const togglePlay = () => {
    if (waveSurfer) {
      isPlaying ? waveSurfer.pause() : waveSurfer.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVolume = () => {
    setShowVolume(!showVolume);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (waveSurfer) {
      waveSurfer.setVolume(newVolume);
    }
  };

  return (
    <div className="music-playerh" style={{ backgroundColor: lightenColor(color, 75) }}>

        <div className="cover-containerh">
            <img src={cover} alt={title} className="coverh" />
        </div>

        <button 
          onClick={togglePlay} 
          className={`play-buttonh ${isPlaying ? "active" : ""}`}
        >
            <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" className="play-iconh" />
        </button>

      <div ref={waveformRef} className="waveformh"></div>


        

        

        <div 
          className={`volume-containerh ${showVolume ? "active" : ""}`} 
          onClick={toggleVolume}
        >
          <img 
            src={volume > 0 ? soundOn : soundOff} 
            alt="Volume Icon" 
            className="volume-iconh" 
          />
        </div>

        {showVolume && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-sliderh"
          />
        )}


    </div>
  );
};

export default MusicPlayerH;
