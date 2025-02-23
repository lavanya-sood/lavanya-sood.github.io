import React from "react";

import ReactLogo from "../../assets/logos/react.svg";
import ReactNativeLogo from "../../assets/logos/reactnative.png";
import TypescriptLogo from "../../assets/logos/typescript.png";
import JavascriptLogo from "../../assets/logos/javascript.png";
import HTMLLogo from "../../assets/logos/html.png";
import NodejsLogo from "../../assets/logos/nodejs.png";
import PythonLogo from "../../assets/logos/python.png";
import ShellLogo from "../../assets/logos/shell.png";
import AppleLogo from "../../assets/logos/apple.png";
import PhotoshopLogo from "../../assets/logos/photoshop.png";
import GitLogo from "../../assets/logos/git.png";
import GithubLogo from "../../assets/logos/github.png";
import FigmaLogo from "../../assets/logos/figma.svg";
import JiraLogo from "../../assets/logos/jira.svg";
import CSSLogo from "../../assets/logos/css.svg";
import CanvaLogo from "../../assets/logos/canva.png";

// Skill data with icon paths
const programmingSkills = [
  { name: "React", icon: ReactLogo },
  { name: "JavaScript", icon:JavascriptLogo },
  { name: "TypeScript", icon: TypescriptLogo },
  { name: "HTML", icon: HTMLLogo },
  { name: "CSS", icon: CSSLogo },
  { name: "Python", icon: PythonLogo },
  { name: "Swift", icon: AppleLogo },
  { name: "React Native", icon:ReactNativeLogo }
];

const technicalSkills = [
  { name: "Photoshop", icon: PhotoshopLogo },
  { name: "Git", icon:GitLogo },
  { name: "Github", icon: GithubLogo },
  { name: "Jira", icon: JiraLogo },
  { name: "CSS", icon: CSSLogo },
  { name: "Canva", icon: CanvaLogo },
  { name: "Shell", icon: ShellLogo },
  { name: "Figma", icon:FigmaLogo }
];

const SkillBubbles = ({type}) => {
  return (
    <div className="skillBubblesContainer">
     {type === 'programming' ? (
  <>
    <h2 className="skillTitle">Programming <br /> Skills</h2>
    {programmingSkills.map((skill, index) => (
      <div key={index} className={`bubble bubble-${index + 1}`}>
        <img src={skill.icon} alt={skill.name} className="bubbleIcon" />
        <span className="bubbleText">{skill.name}</span>
      </div>
    ))}
  </>
) : (
  <>
    <h2 className="skillTitle">Technical <br /> Skills</h2>
    {technicalSkills.map((skill, index) => (
      <div key={index} className={`bubble bubble-${index + 1}`}>
        <img src={skill.icon} alt={skill.name} className="bubbleIcon" />
        <span className="bubbleText">{skill.name}</span>
      </div>
    ))}
  </>
)}

     
    </div>
  );
};

export default SkillBubbles;
