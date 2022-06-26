import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div id="contact-me" className="contact-section">
      <h3>open for interviews</h3>
      <h2>SET UP 15-30 MIN MEETING</h2>
      <p className="contact-p">
        Set up a screenong call with me to discover more about me and how I can
        contribute to your company.
      </p>
      <a
        href="https://calendly.com/khatian-victoria/interview-call"
        class="calendar-button"
      >
        schedule a Call
      </a>
    </div>
  );
};

export default ContactMe;
