import Navbar from './Componentes/Portfolio/NavBar/NavBar';
import Inicio from './Componentes/Portfolio/Inicio/Inicio';
import Sobre from './Componentes/Portfolio/Sobre/Sobre';
import Servicos from './Componentes/Portfolio/Serviços/Servico';
import MaisSolucoes from './Componentes/Portfolio/Serviços/MaisSolucoes';
import Tecnologia from './Componentes/Portfolio/Tecnologia/Tecnologias';
import Contato from './Componentes/Portfolio/Contato/Contato';
import './Portfolio.css'

function App() {
  // overflow-x-hidden previne de forma global as quebras de largura em telas menores
  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Inicio />
        <Sobre />
        <Servicos />
        <MaisSolucoes />
        <Tecnologia />
        <Contato />
      </main>
    </div>
  );
}

export default App;