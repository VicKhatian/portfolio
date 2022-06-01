import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="menu">menu</div>
      <div className="hero">
        <div className="hero-info">
          <div className="hero-name">Victoria Khatian</div>
          <div className="hero-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="button"></div>
        </div>
      </div>
      <div className="project1">
        <div className="project1-images">
          <div className="p1-image-back">image-back</div>
          <div className="p1-image-front">image-front</div>
        </div>
        <div className="project1-info">
          <div className="project1-notes">NODE TYPESCRIPT</div>
          <div className="project1-title">Weather App</div>
          <div className="project1-paragraph">
            Description of the app, how marketing and innovation teams leverage
            design to turn disruptive technologies into real products that
            generate revenue and earn consumer interest.
          </div>
        </div>
      </div>
      <div className="project2">
        <div className="project2-images">
          <div className="p2-image-back">image-back</div>
          <div className="p2-image-front">image-front</div>
        </div>
        <div className="project2-info">
          <div className="project2-notes">tech stack</div>
          <div className="project2-title">Help Desk App</div>
          <div className="project2-paragraph">
            Description of the app, how marketing and innovation teams leverage
            design to turn disruptive technologies into real products that
            generate revenue and earn consumer interest.
          </div>
        </div>
      </div>
      <div className="project3">
        <div className="project3-images">
          <div className="p3-image">image</div>
        </div>
        <div className="project3-info">
          <div className="project3-notes">tech stack</div>
          <div className="project3-title">Help Desk App</div>
          <div className="project3-paragraph">
            short description of the project 3, description of the,description
            of the,description of the
          </div>
        </div>
      </div>
      <div className="techstack">
        <div className="techstack-title">My techstack</div>
        <div className="techstack-info">
          <div className="tech1">
            <div className="techstack-icon">React JS image</div>
            <div className="techstack-name">React JS</div>
          </div>
          <div className="tech2">
            <div className="techstack-icon">JS image</div>
            <div className="techstack-name">JS</div>
          </div>
          <div className="tech3">
            <div className="techstack-icon">Node image</div>
            <div className="techstack-name">Node</div>
          </div>
          <div className="tech4">
            <div className="techstack-icon">Express image</div>
            <div className="techstack-name">Express</div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-notes">open for interviews</div>
        <div className="contact-title">SET UP 15-30 MIN MEETING</div>
        <div className="contact-info">
          Set up a call with me to discover how I can leverage design to enhance
          your products.
        </div>
        <div className="calendar-button">schedule a call</div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <div className="year-curr">2022</div>
          <div className="copyright-info">Victoria Khatian London</div>
        </div>
        <div className="footer-right">
          <div>LinkedIn</div>
          <div>GitHub</div>
          <div className="footer-contact">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default App;
