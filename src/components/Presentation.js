import React, { Component, Fragment } from "react";
import gif from "../images/gif.gif";
// import guitar from "../images/descarga.png";

class Presentation extends Component {
  render() {
    return (
      <Fragment>
        <div className="section2" id="presentation">
          {/* <img className="guitar1" src={guitar} alt="guitar" /> */}
          <div className="aboutme">
            <div className="description">
              <p>
                Especializada en Marketing Social y con un MBA, elegí mi
                formación profesional porque creo que la empresa puede ser algo
                más que un balance de beneficios y pérdidas.
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
                Descubrí con sorpresa una nueva pasión que combina mis
                capacidades analíticas y creativas: la
                <strong>programación</strong>, y desde entonces no hay quién me
                separe del ordenador.
              </p>
            </div>
            <img className="profile" src={gif} alt="profile" />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Presentation;
