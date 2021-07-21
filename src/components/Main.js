import song from "../audio/audio.mp3";
import guitar from "../images/descarga.png";
import profile from "../images/profile.png";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="main">
      <section class="section1" id="home">
        <h1 class="section1-title">Beatriz Mendoza</h1>
        <p class="section1-subtitle">Front-End Developer</p>
        <audio type="audio/mp3" controls autoPlay class="song">
          <source src={song} />
        </audio>
      </section>

      <section class="section2" id="aboutme">
        <img class="guitar1" src={guitar} alt="guitar" />
        <div class="aboutme">
          <div class="description">
            <p>
              Especializada en Marketing Social y con un MBA, elegí mi formación
              profesional porque creo que la empresa puede ser algo más que un
              balance de beneficios y pérdidas.
            </p>{" "}
            <br />
            <p>
              Mi experiencia trabajando en distintas empresas me ha convertido
              en una persona polivalente, con gran capacidad de adaptación y
              facilidad de aprendizaje.
            </p>{" "}
            <br />
            <p>
              Soy una persona empática, amante del orden y de la{" "}
              <strong>organización</strong> , y del{" "}
              <strong>diseño gráfico. </strong>
            </p>{" "}
            <br />
            <p>
              {" "}
              Descubrí con sorpresa una nueva pasión que combina mis capacidades
              analíticas y creativas: la
              <strong>programación</strong>, y desde entonces no hay quién me
              separe del ordenador.
            </p>
          </div>
          <img class="profile" src={profile} alt="profile" />
        </div>
      </section>
      <Skills />
    </div>
  );
};
export default Main;
