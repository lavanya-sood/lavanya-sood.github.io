import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ReactLogo from "../../assets/logos/react.svg";
import "../About/About.css";

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
      <div>
        <h1>Tinkering with Pixels & Code</h1>
        <p>
          I’m Lavanya Sood, a dedicated Frontend Engineer with a passion for
          crafting scalable, collaborative web and mobile experiences.
        </p>

        <p>
          I specialize in React, React Native, and TypeScript, always striving
          to leverage technology for thoughtful, impactful solutions.
        </p>
        <p>
          Endlessly curious and always learning, I’m on a quest to develop
          elegant, innovative interfaces that make the digital world a little
          more delightful.
        </p>

        <div>
          <h3>📍 Location: Sydney, Australia</h3>
          <h3>🎓 Education: Graduated with First-Class Honours in Software
          Engineering from University of New South Wales</h3>
          <h3>🎨  Passions: Outside of coding, I love art and games </h3>
           
        </div>
      </div>

      <div>
        <h2>Programming skills</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
          </Grid>
        </Box>

        <h2>Technical skills</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
            <Grid size={4}>
              <div className="skillSection">
                <img src={ReactLogo} className="skillLogo" />
                <h3 className="skillTitle"> React </h3>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default About;
