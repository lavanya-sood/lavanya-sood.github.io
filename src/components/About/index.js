import "./index.css";
import React from "react";
import texture from "../../img/texturebg1.jpg";
import SkillsCarousel from "../SkillsCarousel";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="section1">
      <div className="section1-inner">
        <h1 className="section1-title">
          <span className="section1-title-top">Skills</span>
          <span className="section1-title-back">Skills</span>
        </h1>
        <SkillsCarousel />
      </div>
    </div>
  );
}
