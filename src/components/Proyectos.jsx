import React from "react";

function Proyectos() {
  return (
    <div>
      <div className="proyectos">
        <div className="contenedor-3">
          <h2>Mis proyectos</h2>
          <div className="grid-proyectos">
            <div className="div-grid">
              1<p>Nombre Proyecto</p>
              <div className="div-proyectos">
                Contenido
                <button>Ver en Git</button>
              </div>
            </div>
            <div className="div-grid">
              2<p>Nombre Proyecto</p>
              <div className="div-proyectos">
                Contenido
                <button>Ver en Git</button>
              </div>
            </div>
            <div className="div-grid">
              3<p>Nombre Proyecto</p>
              <div className="div-proyectos">
                Contenido
                <button>Ver en Git</button>
              </div>
            </div>
            <div className="div-grid">
              4<p>Nombre Proyecto</p>
              <div className="div-proyectos">
                Contenido
                <button>Ver en Git</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>Mostrar Mas</button>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
