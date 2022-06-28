import React from "react";
import "./About.css";
import { useEffect } from "react";
import Landing from "../../components/Landing/Landing";
import Navbar from "../../components/Navbar/Navbar";
import SectionRightList from "../../components/SectionRightList/SectionRightList";
import SectionRight1 from "../../components/SectionRight1/SectionRight1";
import Footer from "../../components/Footer/Footer";
import SectionLeft from "../../components/SectionLeft/SectionLeft";
import SectionRight from "../../components/SectionRight/SectionRight";

let tech = [
  "JavaScrip",
  "React JS / Native",
  "Node JS",
  "Rest API",
  "PostgreSQL / SQL",
  "Express",
  "Jest, TDD",
];

const About = () => {
  //use window.scrollTo(0, 0) to render page on top after refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // when passing img src as prop use a word require()
  return (
    <div className="page-container">
      <Navbar />
      <div id="about-me-landing-img">
        <Landing
          title={"About me"}
          details={
            "More about me. In computing, plain text is a loose term for data that represent only characters of readable material but not its graphica representation nor other objects."
          }
        />
      </div>
      <SectionRightList
        notes={"learning is my passion"}
        title={"tech stack"}
        li={tech.map((e) => (
          <li>{e}</li>
        ))}
      />
      <SectionRight
        notes={"day after day"}
        title={"ballet"}
        details={"dancing and watching"}
        imgBack={require("../../images/ballet-back.png")}
        imgFront={require("../../images/ballet-front.png")}
      />
      <SectionLeft
        notes={"always in my earbuds"}
        title={"books"}
        details={"reading and listening"}
        imgBack={require("../../images/books-back.png")}
        imgFront={require("../../images/books-front.png")}
      />
      <SectionRight1
        notes={"whenever I have an hour"}
        title={"galleries"}
        details={"counsuming art is as important as learning"}
        img={require("../../images/gallery.png")}
      />

      <Footer />
    </div>
  );
};

export default About;
