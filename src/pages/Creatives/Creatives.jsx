import React from "react";
import "../Creatives/Creatives.css";
import Screen1 from "../../assets/creatives/1Screen.png";
import A1A from "../../assets/creatives/1A.jpg";
import A1B from "../../assets/creatives/1B.jpg";
import A1C from "../../assets/creatives/1C.jpg";
import A1D from "../../assets/creatives/1D.jpg";
import A1E from "../../assets/creatives/1E.jpg";
import A1F from "../../assets/creatives/1F.jpg";
import A1G from "../../assets/creatives/1G.jpg";
import A1H from "../../assets/creatives/1H.jpg";

import Screen2 from "../../assets/creatives/2Screen.png";
import B1A from "../../assets/creatives/2A.jpg";
import B1B from "../../assets/creatives/2B.jpg";
import B1C from "../../assets/creatives/2C.jpg";
import B1D from "../../assets/creatives/2D.jpg";
import B1E from "../../assets/creatives/2E.jpg";
import B1F from "../../assets/creatives/2F.jpg";
import B1G from "../../assets/creatives/2G.jpg";
import B1H from "../../assets/creatives/2H.jpg";

import Screen3 from "../../assets/creatives/3Screen.png";
import C1A from "../../assets/creatives/3A.png";
import C1B from "../../assets/creatives/3B.png";
import C1C from "../../assets/creatives/3C.png";
import C1D from "../../assets/creatives/3D.png";
import C1E from "../../assets/creatives/3E.png";
import C1F from "../../assets/creatives/3F.png";
import C1G from "../../assets/creatives/3G.png";
import C1H from "../../assets/creatives/3H.png";

import Screen4 from "../../assets/creatives/4Screen.png";
import D1A from "../../assets/creatives/4A.jpg";
import D1B from "../../assets/creatives/4B.jpg";
import D1C from "../../assets/creatives/4C.jpg";
import D1D from "../../assets/creatives/4D.jpg";
import D1E from "../../assets/creatives/4E.jpg";
import D1F from "../../assets/creatives/4F.jpg";
import D1G from "../../assets/creatives/4G.jpg";
import D1H from "../../assets/creatives/4H.jpg";

const Creatives = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
      <div>
        <h2 className="sectionHeading">The Artist’s Archive</h2>
        <p className="aboutParagraph">
          Over the years, I’ve designed and revamped phone icons and
          screens—some for fun, some to refine my style—all as part of my
          exploration into creative digital design and UX enhancement.
        </p>
      </div>
      <div>
        <div className="designsMobile">
          <h2 className="skillsHeading">Pretty in pink theme</h2>
          <div className="mobileDesign">
            <img src={Screen1} className="mobileScreen" />
            <div className="screenIcons">
              <div className="iconColumn">
                <img src={A1A} className="screenIcon" />
                <img src={A1E} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={A1B} className="screenIcon" />
                <img src={A1F} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={A1C} className="screenIcon" />
                <img src={A1G} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={A1D} className="screenIcon" />
                <img src={A1H} className="screenIcon" />
              </div>
            </div>
          </div>
        </div>

        <div className="designsMobile">
          <h2 className="skillsHeading">Midnight art theme </h2>
          <div className="mobileDesign">
            <img src={Screen2} className="mobileScreen" />
            <div className="screenIcons">
              <div className="iconColumn">
                <img src={B1A} className="screenIcon" />
                <img src={B1E} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={B1B} className="screenIcon" />
                <img src={B1F} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={B1C} className="screenIcon" />
                <img src={B1G} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={B1D} className="screenIcon" />
                <img src={B1H} className="screenIcon" />
              </div>
            </div>
          </div>
        </div>

        <div className="designsMobile">
          <h2 className="skillsHeading">Pastel evening theme</h2>
          <div className="mobileDesign">
            <img src={Screen3} className="mobileScreen" />
            <div className="screenIcons">
              <div className="iconColumn">
                <img src={C1A} className="screenIcon" />
                <img src={C1E} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={C1B} className="screenIcon" />
                <img src={C1F} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={C1C} className="screenIcon" />
                <img src={C1G} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={C1D} className="screenIcon" />
                <img src={C1H} className="screenIcon" />
              </div>
            </div>
          </div>
        </div>

        <div className="designsMobile">
          <h2 className="skillsHeading">Retro comic book theme</h2>

          <div className="mobileDesign">
            <img src={Screen4} className="mobileScreen" />
            <div className="screenIcons">
              <div className="iconColumn">
                <img src={D1A} className="screenIcon" />
                <img src={D1E} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={D1B} className="screenIcon" />
                <img src={D1F} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={D1C} className="screenIcon" />
                <img src={D1G} className="screenIcon" />
              </div>
              <div className="iconColumn">
                <img src={D1D} className="screenIcon" />
                <img src={D1H} className="screenIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
