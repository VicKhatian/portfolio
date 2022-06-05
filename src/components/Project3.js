import "./Project3.css";
import img from "../images/p3-image.png";

const Project3 = () => {
  return (
    <div className="project3">
      <div className="project3-images">
        <div className="p3-image">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="project3-info">
        <div className="project3-notes">Vanilla Javascript, DOM</div>
        <div className="project3-title">English dictionary</div>
        <div className="project3-paragraph">
          Simple yet elegant dictionary, with clean design and easy navigation.
        </div>
      </div>
    </div>
  );
};

export default Project3;
