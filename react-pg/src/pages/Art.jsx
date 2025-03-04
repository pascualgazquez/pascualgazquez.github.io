import React from 'react'
import Cover from  "../Components/Cover/Cover";
import dart from "../assets/titles/2dart.gif";
import dartCover from '../assets/more/2dart.gif'

const Art = () => {
    return (
      <>
      <Cover color = "#80ecff" title = {dart} picture={dartCover}/>
      <div className = "container">

      </div>
    </>
    );
  };
  
  export default Art;
  