import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>Built and designed by Victoria Khatian © 2022</p>
        <p className="footer-right">
          <a
            className="footer-a"
            href="https://www.linkedin.com/in/victoria-khatian/"
            target="blank"
          >
            LinkedIn
          </a>
          <a
            className="footer-a"
            href="https://github.com/VicKhatian"
            target="blank"
          >
            GitHub
          </a>
          <a className="footer-a" href="/#" target="blank">
            Contact
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
