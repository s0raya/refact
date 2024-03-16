import Lodearriba from './top.jsx'
import Pie from './bottom.jsx'
import './App.css'
import Calculadora from './calculadora.jsx'
import Empleados from './assets/empleados.jsx'

function App() {
  return (
    <>
    <Lodearriba />
    <section className="envoltura">
      <Empleados />
    </section>
      <section className='calculadora'>
        <Calculadora />
      </section>
    <Pie />
    </>
  )
}

export default App
