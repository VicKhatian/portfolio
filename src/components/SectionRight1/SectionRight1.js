import "./SectionRight1.css";

const SectionRight1 = ({ notes, title, details, img }) => {
  return (
    <div className="right-1img-info-section">
      <div className="left-1img-box">
        <img className="project-img" src={img} alt="" />
      </div>
      <div className="right-info-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SectionRight1;
