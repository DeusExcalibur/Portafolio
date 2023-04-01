import React from "react";
import Carousel from "react-bootstrap/Carousel";
import htmllogo from "../images/html.png"
import csslogo from "../images/css-3.png"
import jslogo from "../images/java-script.png"
import reactlogo from "../images/react.png"
import HabilidadesLateral from "./HabilidadesLateral";

function Habilidades() {
  return (
    <div className="Habilidades">
      <div className="Habilidades-contenedor">
        <h1 className="texto-sombreado">Habilidades</h1>
        <p>Si quieres saber en especifico que otras habilidades/herramientas conozco de ese tema dale a ver mas</p>
        <Carousel>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid" src={htmllogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>HTML</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid" src={csslogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>CSS</h3>
              <div>
                <HabilidadesLateral></HabilidadesLateral>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid" src={jslogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>JavaScript</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid" src={reactlogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>React</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Habilidades;
