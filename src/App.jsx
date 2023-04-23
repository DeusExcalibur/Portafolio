import './App.scss'
import IntroNav from './components/IntroNav'
import SobreMi from './components/SobreMi'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'


function App() {
  return (
    <div className="App">
      <a name="Inicio"></a>
      <IntroNav></IntroNav>
      <a name="SobreMi"></a>
      <SobreMi></SobreMi>
      <a name="Habilidades"></a>
      <Habilidades></Habilidades>
      <a name="Proyectos"></a>
      <Proyectos></Proyectos>
      <a name="Contacto"></a>
      <Contacto></Contacto>
    </div>
  )
}

export default App
