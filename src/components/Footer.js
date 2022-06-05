import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <div className="year-curr">2022</div>
          <div className="copyright-info">
            Built and designed by Victoria Khatian
          </div>
        </div>
        <div className="footer-right">
          <div className="linkedin">LinkedIn</div>
          <div className="github">GitHub</div>
          <div className="footer-contact">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
