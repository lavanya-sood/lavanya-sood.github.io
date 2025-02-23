import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
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
import "../About/About.css";

const About = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
    >
      <div>
        <h1 className="sectionHeading">Tinkering with Pixels & Code</h1>

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

      <div className="skillsSection">
        <h2 className="skillsHeading">Programming Skills</h2>
        <div className="skillsOptions">
          <div className="skillsColumn">
            <div className="skillSection">
              <img src={ReactLogo} className="skillLogo" />
              <h3 className="skillTitle"> React </h3>
            </div>
            <div className="skillSection">
              <img src={ReactNativeLogo} className="skillLogo" />
              <h3 className="skillTitle"> React Native </h3>
            </div>

            <div className="skillSection">
              <img src={TypescriptLogo} className="skillLogo" />
              <h3 className="skillTitle"> Typescript </h3>
            </div>

            <div className="skillSection">
              <img src={JavascriptLogo} className="skillLogo" />
              <h3 className="skillTitle"> Javascript </h3>
            </div>
          </div>

          <div className="skillsColumn">
            <div className="skillSection">
              <img src={HTMLLogo} className="skillLogo" />
              <h3 className="skillTitle"> HTML </h3>
            </div>
            <div className="skillSection">
              <img src={CSSLogo} className="skillLogo" />
              <h3 className="skillTitle"> CSS </h3>
            </div>
            <div className="skillSection">
              <img src={PythonLogo} className="skillLogo" />
              <h3 className="skillTitle"> Python </h3>
            </div>
            <div className="skillSection">
              <img src={AppleLogo} className="skillLogo" />
              <h3 className="skillTitle"> Swift </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="skillsSection">
        <h2 className="skillsHeading">Programming Skills</h2>
        <p> YO </p>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactNativeLogo} className="skillLogo" />
                <h3 className="skillTitle"> React Native </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={TypescriptLogo} className="skillLogo" />
                <h3 className="skillTitle"> Typescript </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={JavascriptLogo} className="skillLogo" />
                <h3 className="skillTitle"> Javascript </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={HTMLLogo} className="skillLogo" />
                <h3 className="skillTitle"> HTML </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={CSSLogo} className="skillLogo" />
                <h3 className="skillTitle"> CSS </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={PythonLogo} className="skillLogo" />
                <h3 className="skillTitle"> Python </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={NodejsLogo} className="skillLogo" />
                <h3 className="skillTitle"> Node JS </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={AppleLogo} className="skillLogo" />
                <h3 className="skillTitle"> Swift </h3>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="skillsSection bottomSection">
        <h2 className="skillsHeading">Technical skills</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid size={4}>
              <div className="skillSection">
                <img src={FigmaLogo} className="skillLogo" />
                <h3 className="skillTitle"> Figma </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={GitLogo} className="skillLogo" />
                <h3 className="skillTitle"> Git </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={GithubLogo} className="skillLogo" />
                <h3 className="skillTitle"> Github </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={JiraLogo} className="skillLogo" />
                <h3 className="skillTitle"> Jira </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={PhotoshopLogo} className="skillLogo" />
                <h3 className="skillTitle"> Adobe Photoshop </h3>
              </div>
            </Grid>
            <Grid size={4}>
            <div className="skillSection">
                <img src={ShellLogo} className="skillLogo" />
                <h3 className="skillTitle"> Shell </h3>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div> */}
      {/* <div>
        <h3>📍 Location: Sydney, Australia</h3>
        <h3>
          🎓 Education: Graduated with First-Class Honours in Software
          Engineering from University of New South Wales
        </h3>
        <h3>🎨 Passions: Outside of coding, I love art and games </h3>
      </div> */}
    </div>
  );
};

export default About;
