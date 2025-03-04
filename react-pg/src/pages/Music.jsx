import React from 'react'
import "./Music.css"
import Cover from  "../Components/Cover/Cover";

import MusicPlayer from "../Components/MusicPlayer/MusicPlayer";
import MusicPlayerH from "../Components/MusicPlayerH/MusicPlayerH";
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

        <h1>BASSLINES</h1>
        <p>
          These are a bunch of shorter and simpler tracks
          that I made based on different basslines 
        </p>
        <div className = "music-sectionh">
          <MusicPlayerH 
            title = "Endearing character"
            cover = {endecharCover}
            track = {endercharTrack}
            color = "#bc95f0"
          />
          <MusicPlayerH
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
  
  