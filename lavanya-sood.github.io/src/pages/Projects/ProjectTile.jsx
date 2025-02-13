import React from 'react';

const ProjectTile = ({title, description, imageSrc, link}) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

  return (
    <button className='projectTile' onClick={() => openInNewTab('https://stackoverflow.com')}>
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
