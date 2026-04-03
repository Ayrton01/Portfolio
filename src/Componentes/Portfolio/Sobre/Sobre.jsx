// --- IMPORTS ---
// Importa o componente visual que ficará ao lado do texto.
// Separar imagens ou animações complexas (como um cubo 3D) em seus próprios componentes
// mantém este arquivo focado apenas na estrutura de layout e texto.
import CuboIMG from './CuboIMG';

// --- COMPONENTE SOBRE ---
// Este componente renderiza a seção "Sobre mim" do portfólio.
const Sobre = () => {
  return (
      // --- CONTAINER PRINCIPAL DA SEÇÃO ---
      // 'id="sobre"': Fundamental para que a navegação da NavBar (<a href="#sobre">) funcione e role até aqui.
      // 'py-16 md:py-24': Preenchimento vertical (padding-y) que aumenta em telas maiores (md) para dar mais "respiro" ao design.
      // 'border-t border-white/5': Cria uma linha sutil no topo para separar visualmente da seção anterior ("Inicio").
      <section id="sobre" className="relative py-16 md:py-24 border-t border-white/5 z-10">
        
        {/* Container interno para centralizar o conteúdo e limitar a largura máxima (max-w-6xl). */}
        <div className="max-w-6xl mx-auto px-6">
          
          {/* --- SISTEMA DE GRID RESPONSIVO --- */}
          {/* 'grid': Ativa o CSS Grid.
              'grid-cols-1': Em celulares, os elementos filhos (imagem e texto) ficarão empilhados em 1 única coluna.
              'md:grid-cols-2': Em telas médias ou maiores (tablets horizontais/PCs), o layout se divide em 2 colunas lado a lado.
              'items-center': Alinha verticalmente os itens no centro da linha do grid. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* --- COLUNA DA ESQUERDA: IMAGEM/CUBO --- */}
            {/* 'order-1': No celular (grid-cols-1), este elemento aparecerá em primeiro lugar (em cima do texto). */}
            <div className="order-1 md:order-1 flex justify-center">
              <CuboIMG />
            </div>

            {/* --- COLUNA DA DIREITA: TEXTO --- */}
            {/* 'order-2': Aparece em segundo lugar (abaixo da imagem) no celular.
                'text-center md:text-left': Texto centralizado no celular, mas alinhado à esquerda em telas maiores. */}
            <div className="flex flex-col order-2 md:order-2 text-center md:text-left">
              
              {/* Rótulo da seção ("badge" de texto) */}
              <span className="text-indigo-500 font-semibold tracking-widest text-xs md:text-sm mb-2 uppercase">
                Sobre mim
              </span>
              
              {/* Título Principal */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Engenharia com <span className="text-blue-400"> propósito </span>
              </h2>
              
              {/* Parágrafos de Descrição */}
              <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
                <p className="text-justify">
                  <span className="text-blue-400 font-bold">O propósito </span> do meu trabalho é converter conceitos complexos em arquiteturas digitais sólidas. 
                  Acredito que a excelência técnica vai além do código; é sobre construir sistemas resilientes que sustentem o crescimento de negócios reais.
                </p>
                <p className="text-justify">
                  Minha abordagem combina <span className="text-white font-medium italic">código limpo,</span>
                  <span className="text-white font-medium italic ml-1">arquitetura escalável </span>e    
                  <span className="text-white font-medium italic ml-1"> comunicação direta</span>,  
                  garantindo que a tecnologia seja um motor de eficiência para a evolução contínua do projeto.
                </p>
              </div>

              {/* --- BADGES (PÍLULAS DE DESTAQUE) --- */}
              {/* Container flexível: Centraliza no mobile ('justify-center') e alinha à esquerda no PC ('md:justify-start').
                  'flex-wrap' permite que as pílulas quebrem para a próxima linha se a tela for muito estreita. */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-10">
                {/* Badge 1 */}
                <div className="flex items-center gap-2 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm text-indigo-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Código escalável
                </div>
                {/* Badge 2 */}
                <div className="flex items-center gap-2 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm text-indigo-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Entregas no prazo
                </div>
                {/* Badge 3 */}
                <div className="flex items-center gap-2 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm text-indigo-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Suporte contínuo
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

// Exporta o componente para ser injetado no App principal.
export default Sobre;