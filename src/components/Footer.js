import guitar from "../images/footer.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import github from "../images/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="guitar-footer" src={guitar} />
      <small className="copy">&copy; 2021 BeatrizMendoza</small>
      <div className="footer-links">
        <img className="links" src={linkedin} />
        <img className="links" src={twitter} />
        <img className="links" src={youtube} />
        <img className="links" src={github} />
      </div>
    </div>
  );
};
export default Footer;
