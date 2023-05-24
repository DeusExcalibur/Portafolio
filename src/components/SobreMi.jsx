import React from 'react'
import Perfil from '../images/yo.jpg'

function SobreMi() {
  return (
    <div className='sobre-mi'>
      <img className='img-gris' src={Perfil} alt="XD"/>
      <h1>Soy un Estudiante Independiente de Desarrollo Front End</h1>
      <p>Soy alguien con muchos hobbies y pasatiempos</p>
    </div>
  )
}

export default SobreMi
