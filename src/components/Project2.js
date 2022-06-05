import "./Project2.css";
import imgFront from "../images/p2-img-front.png";
import imgBack from "../images/p2-img-back.png";

const Project2 = () => {
  return (
    <div className="project2">
      <div className="project2-images">
        <div className="p2-image-back">
          <img src={imgBack} alt="" />
        </div>
        <div className="p2-image-front">
          <img src={imgFront} alt="" />
        </div>
      </div>
      <div className="project2-info">
        <div className="project2-notes">React, Node, REST APIs</div>
        <div className="project2-title">Help Desk</div>
        <div className="project2-paragraph">
          Website for the students to ask for help during workshops, allowing to
          receive support from coaches or other students, track and analise
          historical data for both those who asked and offered help.
        </div>
      </div>
    </div>
  );
};

export default Project2;
