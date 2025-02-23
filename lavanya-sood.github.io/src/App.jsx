import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import appLoadingGif from "../src/assets/loadingsymbol.gif";

const sections = ["Home", "About", "Projects"];

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [contactBot, setContactBot] = useState(false);
  const scrollContainerRef = useRef(null);
  const [init, setInit] = useState(false);

  const [loading, setLoading] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(() => setLoading(false), 500);
    }, 2700);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const divRef = useRef(null);
  const [isScrollingVertical, setIsScrollingVertical] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      console.log(scrollContainerRef.current);
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      console.log(scrollTop, scrollHeight, clientHeight);
      setIsScrollingVertical(
        scrollTop > 0 && scrollTop < scrollHeight - clientHeight
      );
    }
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
    []
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

  // useEffect(() => {
  //   const homeSection = document.getElementById("home");
  //   if (homeSection) {
  //     homeSection.style.overflow = "hidden"; // Prevent scrolling inside Home
  //   }
  // }, []);

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
    <div className="website">
      {loading ? (
        <motion.div
          className="loadingPage"
          initial={{ y: 0 }}
          animate={exitAnimation ? {scale:0.3,y: "-80%", opacity: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src={appLoadingGif} className="appLoadingGif" />
        </motion.div>
      ) : (
        <>
          <Navbar
            activeTab={activeTab}
            setActiveTab={scrollToSection}
            contactBot={contactBot}
            setContactBot={setContactBot}
            isScrollingVertical={isScrollingVertical}
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
              <motion.div
                key={section}
                id={section.toLowerCase()}
                className={"sectionMain"}
                initial={{ opacity: 0, x: 50 }}
                animate={activeTab === section ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                ref={divRef}
                onScroll={handleScroll}
              >
                {section === "Home" && <Home />}
                {section === "About" && <About />}
                {section === "Projects" && <Projects />}
              </motion.div>
            ))}
          </motion.div>

          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={() => {}}
              options={options}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
