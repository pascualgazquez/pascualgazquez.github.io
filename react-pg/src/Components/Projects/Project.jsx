const Project = ({ image, captionImage, bgColor }) => {
    return (
      <div className="project">
        <img src={image} alt="Project" />
        <div className="caption" style={{ backgroundColor: bgColor }}>
          <img src={captionImage} className="captionimg" />
        </div>
      </div>
    );
  };
  
  export default Project;
  