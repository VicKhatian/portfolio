import "./Form.css";
import React from "react";

const Form = () => {
  return (
    <div className="contact-form-section">
      <div className="left-form-box">
        <h3>discover</h3>
        <h2>Get in touch</h2>
        <p>
          Get in touch and discover how I can help your company leverage design
          and technology to fuel innovation that drives revenue growth.
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
          placeholder="email"
          required=""
        />

        <textarea
          class="input-textarea"
          name="textarea"
          placeholder="Enter your message"
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
