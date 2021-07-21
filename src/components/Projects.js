import ecode from "../images/ecode.png";
import rickandmorty from "../images/rickandmorty.png";
import error404 from "../images/404.png";
import adivinaelnumero from "../images/adivinaelnumero.png";
import elalmadelrock from "../images/elalmadelrock.png";

const Projects = () => {
  return (
    <section className="section4" id="proyects">
      <h3 className="section4-text">Proyectos</h3>
      <div className="section4-projects">
        <img className="project" src={ecode} alt="ecode" />
        <img className="project" src={rickandmorty} alt="rickandmorty" />
        <img className="project" src={error404} alt="404" />
        <img className="project" src={adivinaelnumero} alt="adivinaelnumero" />
        <img className="project" src={elalmadelrock} alt="elalmadelrock" />
      </div>
    </section>
  );
};
export default Projects;
