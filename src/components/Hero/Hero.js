import "./Hero.css";
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h1 id="name">VICTORIA</h1>
      <h1 id="surname">KHATIAN</h1>
      <p className="hero-bio">
        Front-end developer building with love fully functioning apps and
        components using JavaScript, React, based on different frameworks, from
        ideation stage, prototyping, testing to deployment.
      </p>
      <a className="aboutme-btn" href="/about" target="blank">
        More about me
      </a>
    </div>
  );
};

export default Hero;
