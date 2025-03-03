const Project = ({ image, captionImage, bgColor, link }) => {
    return (
      <div className="project">

        <img src={image} alt="Project" />

        <div className="caption" style={{ backgroundColor: bgColor }}>
          <a href={link} className="linkcontainer">
            <img src={captionImage} className="captionimg" />
          </a>
        </div>
      </div>
    );
  };
  
  export default Project;
  