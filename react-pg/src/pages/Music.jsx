import React from 'react'
import "./Music.css"
import Cover from  "../Components/Cover/Cover";

import MusicPlayer from "../Components/MusicPlayer/MusicPlayer";
import music from '../assets/titles/music.gif'
import musicCover from '../assets/more/music.gif'

import endecharCover from "../assets/music/covers/endechar.jpg"
import cutecharCover from "../assets/music/covers/cutechar.jpg"
import endercharTrack from "../assets/music/tracks/enderchar.mp3"
import cutecharTrack from "../assets/music/tracks/cutechar.wav"


const Music = () => {
    return (
      <>
        <Cover color = "#fabebe" title={music} picture={musicCover}/>
        <h1>CHARACTERS</h1>
        <p>These tracks are made to </p>
        <div className = "music-section">
          <MusicPlayer 
            title = "Endearing character"
            cover = {endecharCover}
            track = {endercharTrack}
            color = "#bc95f0"
          />
          <MusicPlayer 
            title = "Cute character"
            cover = {cutecharCover}
            track = {cutecharTrack}
            color = "#7abfe9"
          />
        </div>
      </>
    );
  };
  
  export default Music;
  
  