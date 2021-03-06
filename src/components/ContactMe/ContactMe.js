import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div id="contact-me" className="contact-me-section">
      <h3>open for interviews</h3>
      <h2>SET UP 15-30 MIN MEETING</h2>
      <p className="contact-p">
        I'd love to discover more about your company background and goals, share
        my career aspirations, and see if there's a match.
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
