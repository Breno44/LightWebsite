import React, { useState } from "react";
import MenuImage from "./assets/images/menu.png";
import LogoImage from "./assets/images/logo.png";
import LampImage from "./assets/images/lamp.png";
import LightImage from "./assets/images/light.png";
import "./App.scss";

const App = () => {
  const [img, setImg] = useState(false);

  const handleToogle = () => {
    setImg(true);
  };

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
        <button type="button" onClick={handleToogle}>
          <span></span>
        </button>
      </nav>
      <div class="lamp-container">
        <img src={LampImage} className="lamp" alt="lamp" />
        {img && <img src={LightImage} className="light" alt="light" />}
      </div>

      <div className="text-container">
        <h1>
          Latest
          <br />
          in lighting
        </h1>
        <p>
          This is the first lamp from our company. we're making a huge collection of modern Lamps in all categories from
          home use to office use.
        </p>
        <a href="https://github.com/Breno44">Check All Collections</a>
        <div className="control">
          <p>04</p>
          <div className="line">
            <span></span>
          </div>
          <p>05</p>
        </div>
      </div>
    </div>
  );
};

export default App;
