import './App.css'
import Apresentacao from './apresentacao'
import Cards from './cards/cards'
import Contato from './contato'
import Footer from './footer'
import Forms from './forms/formulario'
import Habilidades from './habilidades'
import Topo from './topo'



function App() {

  return (
    <>
      <Topo/>
      <Apresentacao/>
      <Habilidades/>
        <Cards/>
        <Contato/>
        <Forms/>
        <Footer/>
    </>
  )
}

export default App
