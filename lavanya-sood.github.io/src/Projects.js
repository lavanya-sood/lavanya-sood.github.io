import React from 'react';
//import './Navigation.css'
import ReactCardCarousel from 'react-card-carousel';


const Projects = (props) => {

  return (
    <div className="page-body" id="projectspage">
        {/* <div id="logo"></div> */}
        <h1 className='page-headings'> Projects </h1>
        {/* <h2> Lavanya Sood </h2> */}
        <div id="cards-carousel">
          <ReactCardCarousel autoplay={ true } autoplay_speed={ 4000 }>
            <div className="projectCard project1">
              <h2 className='project-heading'> Introduction to HTML </h2>
              <h3 className='project-info'> A platform I created for my Undergraduate Thesis to teach beginners about Hypertext Markup Language </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://thesismodule-frontendnew.netlify.app/';}}> View Website </button>
            </div>
            <div className="projectCard project2">
              <h2 className='project-heading'> Bakechain </h2>
              <h3 className='project-info'> A blockchain web platform for people to view and edit information about baked goods </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/BakeChain';}}> View Code </button>
            </div>
            <div className="projectCard project3">
              <h2 className='project-heading'> Captain Epidemic </h2>
              <h3 className='project-info'> A website for young children to learn about pandemics </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://captain-epidemic.herokuapp.com/#/';}}> View Website </button>
            </div>
            
            <div className="projectCard project4">
              <h2 className='project-heading'> Ask Away </h2>
              <h3 className='project-info'> A Mobile Application for people to chat with their friends </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/AskAway';}}> View Code </button>
            </div>
            
            <div className="projectCard project1">
              <h2 className='project-heading'> Rags to Riches </h2>
              <h3 className='project-info'> The game of monopoly where two users can buy, sell and rent properties to have fun and win the game </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/Monopoly-Game';}}> View Code </button>
            </div>

            <div className="projectCard project2">
              <h2 className='project-heading'> The Hangman Game </h2>
              <h3 className='project-info'> A Hangman game where the user guesses Pixar and Dreamworks characters </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/Hangman-Game';}}> View Code </button>
            </div>

            <div className="projectCard project3">
              <h2 className='project-heading'> Adventures of Billy the Butcher </h2>
              <h3 className='project-info'> A maze games that lets users play multiple levels in order to win the game </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/Dungeon-Game-COMP2511';}}> View Code </button>
            </div>

            <div className="projectCard project4">
              <h2 className='project-heading'> Vampire Management System </h2>
              <h3 className='project-info'> A database system developed for the organization Vampire PVT. LTD. in order to manage their blood supplies. </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/Vampire-System';}}> View Code </button>
            </div>

            <div className="projectCard project1">
              <h2 className='project-heading'> Funsize Physics </h2>
              <h3 className='project-info'> A simulation which shows the effects of gravity on an object </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/Physics-Simulation';}}> View Code </button>
            </div>

            <div className="projectCard project2">
              <h2 className='project-heading'> Quiz Game </h2>
              <h3 className='project-info'> A Kahoot-like website developed for users to create quizzes and play them live with other people </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://thesismodule-frontendnew.netlify.app/';}}> View Website </button>
            </div>

            <div className="projectCard project3">
              <h2 className='project-heading'> Globeshoppers </h2>
              <h3 className='project-info'> A website for users to shop for items internationally without the shipping costs </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://globeshoppers.herokuapp.com/';}}> View Website </button>
            </div>

            <div className="projectCard project4">
              <h2 className='project-heading'> Game of Games </h2>
              <h3 className='project-info'> A Game Website which has a combination of multiple games. </h3>
              <button className='project-button' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/lavanya-sood/gameOfGames';}}> View Code </button>
            </div>

          </ReactCardCarousel>
        </div>
        
    </div>
  );
};

export default Projects;
