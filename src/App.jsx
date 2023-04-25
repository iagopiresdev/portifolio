import './App.css'
import Contato from './Contato';
import Habilidades from './Habilidades';
import Header from './Header'
import Projects from './Projects';
import Sobre from './Sobre'

function App() {
  return (
    <>
      <Header />
      <Sobre />
      <Habilidades />
      <Projects />
      <Contato />
      <Header />
      </>
    );
}

export default App
