import React from "react";
import "./Contact.css";
import { useEffect } from "react";
import Landing from "../../components/Landing/Landing";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactMe from "../../components/ContactMe/ContactMe";

const Contact = () => {
  //use window.scrollTo(0, 0) to render page on top after refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // when passing img src as prop use a word require()
  return (
    <div className="page-container">
      <Navbar />
      <div id="contact-img">
        <Landing
          title={"Contact"}
          details={
            "Get in touch. In computing, plain text is a loose term for data that represent only characters of readable material but not its graphica representation nor other objects."
          }
        />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Contact;
