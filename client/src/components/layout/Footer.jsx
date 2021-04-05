import "./Footer.css";
import linkedin from "../../images/linkedinlogo.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="amar">
        <a
          href="https://www.linkedin.com/in/amarp86/"
          target="_blank"
          rel="noreferrer"
        >
          Amar Patel
          <img className="linkedin-image" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
