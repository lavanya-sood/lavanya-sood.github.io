import React from 'react';
//import './Navigation.css'
// import ReactSkillbar from 'react-skillbars';
import ReactSkillbar from 'react-skillbars';

import githubLogo from './images/github.png';
import photoshopLogo from './images/adobe-photoshop-logo-freelogovectors.net_.png';
import effectsLogo from './images/adobe-after-effects-logo.png';
import figmaLogo from './images/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.webp';
import imovieLogo from './images/IOS_iMovie.png';

const About = (props) => {

  const SKILLS = [
    {
      "type": "HTML",
      "level": "90",
      "color": {
        "bar": "#f7c4d4",
        "title": {
          "background": "#c78197",
          "text": "#171616"
        }
      }
    },
    {
      "type": "CSS",
      "level": "70",
      "color": {
        "bar": "#b8c4f1",
        "title": {
          "background": "#6e7eb8",
          "text": "#171616"
        }
      }
    },
    {
      "type": "React",
      "level": "70",
      "color": {
        "bar": "#cde5cd",
        "title": {
          "background": "#82ad82",
          "text": "#171616"
        }
      }
    },
    {
      "type": "JavaScript",
      "level": "80",
      "color": {
        "bar": "#f2d4ac",
        "title": {
          "background": "#c9a371",
          "text": "#171616"
        }
      }
    },
    {
      "type": "ReactNative",
      "level": "50",
      "color": {
        "bar": "#f7c4d4",
        "title": {
          "background": "#c78197",
          "text": "#171616"
        }
      }
    },
    {
      "type": "Python",
      "level": "80",
      "color": {
        "bar": "#b8c4f1",
        "title": {
          "background": "#6e7eb8",
          "text": "#171616"
        }
      }
    },
    {
      "type": "SQL",
      "level": "70",
      "color": {
        "bar": "#cde5cd",
        "title": {
          "background": "#82ad82",
          "text": "#171616"
        }
      }
    },
    {
      "type": "Java",
      "level": "50",
      "color": {
        "bar": "#f2d4ac",
        "title": {
          "background": "#c9a371",
          "text": "#171616"
        }
      }
    },
  ];

  return (
    <div className="page-body" id="aboutpage">
        <h1 className='page-headings'> About Me </h1>
        <div id="aboutInner">
          <p>
          I have a lot of previous experience working in developing webpages and mobile applications. 
          </p>
          <h2 className='page-subheadings'> My Technical Skills </h2>
          <div id="languageSkills">
            <ReactSkillbar skills={SKILLS}/>
          </div>

          <h2 className='page-subheadings'> Other Skills </h2>
          <div id="otherSkills">
            <div className='skillSection'>
                <img src={githubLogo} className='skillImg'/>
                <h3 className='skillHeading'> Github </h3>
            </div>
            <div className='skillSection'>
                <img src={figmaLogo} className='skillImg'/>
                <h3 className='skillHeading'> Figma </h3>
            </div>
            <div className='skillSection'>
                <img src={photoshopLogo} className='skillImg'/>
                <h3 className='skillHeading'> Adobe Photoshop </h3>
            </div>
            <div className='skillSection'>
                <img src={effectsLogo} className='skillImg'/>
                <h3 className='skillHeading'> Adobe After Effects </h3>
            </div>
            <div className='skillSection'>
                <img src={imovieLogo} className='skillImg'/>
                <h3 className='skillHeading'> iMovie </h3>
            </div>
          </div>

        </div>
       
    </div>
    
  );
};

export default About;
