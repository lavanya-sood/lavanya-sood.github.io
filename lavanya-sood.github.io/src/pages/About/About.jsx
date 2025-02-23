import React from "react";
import "../Projects/Projects.css";

import "../About/About.css";
import SkillBubbles from "./SkillBubbles";

const Projects = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
    >
      <div>
        <h2 className="sectionHeading">Tinkering with Pixels & Code</h2>
        <p className="aboutParagraph">
          I’m Lavanya Sood, a dedicated Frontend Engineer with a passion for
          crafting scalable, collaborative web and mobile experiences. I
          specialize in React, React Native, and TypeScript, always striving to
          leverage technology for thoughtful, impactful solutions.
        </p>
        <p className="aboutParagraph">
          Endlessly curious and always learning, I’m on a quest to develop
          elegant, innovative interfaces that make the digital world a little
          more delightful.
        </p>
      </div>
      {/* <div className="skillsSection">
        <h2 className="skillsHeading">Programming Skills</h2>
        <div className="skillsOptions">
          <div className="skillsColumn">
            <div className="skillSection">
              <img src={ReactLogo} className="skillLogo" />
              <h3 className="skillTitle"> React </h3>
            </div>

            <div className="skillSection">
              <img src={HTMLLogo} className="skillLogo" />
              <h3 className="skillTitle"> HTML </h3>
            </div>
          </div>

          <div className="skillsColumn">
            <div className="skillSection">
              <img src={ReactNativeLogo} className="skillLogo" />
              <h3 className="skillTitle"> React Native </h3>
            </div>

            <div className="skillSection">
              <img src={CSSLogo} className="skillLogo" />
              <h3 className="skillTitle"> CSS </h3>
            </div>
          </div>

          <div className="skillsColumn">
            <div className="skillSection">
              <img src={TypescriptLogo} className="skillLogo" />
              <h3 className="skillTitle"> Typescript </h3>
            </div>
            <div className="skillSection">
              <img src={PythonLogo} className="skillLogo" />
              <h3 className="skillTitle"> Python </h3>
            </div>
          </div>
          <div className="skillsColumn">
            <div className="skillSection">
              <img src={JavascriptLogo} className="skillLogo" />
              <h3 className="skillTitle"> Javascript </h3>
            </div>

            <div className="skillSection">
              <img src={AppleLogo} className="skillLogo" />
              <h3 className="skillTitle"> Swift </h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="skillsValues">
      <SkillBubbles type="programming"/>
      </div>

      <div className="skillsValues">
      <SkillBubbles type="technical"/>
      </div>
    
     
    </div>
  );
};

export default Projects;
