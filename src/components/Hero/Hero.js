import "./Hero.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Victoria</h1>
      <h1>Khatian</h1>
      <p className="hero-bio">
        Front-end developer building with love fully functioning apps and
        components using JavaScript, React, based on different frameworks, from
        ideation stage, prototyping, testing to deployment.
      </p>
    </div>
  );
};

export default Hero;
