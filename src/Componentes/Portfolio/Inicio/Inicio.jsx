// Importa o componente responsável por fazer o efeito de digitação animada do seu nome.
import NomeAnimado from './NomeAnimado'; // Ajuste o caminho se necessário
// Importa a URL constante do WhatsApp, para que se você precisar mudar o número um dia, mude apenas no arquivo 'LinkZAP'.
import {whatsapp_URL} from './LinkZAP';

// Declaração do componente funcional 'Inicio'. Esta é a seção "Hero" da página, a primeira coisa que o usuário vê.
const Inicio = () => {
  return (
    // O fragmento vazio (<></>) agrupa múltiplos elementos JSX sem criar uma div desnecessária no HTML final.
    <>
      {/* --- INÍCIO DA SEÇÃO HERO (O PAI) --- */}
      {/* A tag <section> define uma grande área do site. O id="inicio" é fundamental para que links tipo href="#inicio" rolem a página até aqui.
          As classes Tailwind cuidam do layout (flexbox colunar, centralizado) e impedem que conteúdos vazem para fora (overflow-hidden). */}
      <section id="inicio" className="relative flex flex-col items-center justify-start w-full pt-27.5 pb-10 px-6 text-center overflow-hidden">
        
        {/* 1. A MALHA (FILHO ABSOLUTO) */}
        {/* Esta div vazia cria o fundo quadriculado (grid). 'absolute inset-0' faz ela preencher toda a seção.
            A classe 'animate-[waveGrid_...]' aplica uma animação contínua que mexe o fundo. */}
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 animate-[waveGrid_8s_linear_infinite]"></div>

        {/* 2. O BRILHO/AURA (FILHO ABSOLUTO) */}
        {/* Cria uma "mancha" de luz roxa/azulada esfumaçada no centro, usando 'blur-[100px]'. 
            'pointer-events-none' garante que o usuário consiga clicar através dela nos botões que estiverem por baixo. */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

        {/* 3. O CONTEÚDO (O "CARD" PRINCIPAL ESTILO VIDRO) */}
        {/* O 'relative z-10' garante que o texto fique NA FRENTE da malha de fundo. 
            O 'backdrop-blur-sm' junto com 'bg-[#161822]/80' cria aquele efeito de "vidro fosco" (glassmorphism). */}
        <div className="relative z-10 bg-[#161822]/80 backdrop-blur-sm w-[95%] sm:w-[90%] md:w-full max-w-3xl mx-auto px-6 pt-10 pb-12 sm:px-10 md:px-16 md:pt-16 md:pb-14 rounded-3xl md:rounded-[40px] border border-white/5 shadow-2xl shadow-indigo-500/10 flex flex-col items-center overflow-hidden">
          
          {/* O PULSO ELÉTRICO - Um círculo animado no fundo do card, sincronizado em 8s com a onda da malha */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 sm:w-300 sm:h-300 electric-pulse animate-[electricPulse_8s_ease-out_infinite] pointer-events-none z-0"></div>

          {/* Cabeçalho central que agrupa os textos descritivos e botões */}
          <header className="max-w-3xl flex flex-col items-center gap-4 relative z-10 w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight">
              Olá, eu sou
              {/* O componente que insere o nome com efeito de apagar e reescrever */}
              <NomeAnimado />
            </h1>
            {/* Subtítulo indicando a profissão e formação */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 font-medium">
              Bacharel em Ciência da computação
            </p>
            
            {/* Área com o parágrafo descritivo e as "pílulas" (Badges) de qualidade */}
            <div className="flex flex-col items-center mb-8 sm:mb-10 w-full">
              <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mb-8 leading-relaxed px-2 sm:px-0">
                Transformo ideias em soluções digitais de impacto. <br className="hidden sm:block" />
                Código limpo, entregas no prazo e resultados que fazem diferença.
              </p>

              {/* Pílulas de Status informativas (flex-wrap permite que elas quebrem linha no celular se não couberem) */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm">
                {/* Badge 1 - Destaque com bolinha verde animada (pulsante) simulando "Online/Disponível" */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-400 whitespace-nowrap">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Projetos sob demanda
                </div>
                {/* Badge 2 */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-400 whitespace-nowrap">
                  <span className="text-yellow-500">⚡</span>
                  Resposta em 24h
                </div>
                {/* Badge 3 */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-400 whitespace-nowrap">
                  <span className="text-purple-500">🎯</span>
                  100% de satisfação
                </div>
              </div>
            </div>

            {/* Área dos Botões de Chamada para Ação (Call-to-Action) */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4 sm:px-0 mb-3 sm:mb-5">
              {/* Botão Primário: Abre o link do WhatsApp em uma nova aba (_blank) com segurança (noopener) */}
              <a href={`${whatsapp_URL}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-105 transition-transform w-full sm:w-auto text-sm sm:text-base">
                Iniciar Projeto →
              </a>
              {/* Botão Secundário: Um "link âncora" que rola a página para baixo, direto para o elemento com id="servicos" */}
              <a href="#servicos" className="flex items-center justify-center border border-gray-700 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium transition w-full sm:w-auto text-sm sm:text-base">
                Ver Portfólio
              </a>
            </div>
          </header>

          {/* --- INDICADOR DE ROLAGEM (A SETINHA DE ROLAR PARA BAIXO) --- */}
          {/* Fica fixa no rodapé do card para mostrar aos usuários que tem mais conteúdo abaixo.
              A classe 'animate-[scrollDownBounce...]' faz ela quicar eternamente. */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 pointer-events-none z-10 animate-[scrollDownBounce_2s_ease-in-out_infinite]">
            {/* O desenho do ícone da seta feito via vetor (SVG) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-arrow-down"
            >
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>
      {/* --- FIM DA SEÇÃO HERO --- */}
    </>
  );
};

export default Inicio;