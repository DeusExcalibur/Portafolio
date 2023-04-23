import React from "react";

function ProyectosCard(props) {
  
  return (
    <div>
      <div className="row">
          
          <div className="col col-12 col-lg-6 col-container">
            <div className="main-container">
              <div className="the-card">
                <div className="the-front">
                  <div className="front-content">
                    <h5>{props.titulo1}</h5>
                    <img src={props.imagen1} alt="XD" />
                  </div>
                </div>
                <div className="the-back">
                  <div className="back-content">
                    <p>{props.descripcion1}</p>
                    <button>
                      <a href={props.linkGithub1} target="_blank">Ver GitHub</a>
                    </button>
                    <br />
                    <button>
                      <a href={props.linkPagina1} target="_blank">Ver Página</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-12 col-lg-6 col-container">
            <div className="main-container">
              <div className="the-card">
                <div className="the-front">
                  <div className="front-content">
                    <h5>{props.titulo2}</h5>
                    <img src={props.imagen2} alt="XD" />
                  </div>
                </div>
                <div className="the-back">
                  <div className="back-content">
                    <p>{props.descripcion2}</p>
                    <button>
                      <a href={props.linkGithub2} target="_blank">Ver GitHub</a>
                    </button>
                    <br />
                    <button>
                      <a href={props.linkPagina2} target="_blank">Ver Página</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
    </div>
  );
}

export default ProyectosCard;
