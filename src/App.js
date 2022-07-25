import './App.css';
import Navigation from './Navigation.js';
import Homepage from './Homepage.js';
import About from './About.js';
import Projects from './Projects.js';

import {Routes, BrowserRouter, Route } from 'react-router-dom';

import shapes1 from './images/shapes1.png';
import shapes2 from './images/shapes2.png';
import shapes3 from './images/shapes3.png';
import shapes4 from './images/shapes4.png';
import shapes5 from './images/shapes5.png';
import shapes6 from './images/shapes6.png';
import shapes7 from './images/shapes7.png';
import shapes8 from './images/shapes8.png';
import shapes9 from './images/shapes9.png';
import shapes10 from './images/shapes10.png';
import shapes11 from './images/shapes11.png';
import shapes12 from './images/shapes12.png';
import Contact from './Contact';

function App() {

  const parallax = (e) => {
    document.querySelectorAll(".shapes").forEach((function(move){
      const moving_value = move.getAttribute("data-value");
      const x = (e.clientX * moving_value)/250;
      const y = (e.clientY * moving_value)/250;

      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }))
  }

  document.addEventListener("mousemove",parallax);

  return (
    <div className="App">
        <div id="bg-container">
          <img src={shapes1} className="shapes shape1" data-value="-2" alt=""/>
          <img src={shapes2} className="shapes shape2" data-value="6" alt=""/>
          <img src={shapes3} className="shapes shape3" data-value="4" alt=""/>
          <img src={shapes4} className="shapes shape4" data-value="2" alt=""/>
          <img src={shapes5} className="shapes shape5" data-value="-6" alt=""/>
          <img src={shapes6} className="shapes shape6" data-value="4" alt=""/>
          <img src={shapes7} className="shapes shape7" data-value="8" alt=""/>
          <img src={shapes8} className="shapes shape8" data-value="2" alt=""/>
          <img src={shapes9} className="shapes shape9" data-value="-9" alt=""/>
          <img src={shapes10} className="shapes shape10" data-value="6" alt=""/>
          <img src={shapes11} className="shapes shape11" data-value="-6" alt=""/>
          <img src={shapes12} className="shapes shape12" data-value="9" alt=""/>
          {/* <img src={shapes13} className="shapes shape13" data-value="4" alt=""/>
          <img src={shapes14} className="shapes shape14" data-value="8" alt=""/> */}
        </div>
        
        
        <BrowserRouter>
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route exact path="/projects" element={<Projects/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/" element={<Homepage/>}/>
          </Routes>
          <Navigation/>
        </BrowserRouter>
    </div>
  );
}

export default App;
