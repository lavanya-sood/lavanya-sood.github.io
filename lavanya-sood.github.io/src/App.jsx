import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Creatives from "./pages/Creatives/Creatives";
import Contact from "./pages/Contact/Contact";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const sections = ["Home", "About", "Projects", "Creative"];

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [contactBot, setContactBot] = useState(false);
  const scrollContainerRef = useRef(null);
  const [init, setInit] = useState(false);

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
    const handleResize = () => {
      if (scrollContainerRef.current) {
        const sectionElements = scrollContainerRef.current.children;
        const sectionWidth = window.innerWidth;

        for (let section of sectionElements) {
          section.style.width = `${sectionWidth}px`; // Ensure sections have correct width
        }

        // Fix scroll position when resizing
        const sectionIndex = sections.indexOf(activeTab);
        scrollContainerRef.current.scrollTo({
          left: sectionIndex * sectionWidth,
          behavior: "instant",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial sizes

    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.style.overflow = "hidden"; // Prevent scrolling inside Home
    }
  }, []);

  const scrollToSection = (section) => {
    const sectionIndex = sections.indexOf(section);

    if (scrollContainerRef.current) {
      const sectionWidth = window.innerWidth;
      scrollContainerRef.current.scrollTo({
        left: sectionIndex * sectionWidth,
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

      <motion.div ref={scrollContainerRef} className="horizontal-scroll-container">
        {sections.map((section) => (
          <motion.div
            key={section}
            id={section.toLowerCase()}
            className={section === "Home" ? "section2" : "sectionMain"}
            initial={{ opacity: 0, x: 50 }}
            animate={activeTab === section ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {section === "Home" && <Home />}
            {section === "About" && <About />}
            {section === "Projects" && <Projects />}
            {section === "Creative" && <Creatives />}
          </motion.div>
        ))}
      </motion.div>

      {init && <Particles id="tsparticles" particlesLoaded={() => {}} options={options} />}
    </div>
  );
};

export default App;
