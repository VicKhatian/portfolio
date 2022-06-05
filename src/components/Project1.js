import "./Project1.css";
import imgFront from "../images/p1-img-front.png";
import imgBack from "../images/p1-img-back.png";

const Project1 = () => {
  return (
    <div className="project1">
      <div className="project1-images">
        <div className="p1-image-back">
          <img src={imgBack} alt="" />
        </div>
        <div className="p1-image-front">
          <img src={imgFront} alt="" />
        </div>
      </div>
      <div className="project1-info">
        <div className="project1-notes">Javascript React JS</div>
        <div className="project1-title">Weather App</div>
        <div className="project1-paragraph">
          The app let users to check the weather on the chosen location, for 8
          days ahead with ability to expand a selected date for the details.
        </div>
      </div>
    </div>
  );
};

export default Project1;
