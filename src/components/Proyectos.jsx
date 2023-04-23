import React from "react";
import ProyectoCard from "./ProyectosCard"

function Proyectos() {
  const variables = [
    {
      titulo: "Página web Responsive",
      imagen: "https://i.postimg.cc/LXFWB2rP/Proyecto1.png",
      descripcion: "Esta página fue mi 1ra practica de CSS Responsive Vanilla",
      linkGithub: "https://github.com/DeusExcalibur/1st-responsive",
      linkPagina: "https://deusexcalibur.github.io/1st-responsive/"
    },
    {
      titulo: "Dice Game",
      imagen: "https://i.postimg.cc/Jzgv0bxP/Proyecto2.png",
      descripcion: "1ra practica de DOM Manipulation con JS",
      linkGithub: "https://github.com/DeusExcalibur/DiceGame",
      linkPagina: "https://deusexcalibur.github.io/DiceGame/"
    },
    {
      titulo: "Simon Game",
      imagen: "https://i.postimg.cc/9f7S7rNV/Proyecto3.png",
      descripcion: "Juego de seguir una secuencia de colores",
      linkGithub: "https://github.com/DeusExcalibur/SimonGame",
      linkPagina: "https://deusexcalibur.github.io/SimonGame/"
    },
    {
      titulo: "Age Calculator",
      imagen: "https://i.postimg.cc/vZDCGPr4/Proyecto4.png",
      descripcion: "Página para calcular tu edad exacta",
      linkGithub: "https://github.com/DeusExcalibur/AgeCalculator",
      linkPagina: "https://deusexcalibur.github.io/AgeCalculator/"
    },
    {
      titulo: "Página 5",
      imagen: "Proyecto5",
      descripcion: "En progreso",
      linkGithub: "https://github.com/DeusExcalibur/",
      linkPagina: "#"
    },
    {
      titulo: "Página 6",
      imagen: "Proyecto6",
      descripcion: "En progreso",
      linkGithub: "https://github.com/DeusExcalibur",
      linkPagina: "#"
    }
  ] 

  const ocultar = ()=>{
    if(document.querySelector(".boton-carta").innerHTML == "Mostrar Mas"){
      document.querySelector(".carta").classList.toggle("ocultar-carta")
      document.querySelector(".boton-carta").innerHTML = "Mostrar Menos";
    }else{
      document.querySelector(".carta").classList.toggle("ocultar-carta")
      document.querySelector(".boton-carta").innerHTML = "Mostrar Mas";
    }
  }

  return (
    <div>
      <div className="contenedor">
        <h1 className="texto-sombreado">Proyectos</h1>

          <ProyectoCard 
          titulo1={variables[0].titulo} titulo2={variables[1].titulo} 
          imagen1={variables[0].imagen} imagen2={variables[1].imagen}
          descripcion1={variables[0].descripcion} descripcion2={variables[1].descripcion}
          linkGithub1={variables[0].linkGithub} linkGithub2={variables[1].linkGithub}
          linkPagina1={variables[0].linkPagina} linkPagina2={variables[1].linkPagina}
          />

          <ProyectoCard 
          titulo1={variables[2].titulo} titulo2={variables[3].titulo} 
          imagen1={variables[2].imagen} imagen2={variables[3].imagen} 
          descripcion1={variables[2].descripcion} descripcion2={variables[3].descripcion}
          linkGithub1={variables[2].linkGithub} linkGithub2={variables[3].linkGithub}
          linkPagina1={variables[2].linkPagina} linkPagina2={variables[3].linkPagina}
          />

          <div className="carta ocultar-carta">
            <ProyectoCard
            titulo1={variables[4].titulo} titulo2={variables[5].titulo} 
            imagen1={variables[4].imagen} imagen2={variables[5].imagen} 
            descripcion1={variables[4].descripcion} descripcion2={variables[5].descripcion}
            linkGithub1={variables[4].linkGithub} linkGithub2={variables[5].linkGithub}
            linkPagina1={variables[4].linkPagina} linkPagina2={variables[5].linkPagina}
            />
          </div>
          <button onClick={ocultar} className="boton-carta">Mostrar Mas</button>
      
        </div>
    </div>
  );
}

export default Proyectos;
