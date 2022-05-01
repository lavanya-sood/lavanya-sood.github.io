import React from 'react';
import './Navigation.css'
import { Link } from "react-router-dom";

const Navigation = (props) => {

  return (
    <div id="nav">
        <Link to='/' className="navlinks" id="home-link"> Home </Link>
        <Link to='/about' className="navlinks" id="about-link"> About </Link>
        <Link to='/projects' className="navlinks" id="projects-link"> Projects </Link>
        <Link to='/' className="navlinks" id="resume-link"> Resume </Link>
    </div>
  );
};

export default Navigation;
