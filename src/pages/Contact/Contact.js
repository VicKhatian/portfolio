import React from "react";
import Landing from "../../components/Landing/Landing";
import Navbar from "../../components/Navbar/Navbar";
import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <div className="page-container">
      <Navbar />
      <Landing
        title={"contact"}
        details={"feel free to contact me in any suitable way"}
      />
      <Form />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Contact;
