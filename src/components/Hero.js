import "./Hero.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="landing-image">
        <img src={logo} alt="computer"></img>
      </div>
      <div className="hero-info">
        <div className="hero-name">Victoria Khatian</div>
        <div className="hero-bio">
          Front-end developer building with love fully functioning apps and
          components using JavaScript, React, based on different frameworks,
          from ideation stage, prototyping, testing to deployment.
        </div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Hero;
