import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="menu">menu</div>
      <div className="hero">
        <div className="hero-info">
          <div className="hero-name">Victoria Khatian</div>
          <div className="hero-bio">A short bio of the hero</div>
          <div className="button"></div>
        </div>
      </div>
      <div className="project1">
        Project1
        <div className="project1-images">
          <div className="image-front">image-front</div>
          <div className="image-back">image-back</div>
        </div>
        <div className="project1-info">
          <div className="project1-notes">tech stack</div>
          <div className="project1-title">Weather App</div>
          <div className="project1-paragraph">
            short description of the project 1
          </div>
        </div>
      </div>
      <div className="project2">
        <div className="project2-images">
          <div className="image-front">image-front</div>
          <div className="image-back">image-back</div>
        </div>
        <div className="project2-info">
          <div className="project2-notes">tech stack</div>
          <div className="project2-title">Help Desk App</div>
          <div className="project2-paragraph">
            short description of the project 2
          </div>
        </div>
      </div>
      <div className="project3">
        <div className="project3-images">
          <div className="image">image</div>
        </div>
        <div className="project3-info">
          <div className="project3-notes">tech stack</div>
          <div className="project3-title">Help Desk App</div>
          <div className="project3-paragraph">
            short description of the project 3
          </div>
        </div>
      </div>
      <div className="techstack">
        <div className="techstack-title">My techstack</div>
        <div className="techstack-icon">React JS image</div>
        <div className="techstack-name">React JS</div>
      </div>
      <div className="contact">
        <div className="contact-notes">open for interviews</div>
        <div className="contact-title">SET UP 15 MIN MEETING</div>
        <div className="contact-info"></div>
        <div className="button">schedule a call</div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <div className="copyright-image">copyright img</div>
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
