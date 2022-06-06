import "./Home.css";

import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Project3 from "../components/Project3";
import Project2 from "../components/Project2";
import Project1 from "../components/Project1";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="homeapp">
      <Hero />
      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
