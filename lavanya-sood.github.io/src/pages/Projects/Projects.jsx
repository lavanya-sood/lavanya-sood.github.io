import React from "react";
import "../Projects/Projects.css";
import ProjectTile from "./ProjectTile";
import AskIcon from "../../assets/projects/askIcon.png";
import BakeIcon from "../../assets/projects/bakechainIcon.png";
import DiaryIcon from "../../assets/projects/diaryIcon.png";
import EpidemicIcon from "../../assets/projects/epidemicIcon.png";
import FunIcon from "../../assets/projects/funIcon.png";
import GlobeIcon from "../../assets/projects/globeshoppersIcon.png";
import HangmanIcon from "../../assets/projects/hangmanIcon.png";
import HTMLIcon from "../../assets/projects/htmlIcon.png";
import MazeIcon from "../../assets/projects/mazeIcon.png";
import RichesIcon from "../../assets/projects/richesIcon.png"; 

const Projects = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "scroll" }}> 
      <div>
        <h2 className="sectionHeading">The Engineer’s Exhibit</h2>
        <p className="aboutParagraph">
          Over the years, I’ve built a collection of projects—some practical,
          some experimental—all in pursuit of improving my technical skills and
          creating good digital experiences.
        </p>
      </div>
      <div className="projectsSection">
        <div className="projectsColumn">
          <ProjectTile
            title="Introduction to HTML"
            description="An educational platform from my Undergraduate Thesis designed to teach beginners the basics of HTML"
            imageSrc={HTMLIcon}
            link="https://github.com/lavanya-sood/Thesis_EducationalInterface"
          />
           <ProjectTile
            title="GlobeShoppers"
            description="A website where users can shop internationally without shipping fees by having travelers buy and bring the items for them"
            imageSrc={GlobeIcon}
            link="https://github.com/lavanya-sood/Globeshoppers"
          />
           <ProjectTile
            title="Captain Epidemic"
            description="An educational website that helps young children learn about diseases, including COVID-19"
            imageSrc={EpidemicIcon}
            link="https://github.com/lavanya-sood/Captain-Epidemic"
          />
           <ProjectTile
            title="Dungeon maze"
            description="A maze game that takes players through a series of increasingly tricky levels, testing their skills and strategy to reach the ultimate win"
            imageSrc={MazeIcon}
            link="https://github.com/lavanya-sood/Dungeon-Game"
          />
           <ProjectTile
            title="BakeChain"
            description="A blockchain-based web platform where users can view and edit information about baked goods"
            imageSrc={BakeIcon}
            link="https://github.com/lavanya-sood/BakeChain"
          />
        </div>

        <div className="projectsColumn">
          <ProjectTile
            title="AskAway"
            description="A mobile app that sparks conversations with friends through a series of fun and engaging icebreakers"
            imageSrc={AskIcon}
            link="https://github.com/lavanya-sood/AskAway"
          />
           <ProjectTile
            title="Rags to Riches"
            description="A Monopoly-style game where two players can buy, sell, and rent properties, strategizing their way to victory"
            imageSrc={RichesIcon}
            link="https://github.com/lavanya-sood/Monopoly-Game"
          />
           <ProjectTile
            title="Hangman"
            description="A Hangman game where players guess characters from Pixar and DreamWorks films, testing their knowledge of animated favorites"
            imageSrc={HangmanIcon}
            link="https://github.com/lavanya-sood/Hangman-Game"
          />
          
           <ProjectTile
            title="Physics Simulation"
            description="A physics simulation showing how gravity, wind, and surfaces affect a bouncing ball"
            imageSrc={FunIcon}
            link="https://github.com/lavanya-sood/Physics-Simulation"
          />
           <ProjectTile
            title="Dear Diary"
            description="A mobile app that helps users track and organize their daily activities"
            imageSrc={DiaryIcon}
            link="https://github.com/lavanya-sood/dearDiaryMobile"
            workInProgress={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
