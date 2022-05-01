import React from 'react';
//import './Navigation.css'
import SkillBar from 'react-skillbars';

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
          I am a graduate Software Engineer with a distinction average passionate about technology and interested in developing creative technologies. 
          </p>
          <p>
          I have a lot of previous experience working in developing webpages and mobile applications. 
          </p>
          <h2 className='page-subheadings'> My Technical Skills </h2>
          <div id="languageSkills">
            <SkillBar skills={SKILLS}/>
          </div>
          

        </div>
       
    </div>
    
  );
};

export default About;
