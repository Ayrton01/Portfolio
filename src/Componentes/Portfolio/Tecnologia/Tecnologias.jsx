// --- IMPORTS ---
// Importa o componente interativo 'Constelacao' que contém as partículas e as bolinhas de tecnologia.
import Constelacao from './Constelacao';

// --- COMPONENTE SEÇÃO DE TECNOLOGIAS ---
// Este componente estrutura a área da página dedicada a mostrar as ferramentas e habilidades técnicas.
const Tecnologias = () => {
  return (
    // --- CONTAINER PRINCIPAL DA SEÇÃO ---
    // 'id="tecnologias"': Essencial para a navegação por âncoras na NavBar.
    // 'relative overflow-hidden z-10': Cria um contexto de empilhamento onde esta seção não vaza para as outras e permite posicionamento absoluto interno.
    <section id="tecnologias" className="pt-24 pb-0 relative overflow-hidden z-10">
      
      {/* --- 1. CABEÇALHO DA SEÇÃO (TÍTULO E DESCRIÇÃO) --- */}
      {/* 'z-20': Coloca o texto em uma camada ACIMA do fundo interativo, garantindo que seja sempre legível. */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 text-center mb-0 md:mb-0">
        {/* "Badge" (rótulo) pequeno acima do título principal. */}
        <span className="text-indigo-500 font-semibold tracking-widest text-xs sm:text-sm uppercase block mb-2 sm:mb-3">
          Tecnologias
        </span>
        
        {/* Título Principal com tamanhos responsivos (cresce junto com a tela). */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Stack <span className="text-indigo-400 hover:text-blue-400 transition-colors">Moderno</span>
        </h2>
        
        {/* Subtítulo/Descrição descritiva. */}
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0">
          Ecossistema tecnológico integrado para soluções robustas e escaláveis.
        </p>
      </div>

      {/* --- 2. ÁREA INTERATIVA DA CONSTELAÇÃO --- */}
      {/* Este container restringe o espaço do canvas (as partículas).
          - As classes 'h-112.5', 'sm:h-125', etc., forçam uma altura mínima para que o canvas tenha espaço para respirar.
          - As classes com margem negativa ('-mt-8', '-mt-10') "puxam" o canvas interativo ligeiramente para cima, sobrepondo e mesclando com o espaço vazio abaixo do texto. */}
      <div className="relative w-full h-112.5 sm:h-125 md:h-162.5 z-10 -mt-8 sm:-mt-12 md:-mt-10">
        <Constelacao />
      </div>

      {/* --- 3. LEGENDA DA STACK DE TECNOLOGIAS --- */}
      {/* Estas são as pequenas pílulas no rodapé que ensinam ao usuário o que cada cor representa na constelação. */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 md:mt-8 relative z-20">
        {/* Lista mapeada diretamente no JSX: Como os itens são poucos e fixos, podemos declarar o Array diretamente aqui e usar o .map(). */}
        {[
          { label: "Frontend", cor: "bg-blue-400" },
          { label: "Backend", cor: "bg-indigo-400" },
          { label: "Database", cor: "bg-purple-400" },
          { label: "DevOps", cor: "bg-green-400" },
          { label: "Cloud", cor: "bg-orange-400" },
        ].map((item) => (
          // Para cada item, renderiza uma pílula (badge) de legenda.
          <div 
            key={item.label} // 'key' é essencial para otimização da lista no React.
            className="flex items-center gap-1.5 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-[#0a0b10]/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
          >
            {/* A bolinha de cor. Usa Template Literals (`${item.cor}`) para injetar a classe de cor do Tailwind correta. */}
            <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${item.cor}`}></div>
            {/* O texto/nome da categoria. */}
            <span className="text-gray-300 text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-wider uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

// Exporta o componente completo para ser usado na aplicação ('Portfolio.jsx').
export default Tecnologias;