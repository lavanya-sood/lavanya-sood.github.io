import React from 'react';
import maintainIcon from "../../assets/maintain.png";

const ProjectTile = ({title, description, imageSrc, link, workInProgress}) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

  return (
    <button className={`projectTile ${workInProgress ? 'projectUnderContruction' : ''}`} onClick={() => openInNewTab(link)}>
        <div className='imgOutbox'>
        <img src={imageSrc} className="tileImage" />
        </div>
        <div className='tileData'>
          <div className='tileTitleSection'>
          {workInProgress && <img src={maintainIcon} className="maintainImage" />}
          <h3 className="tileHeading"> {title} </h3>
          </div>
       
        <p className="tileDescription">{description}</p>    
        </div>
       
  </button>
  );
};

export default ProjectTile;
