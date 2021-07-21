import html from "../images/html.png";
import css from "../images/css.png";
import gulp from "../images/gulp.png";
import git from "../images/git.png";
import react from "../images/react.png";
import js from "../images/js.png";
import nodejs from "../images/nodejs.png";
import sass from "../images/sass.png";
import vscode from "../images/vscode.png";
import slack from "../images/slack.png";
import illustrator from "../images/illustrator.png";
import photoshop from "../images/photoshop.png";

const Skills = () => {
  return (
    <section className="section3" id="skills">
      <h3 className="section3-title">Herramientas</h3>
      <div className="section3-skills">
        <img className="skills" src={html} />
        <img className="skills" src={css} />
        <img className="skills" src={gulp} />
        <img className="skills" src={git} />
        <img className="skills" src={react} />
        <img className="skills" src={js} />
        <img className="skills" src={nodejs} />
        <img className="skills" src={sass} />
        <img className="skills" src={vscode} />
        <img className="skills" src={slack} />
        <img className="skills" src={illustrator} />
        <img className="skills" src={photoshop} />
      </div>
    </section>
  );
};
export default Skills;
