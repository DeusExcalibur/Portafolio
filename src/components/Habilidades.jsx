import React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import htmllogo from "../images/html.png"
import csslogo from "../images/css-3.png"
import jslogo from "../images/java-script.png"
import reactlogo from "../images/react.png"

function Habilidades() {

  const [contador, setContador] = useState(0);

  function mostrarTexto() {
    let numberOfButtons = document.querySelectorAll('.read-more-btn').length;
    
    for(let i=0;i<numberOfButtons;i++){
      document.querySelectorAll('.card-read-more')[i].classList.toggle("card-read-more-open");
    }

    if(contador == 0){
      for(let i=0;i<numberOfButtons;i++){
        document.querySelectorAll('.read-more-btn')[i].innerHTML = "Mostrar Menos";
      }
      setContador(contador+1);
    }else{
      for(let i=0;i<numberOfButtons;i++){
        document.querySelectorAll('.read-more-btn')[i].innerHTML = "Mostrar Mas";
      }
      setContador(0);
    }
}

  return (
    <div className="Habilidades">
      <div className="Habilidades-contenedor">
        <h1 className="texto-sombreado">Habilidades</h1>
        <Carousel>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid img-gris" src={htmllogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>HTML</h3>
              <div>
                <button className="read-more-btn" onClick={mostrarTexto}>Mostrar Mas</button>
                <div className="card-read-more">
                  Tengo un manejo muy bueno de HTML
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid img-gris" src={csslogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>CSS</h3>
              <div>
                <button className="read-more-btn" onClick={mostrarTexto}>Mostrar Mas</button>
                <div className="card-read-more">
                  CSS, CSS-SASS, BOOTSTRAP, REACT-BOOTSTRAP
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid img-gris" src={jslogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>JavaScript</h3>
              <div>
                <button className="read-more-btn" onClick={mostrarTexto}>Mostrar Mas</button>
                <div className="card-read-more">
                  JQUERY, JSON, APIS, DOM MANIPULATION
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img className="img-fluid img-gris" src={reactlogo} alt="XD"/>
            </div>
            <Carousel.Caption>
              <h3>React</h3>
              <div>
                <button className="read-more-btn" onClick={mostrarTexto}>Mostrar Mas</button>
                <div className="card-read-more">
                  Conceptos Basicos de React, UseState, Componentes, etc
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Habilidades;
