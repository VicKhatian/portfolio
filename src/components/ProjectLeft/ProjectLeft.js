import "./ProjectLeft.css";
import imgFront from "../../images/p1-img-front.png";
import imgBack from "../../images/p1-img-back.png";

const ProjectLeft = () => {
  return (
    <div className="project-left-section">
      <div className="left-img-box">
        <img className="back" src={imgBack} alt="" />
        <img className="front" src={imgFront} alt="" />
      </div>
      <div className="right-info-box">
        <h3>Javascript React JS</h3>
        <h2>Weather App</h2>
        <p>
          The app let users to check the weather on the chosen location, for 8
          days ahead with ability to expand a selected date for the details.
        </p>
      </div>
    </div>
  );
};

export default ProjectLeft;
