import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contacto() {

  return (
    <div>
      <div className='contactos'>
        <footer className='contenedor-4'> 
          <h2>Contacto</h2> 
          <div className='flex-contactos'>
            <div className='flex-icon'>
              <a href="https://github.com/DeusExcalibur" target="blank">GitHub</a>
              <FontAwesomeIcon icon={faGithubSquare} className='icon'/>
            </div>
            <div className='flex-icon'>
              <a href="https://www.linkedin.com/in/david-segura-vesga/" target="blank">LinkedIn</a>
              <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            </div>
            <div className='flex-icon'>
              <a href="mailto:dseguravesga@gmail.com" target="blank">Correo</a>
              <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contacto
