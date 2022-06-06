import "./Home.css";
// import "../App.css";
import Footer from "./Footer";
import Contact from "./Contact";
import Project3 from "./Project3";
import Project2 from "./Project2";
import Project1 from "./Project1";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="homeapp">
      <Navbar />
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
