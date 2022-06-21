import "./Home.css";

import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import ProjectCenter from "../../components/ProjectCenter/Project3";
import ProjectRight from "../../components/ProjectRight/ProjectRight";
import ProjectLeft from "../../components/ProjectLeft/ProjectLeft";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="homeapp">
      <Navbar />
      <Hero />
      <ProjectLeft />
      <ProjectRight />
      <ProjectCenter />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
