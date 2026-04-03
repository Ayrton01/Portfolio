// --- IMPORTS ---
// A seguir, importamos todos os componentes que formam as diferentes seções da nossa página de portfólio.
// Cada importação traz um "pedaço" da interface do usuário que será montado no componente principal 'App'.

// Importa o componente da barra de navegação, que geralmente fica no topo da página.
import Navbar from './Componentes/Portfolio/NavBar/NavBar';
// Importa a seção de "Início", a primeira coisa que o usuário vê (geralmente com um título principal).
import Inicio from './Componentes/Portfolio/Inicio/Inicio';
// Importa a seção "Sobre", que contém informações sobre a pessoa ou empresa.
import Sobre from './Componentes/Portfolio/Sobre/Sobre';
// Importa a seção de "Serviços", listando o que é oferecido.
import Servicos from './Componentes/Portfolio/Serviços/Servico';
// Importa uma seção complementar aos serviços, talvez com mais detalhes ou opções.
import MaisSolucoes from './Componentes/Portfolio/Serviços/MaisSolucoes';
// Importa a seção que mostra as "Tecnologias" utilizadas.
import Tecnologia from './Componentes/Portfolio/Tecnologia/Tecnologias';
// Importa a seção de "Contato", com formulário ou informações para entrar em contato.
import Contato from './Componentes/Portfolio/Contato/Contato';
// Importa a folha de estilos CSS principal para o portfólio.
// Esses estilos se aplicam a todos os componentes renderizados aqui.
import './Portfolio.css'

// --- COMPONENTE PRINCIPAL ---
// 'App' é o componente raiz da nossa aplicação React. Ele funciona como um contêiner
// que organiza e renderiza todos os outros componentes para formar a página completa.
function Portfolio() {
  // A função retorna a estrutura JSX (uma sintaxe parecida com HTML) que será renderizada no navegador.
  return (
    // Esta 'div' é o elemento principal que envolve toda a aplicação.
    // As classes a seguir são do framework Tailwind CSS e definem o estilo base:
    // - "min-h-screen": Garante que a div tenha no mínimo a altura total da tela.
    // - "text-white": Define a cor do texto padrão como branco para todos os elementos filhos.
    // - "font-sans": Define a família da fonte padrão como sans-serif.
    // - "overflow-x-hidden": Previne a rolagem horizontal, evitando quebras de layout em telas menores.
    <div className="min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* Renderiza o componente da barra de navegação. 
          Ele aparecerá no topo da página, fora do conteúdo principal. */}
      <Navbar />

      {/* A tag <main> é um elemento semântico do HTML5 que define o conteúdo principal do documento. 
          É aqui que todas as seções do portfólio serão colocadas. */}
      <main>
        {/* Cada linha abaixo renderiza um componente de seção, na ordem em que aparecerão na página. */}
        
        {/* Seção de boas-vindas/inicial. */}
        <Inicio />
        
        {/* Seção com informações "Sobre mim". */}
        <Sobre />
        
        {/* Seção que descreve os serviços oferecidos. */}
        <Servicos />
        
        {/* Seção adicional sobre soluções ou serviços. */}
        <MaisSolucoes />
        
        {/* Seção dedicada a mostrar as tecnologias e ferramentas dominadas. */}
        <Tecnologia />
        
        {/* Seção final para contato. */}
        <Contato />
      </main>
    </div>
  );
}

// --- EXPORTAÇÃO ---
// 'export default Portfolio' torna o componente 'Portfolio' disponível para ser importado e utilizado
// em outros arquivos. No nosso caso, ele é importado pelo 'src/main.jsx',
// que é o ponto de entrada da aplicação e o responsável por renderizar o 'Portfolio' na página HTML.
export default Portfolio;