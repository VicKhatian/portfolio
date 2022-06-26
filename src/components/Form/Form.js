import "./Form.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="mailto:khatian.v@gmail.com" className="email-form-section">
        <div className="left-form-box">
          <h3>discover more</h3>
          <h2>email</h2>
          <p>
            Feel free to drop me a message if you'd like to learn more how I can
            contribute to your company.
          </p>
        </div>
        <div className="right-form-box">
          <label id="name-label" for="form-name"></label>
          <input
            type="text"
            name="name"
            id="form-name"
            class="form-field"
            placeholder="Name"
            required=""
          />

          <label id="email-label" for="form-email"></label>
          <input
            type="email"
            name="email"
            id="form-email"
            class="form-field"
            placeholder="Email"
            required=""
          />

          <textarea
            class="input-textarea"
            name="textarea"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" id="submit" class="submit-btn">
            Submit message
          </button>
        </div>
      </form>
      <div className="contact-me-form">
        <div className="left-form-box">
          <h3>open for interviews</h3>
          <h2>call</h2>
          <p className="contact-p">
            Set up a call in Calendly with me to have a face-to-face call.
          </p>
        </div>
        <div className="right-form-box">
          <a
            href="https://calendly.com/khatian-victoria/interview-call"
            class="calendar-button"
          >
            schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
