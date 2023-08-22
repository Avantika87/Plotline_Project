import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import call from "./assests/call.png";
import game from "./assests/game.png";
import logo from "./assests/logo.png";
import google from "./assests/google.png";
import social from "./assests/social.png";
import weather from "./assests/weather.png";
import RoundButton from "./RoundButton";

import "./App.css";

function App() {
  const description =
    "Design is more than appearance,it's about functionality.";
  return (
    <div className="Android">
      <div className="side">
        <div className="screen">
          <div className="bg"></div>

          <div className="mainHeader">
            <h1>Plotline Project</h1>

            <h3 className="made_heading">-By Avantika Gupta</h3>
            <p className="Description">{description}</p>
          </div>
          <div className="input-box">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Search here..." />
            {/* <button className="button">Search</button> */}
          </div>

          <div className="buttons">
            <RoundButton
              src={call}
              alt="App"
              tooltip={
                "Target Element: Phone\n" +
                "Text Size: 12px\n" +
                "Padding: 8px 12px\n" +
                "Text Color: White\n" +
                "Dimension: Auto"
              }
            />

            <RoundButton
              src={game}
              alt="Game"
              tooltip={
                "Target Element: PlayStore \n" +
                "Text Size: 12px\n" +
                "Padding: 8px 12px\n" +
                "Text Color: White\n" +
                "Dimension: Auto"
              }
            />

            <RoundButton
              src={social}
              alt="Social"
              tooltip={
                "Target Element: Whatsapp\n" +
                "Text Size: 12px\n" +
                "Padding: 8px 12px\n" +
                "Text Color: White\n" +
                "Dimension: Auto"
              }
            />
            <RoundButton
              src={weather}
              alt="Weather"
              tooltip={
                "Target Element: Weather App\n" +
                "Text Size: 12px\n" +
                "Padding: 8px 12px\n" +
                "Text Color: White\n" +
                "Dimension: Auto"
              }
            />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="header">
        <div className="sensor-3"></div>
      </div>

      <div className="volume-button"></div>
      <div className="power-button"></div>
      <div className="nav-bar">
        <div className="back">
          <span style={{display:"none"}}></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
