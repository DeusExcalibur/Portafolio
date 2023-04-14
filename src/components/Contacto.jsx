import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contacto() {

  return (
    <div>
      <div className='contactos'>
        <footer className='contenedor-4'> 
          <h2>Contacto</h2> 
          <div className='flex-contactos'>
            <div className='flex-icon'>
              <a href="https://github.com/DeusExcalibur" target="blank">GitHub</a>
              <FontAwesomeIcon icon="fa-brands fa-square-github " className='icon'/>
            </div>
            <div className='flex-icon'>
              <a href="https://www.linkedin.com/in/david-segura-vesga/" target="blank">LinkedIn</a>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" className='icon'/>
            </div>
            <div className='flex-icon'>
              <a href="mailto:dseguravesga@gmail.com" target="blank">Correo</a>
              <FontAwesomeIcon icon="fa-solid fa-envelope" className='icon'/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contacto
