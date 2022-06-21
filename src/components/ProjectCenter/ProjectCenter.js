import "./ProjectCenter.css";
import img from "../../images/p3-image.png";

const ProjectCenter = () => {
  return (
    <div className="project-center-section">
      <div className="left-img-center-box">
        <img className="project-img" src={img} alt="" />
      </div>
      <div className="right-info-box">
        <h3>Javascript React JS</h3>
        <h2>English dictionary</h2>
        <p>
          The app let users to check the weather on the chosen location, for 8
          days ahead with ability to expand a selected date for the details.
        </p>
      </div>
    </div>
  );
};

export default ProjectCenter;
