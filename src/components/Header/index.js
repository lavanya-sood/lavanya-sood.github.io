import "./index.css";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-navigation">
          <div className="box">
            <p className="box-text">About</p>
            {/* <div class="box-inner"> About </div> */}
          </div>
          <div className="box">
            <p className="box-text">Projects</p>
          </div>
          <div className="box">
            <p className="box-text">Contact</p>
          </div>
        </div>
        <div className="header-name-section">
          <h1 className="header-name">
            <span className="header-name-top">Lavanya Sood</span>
            <span className="header-name-back">Lavanya Sood</span>
          </h1>
        </div>

        {/* <div className="header-name">
          <h1 className="header-name-back">Lavanya Sood</h1>
          <h1 className="header-name-top">Lavanya Sood</h1>
        </div> */}

        <div class="bubble">Software Developer</div>
      </div>
    </header>
  );
}
