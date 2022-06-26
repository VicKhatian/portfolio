import "./SectionRight.css";

const SectionRight = ({ notes, title, details, imgBack, imgFront }) => {
  return (
    <div className="right-info-section">
      <div className="left-img-box">
        <img className="back" src={imgBack} alt="" />
        <img className="front" src={imgFront} alt="" />
      </div>
      <div className="right-info-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SectionRight;
