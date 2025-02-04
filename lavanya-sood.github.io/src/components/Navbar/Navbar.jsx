import React from "react";
import "./Navbar.css";

const Navbar = ({ activeTab, setActiveTab, contactBot, setContactBot }) => {
  const sections = ["Home", "About", "Projects", "Creative"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section} className="nav-item">
              <button
                onClick={() => setActiveTab(section)}
                className={`nav-link ${activeTab === section ? "active" : ""}`}
              >
                {section}
              </button>
            </li>
          ))}
          <li  className="nav-item">
              <button
                onClick={() => setContactBot(!contactBot)}
                className={`nav-link`}
              >
                Contact
              </button>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const sections = ["Home", "About", "Projects", "Contact"];
//   const [activeTab, setActiveTab] = useState("Home");

//   // Function to handle scrolling and update active tab
//   useEffect(() => {
//     const handleScroll = () => {
//       sections.forEach((section) => {
//         const element = document.getElementById(section.toLowerCase());
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
//             setActiveTab(section);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <ul className="nav-links">
//           {sections.map((section) => (
//             <li key={section} className="nav-item">
//               <button
//                 onClick={() => {
//                   document
//                     .getElementById(section.toLowerCase())
//                     .scrollIntoView({ behavior: "smooth" });
//                   setActiveTab(section);
//                 }}
//                 className={`nav-link ${activeTab === section ? "active" : ""}`}
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

