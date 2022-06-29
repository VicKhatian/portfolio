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
import Section2 from "../../components/Section2/Section2";

//data for my techstack section
let tech = [
  "JavaScrip",
  "React JS / Native",
  "Node JS",
  "Rest API",
  "PostgreSQL / SQL",
  "Express",
  "Jest, TDD",
];

//data for my background section
let mystory = [
  "My career started in banking, where I progressed from Call-Canter operator to Head of Trade Finance. That's where I've learnt to synthesize goals from client needs and map the solution.",
  "I embraced software development once I moved to the UK, and worked at my university startup and a gallery. Building a site for them using web-constructor led me to School of Code bootcamp, where I've learnt fundamentals and industry best practices of programming.",
  "Ideal environment for me to work is when it requires teamwork, imaginative thinking, problem-solving and curiosity all in one.",
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
            "I'm a big believer in learning by doing and having fun. In constant state of exploring, thinking, questioning and debating."
          }
        />
      </div>
      <Section2
        title={"background"}
        text={mystory.map((e) => (
          <p>{e}</p>
        ))}
      />
      <SectionRightList
        notes={"non-stop learning"}
        title={"tech stack"}
        li={tech.map((e) => (
          <li>{e}</li>
        ))}
      />
      <SectionRight1
        notes={"problem solving"}
        title={"pop-up books"}
        img={require("../../images/popupbook.png")}
        details={
          "Paper ingeneering is like figuring out puzzles, and a exciting exersice to train perseverance and to look at the problem from different angles. Literally."
        }
      />
      <SectionRight
        notes={"every day"}
        title={"ballet"}
        details={
          "Helps me find my center of balance, gain strength and agility. It tought me how much hard work stands behind seamless, effortless output."
        }
        imgBack={require("../../images/ballet-back.png")}
        imgFront={require("../../images/ballet-front.png")}
      />
      <SectionLeft
        notes={"always in my earphones"}
        title={"books"}
        details={
          "Nonfiction books are great tools for finding answers and making real-world connections to build on my knowledge. "
        }
        imgBack={require("../../images/books-back.png")}
        imgFront={require("../../images/books-front.png")}
      />
      <SectionRight1
        notes={"whenever I have time"}
        title={"galleries"}
        details={
          "Counsuming art is as important for me as learning. I'm into any ways of interacting wit it - immersive experience, galleries, street art or creating my own."
        }
        img={require("../../images/gallery.png")}
      />

      <Footer />
    </div>
  );
};

export default About;
