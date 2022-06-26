import "./Home.css";
import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import ContactMe from "../../components/ContactMe/ContactMe";
import SectionRight1 from "../../components/SectionRight1/SectionRight1";
import SectionLeft from "../../components/SectionLeft/SectionLeft";
import SectionRight from "../../components/SectionRight/SectionRight";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  //use window.scrollTo(0, 0) to render page on top after refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // when passing img src as prop use a word require()
    <div className="homebody">
      <Navbar />
      <Hero />
      <SectionRight
        id="projects"
        notes={"Javascript React JS"}
        title={"weather app"}
        details={
          "The app let users to check the weather on the chosen location, for 8 days ahead with ability to expand a selected date for the details."
        }
        imgBack={require("../../images/p1-img-back.png")}
        imgFront={require("../../images/p1-img-front.png")}
      />
      <SectionLeft
        notes={"Javascript React JS"}
        title={"help desk"}
        details={
          "The app let users to check the weather on the chosen location, for 8 days ahead with ability to expand a selected date for the details."
        }
        imgBack={require("../../images/p2-img-back.png")}
        imgFront={require("../../images/p2-img-front.png")}
      />
      <SectionRight1
        notes={"Vanilla JavaScript"}
        title={"English dictionary"}
        details={
          "The app let users to check the weather on the chosen location, for 8 days ahead with ability to expand a selected date for the details."
        }
        img={require("../../images/p3-image.png")}
      />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;
