import React from "react";
import MenuImage from "./assets/images/menu.png";
import LogoImage from "./assets/images/logo.png";
import "./App.scss";

const App = () => {
  return (
    <div className="hero">
      <nav>
        <img src={MenuImage} alt="menu-img" className="menu-img" />
        <img src={LogoImage} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="https://github.com/Breno44">Latest</a>
          </li>
          <li>
            <a href="https://github.com/Breno44">Modern</a>
          </li>
          <li>
            <a href="https://github.com/Breno44">Contemporary</a>
          </li>
          <li>
            <a href="https://github.com/Breno44">Affordable</a>
          </li>
        </ul>
        <button type="button">
          <span></span>
        </button>
      </nav>
    </div>
  );
};

export default App;
