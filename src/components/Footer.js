import guitar from "../images/footer.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import github from "../images/github.png";

const Footer = () => {
  return (
    <div classNameName="footer">
      <img classNameName="guitar-footer" src={guitar} />
      <small classNameName="copy">&copy; 2021 BeatrizMendoza</small>
      <div classNameName="footer-links">
        <img classNameName="links" src={linkedin} />
        <img classNameName="links" src={twitter} />
        <img classNameName="links" src={youtube} />
        <img classNameName="links" src={github} />
      </div>
    </div>
  );
};
export default Footer;
