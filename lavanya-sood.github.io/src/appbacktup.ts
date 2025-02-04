import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import GradientCircle from "./components/GradientCircle/GradientCircle";


import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const sections = ["Home", "About", "Projects", "Creative"];

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [contactBot, setContactBot] = useState(false);
  const scrollContainerRef = useRef(null);

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        // links: {
        //   color: "#ffffff",
        //   distance: 150,
        //   enable: true,
        //   opacity: 0.5,
        //   width: 1,
        // },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  useEffect(() => {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.style.overflow = "hidden"; // Prevent scrolling inside Home
    }
  }, []);

  // Function to scroll to the correct section when clicking a navbar link
  const scrollToSection = (section) => {
    const sectionIndex = sections.indexOf(section);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: sectionIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
    setActiveTab(section);
  };

  return (
    <div>
      <Navbar
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        contactBot={contactBot}
        setContactBot={setContactBot}
      />
     

      {contactBot && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contactBotLocation"
        >
          <Contact setContactBot={setContactBot} />
        </motion.div>
      )}
      <motion.div
        ref={scrollContainerRef}
        className="horizontal-scroll-container"
      >
        {sections.map((section) => (
          <>
            {
              section === "Home" ? (
                <motion.div
                  key={section}
                  id={section.toLowerCase()}
                  className="section2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={activeTab === section ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Home />
                
                </motion.div>
              ) : (
                <motion.div
                  key={section}
                  id={section.toLowerCase()}
                  className="sectionMain"
                  initial={{ opacity: 0, x: 50 }}
                  animate={activeTab === section ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {section === "About" && <About />}
                  {section === "Projects" && <Projects />}
                  {section === "Creative" && <Projects />}
                </motion.div>
              )
              // <>
              // {section === 'Contact' && <Contact/>}
              // </>
            }
          </>
        ))}
      </motion.div>
      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />}
    </div>
  );
};

export default App;

// import React from 'react';

// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Section from './components/Section/Section';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Projects from './pages/Projects/Projects';
// import Contact from './pages/Contact/Contact';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="main-container">
//         <Section id="home" className="home">
//           <Home/>
//         </Section>
//         <Section id="about" className="about">
//           <About/>
//         </Section>
//         <Section id="projects" className="projects">
//           <Projects/>
//         </Section>
//         <Section id="contact" className="contact">
//           <Contact/>
//         </Section>
//       </div>
//     </>
//   );
// };

// export default App;
