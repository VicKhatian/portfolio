import "./SectionLeft.css";

const SectionLeft = ({ notes, title, details, imgBack, imgFront }) => {
  return (
    <div className="project-right-section">
      <div className="left-info-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
      <div className="right-img-box">
        <img className="back" src={imgBack} alt="" />
        <img className="front" src={imgFront} alt="" />
      </div>
    </div>
  );
};

export default SectionLeft;
