import React from "react";
import "../Projects/Projects.css";

import "../About/About.css";
import SkillBubbles from "./SkillBubbles";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
    >
      <div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="sectionHeading"
        >
          Tinkering with Pixels & Code
        </motion.h2>

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

      <div className="skillsValues">
        <SkillBubbles type="programming" />
      </div>

      <div className="skillsValues">
        <SkillBubbles type="technical" />
      </div>
    </div>
  );
};

export default Projects;
