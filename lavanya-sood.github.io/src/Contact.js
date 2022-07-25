import React from 'react';
import mailIcon from './images/mail-xxl.png';
import githubIcon from './images/github.png';
import linkedIcon from './images/linkedin.png';

const Contact = (props) => {


  return (
    <div className="page-body" id="aboutpage">
        <h1 className='page-headings'> Contact Me </h1>
        <p>Please reach out to me using any of the following methods:</p>
        <div id="contacts">
          <a href="mailto:lavanyasood09@gmail.com"><img src={mailIcon} className='contact-image'/></a>
          <a href="http://github.com/lavanya-sood"><img src={githubIcon} className='contact-image'/></a>
          <a href="http://www.linkedin.com/in/lavanya-sood/"><img src={linkedIcon} className='contact-image'/></a>
        </div>

    </div>
    
  );
};

export default Contact;
