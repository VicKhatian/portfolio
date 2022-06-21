import "./ProjectRight.css";
import imgFront from "../../images/p2-img-front.png";
import imgBack from "../../images/p2-img-back.png";

const ProjectRight = () => {
  return (
    <div className="project-right-section">
      <div className="left-info-box">
        <h3>Javascript React JS</h3>
        <h2>Help Desk App</h2>
        <p>
          The app let users to check the weather on the chosen location, for 8
          days ahead with ability to expand a selected date for the details.
        </p>
      </div>
      <div className="right-img-box">
        <img className="back" src={imgBack} alt="" />
        <img className="front" src={imgFront} alt="" />
      </div>
    </div>
  );
};

export default ProjectRight;
