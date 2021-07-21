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
    <section class="section3" id="skills">
      <h3 class="section3-title">Herramientas</h3>
      <div class="section3-skills">
        <img class="skills" src={html} />
        <img class="skills" src={css} />
        <img class="skills" src={gulp} />
        <img class="skills" src={git} />
        <img class="skills" src={react} />
        <img class="skills" src={js} />
        <img class="skills" src={nodejs} />
        <img class="skills" src={sass} />
        <img class="skills" src={vscode} />
        <img class="skills" src={slack} />
        <img class="skills" src={illustrator} />
        <img class="skills" src={photoshop} />
      </div>
    </section>
  );
};
export default Skills;
