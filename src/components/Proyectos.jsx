import React from "react";
import Proyecto1 from "../images/Proyecto1.png"

function Proyectos() {
  return (
    <div>
      <div className="contenedor">
        <h1 className="texto-sombreado">Proyectos</h1>
        <div className="row">
          <div className="col col-12 col-lg-6 col-container">
            <div className="main-container">
              <div className="the-card">
                <div className="the-front">
                  <div className="front-content">
                    <h5>Página web Responsive</h5>
                    <img src={Proyecto1} className="img-gris"  alt="XD" />
                  </div>
                </div>
                <div className="the-back">
                  <div className="back-content">
                    <p>Descripción</p>
                    <button>
                      <a href="https://github.com/DeusExcalibur/1st-responsive" target="_blank">Ver GitHub</a>
                    </button>
                    <br />
                    <button>
                      <a href="https://deusexcalibur.github.io/1st-responsive/" target="_blank">Ver Página</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-sm-12 col-md-6 col-container">
            <div className="main-container">
              <div className="the-card">
                <div className="the-front">
                  <div className="front-content">
                    <h5>Página web Responsive</h5>
                    <img src={Proyecto1} alt="XD" />
                  </div>
                </div>
                <div className="the-back">
                  <div className="back-content">
                    <p>Descripción</p>
                    <button>
                      <a href="https://github.com/DeusExcalibur/1st-responsive" target="_blank">Ver GitHub</a>
                    </button>
                    <br />
                    <button>
                      <a href="https://deusexcalibur.github.io/1st-responsive/" target="_blank">Ver Página</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
