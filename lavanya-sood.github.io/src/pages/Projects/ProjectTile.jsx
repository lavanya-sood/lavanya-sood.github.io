import React from 'react';

const ProjectTile = ({title, description, imageSrc}) => {

  return (
    <button className='projectTile'>
        <div className='imgOutbox'>
        <img src={imageSrc} className="tileImage" />
        </div>
        <div className='tileData'>
        <h3 className="tileHeading"> {title} </h3>
        <p className="tileDescription">{description}</p>    
        </div>
       
  </button>
  );
};

export default ProjectTile;
