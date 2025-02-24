import React, { useEffect, useState } from "react";
import "./Navbar.css";
import websiteLogo from "../../assets/weblogo.png";

const Navbar = ({ activeTab, setActiveTab, contactBot, setContactBot, isScrollingVertical }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isScrollingVertical);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <img src={websiteLogo} className="websiteLogo"/> */}
        <ul className="navLinks">
          {screenWidth > 710 ? (
            <>
              <li key={"Home"} className="nav-item">
                <button
                  onClick={() => setActiveTab("Home")}
                  className={`navLink ${activeTab === "Home" ? "active" : ""}`}
                >
                  Home
                </button>
              </li>

              <li key={"About"} className="nav-item">
                <button
                  onClick={() => setActiveTab("About")}
                  className={`navLink ${activeTab === "About" ? "active" : ""}`}
                >
                  About
                </button>
              </li>

              <li className="imageTab">
                <img src={websiteLogo} className="websiteLogo" />
              </li>

              <li key={"Projects"} className="nav-item">
                <button
                  onClick={() => setActiveTab("Projects")}
                  className={`navLink ${
                    activeTab === "Projects" ? "active" : ""
                  }`}
                >
                  Projects
                </button>
              </li>

              <li className="nav-item">
                <button
                  onClick={() => setContactBot(!contactBot)}
                  className={`navLink`}
                >
                  Contact
                </button>
              </li>
            </>
          ) : (
            <>
          
              <li className="imageTab">
                <img src={websiteLogo} className="websiteLogo" />
              </li>
              <li key={"Home"} className="nav-item">
                <button
                  onClick={() => setActiveTab("Home")}
                  className={`navLink ${activeTab === "Home" ? "active" : ""}`}
                >
                  Home
                </button>
              </li>
              <li key={"About"} className="nav-item">
                <button
                  onClick={() => setActiveTab("About")}
                  className={`navLink ${activeTab === "About" ? "active" : ""}`}
                >
                  About
                </button>
              </li>
             
              <li key={"Projects"} className="nav-item">
                <button
                  onClick={() => setActiveTab("Projects")}
                  className={`navLink ${
                    activeTab === "Projects" ? "active" : ""
                  }`}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setContactBot(!contactBot)}
                  className={`navLink`}
                >
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
