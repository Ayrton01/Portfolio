import { useState, useEffect } from 'react';

const mensagemWhatsApp = encodeURIComponent(
  "Olá Ayrton. Tenho uma ideia de projeto e gostaria de iniciar o seu desenvolvimento. Quais informações você precisa para uma análise inicial?"
);

const NomeAnimado = () => {
  const [text, setText] = useState('Ayrton'); 
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Ayrton';

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      if (text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 5000);
      } else {
        timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), 150);
      }
    } else {
      if (text === '') {
        setIsDeleting(false);
        timer = setTimeout(() => {}, 400);
      } else {
        timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), 100);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <span className="flex items-center justify-center mt-1 h-[1.2em]">
      <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
        {text}
      </span>
      {/* Cursor piscando na cor roxa combinando com o final do degradê */}
      <span className="w-0.75 sm:w-1.25 h-[0.9em] bg-purple-400 animate-[pulse_1s_infinite] ml-2 sm:ml-3 rounded-full opacity-80"></span>
    </span>
  );
};

const Inicio = () => {
  return (
    <>
      {/* --- INÍCIO DA SEÇÃO HERO (O PAI) --- */}
      <section id="inicio" className="relative flex flex-col items-center justify-start w-full pt-[110px] pb-[40px] px-6 text-center overflow-hidden">
        
        {/* 1. A MALHA (FILHO ABSOLUTO) */}
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 animate-[waveGrid_8s_linear_infinite]"></div>

        {/* 2. O BRILHO/AURA (FILHO ABSOLUTO) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

        {/* 3. O CONTEÚDO */}
        {/* O 'relative z-10' garante que o texto fique NA FRENTE da malha */}
        <div className="relative z-10 bg-[#161822]/80 backdrop-blur-sm w-[95%] sm:w-[90%] md:w-full max-w-3xl mx-auto px-6 pt-10 pb-12 sm:px-10 md:px-16 md:pt-16 md:pb-14 rounded-3xl md:rounded-[40px] border border-white/5 shadow-2xl shadow-indigo-500/10 flex flex-col items-center overflow-hidden">
          
          {/* O PULSO ELÉTRICO - Sincronizado em 8s com a malha */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 sm:w-300 sm:h-300 electric-pulse animate-[electricPulse_8s_ease-out_infinite] pointer-events-none z-0"></div>

          <header className="max-w-3xl flex flex-col items-center gap-4 relative z-10 w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight">
              Olá, eu sou
              <NomeAnimado />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 font-medium">
              Bacharel em Ciência da computação
            </p>
            
            {/* Descrição e Badges */}
            <div className="flex flex-col items-center mb-8 sm:mb-10 w-full">
              <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mb-8 leading-relaxed px-2 sm:px-0">
                Transformo ideias em soluções digitais de impacto. <br className="hidden sm:block" />
                Código limpo, entregas no prazo e resultados que fazem diferença.
              </p>

              {/* Pílulas de Status (Badges) */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-400 whitespace-nowrap">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Projetos sob demanda
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-400 whitespace-nowrap">
                  <span className="text-yellow-500">⚡</span>
                  Resposta em 24h
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gray-400 whitespace-nowrap">
                  <span className="text-purple-500">🎯</span>
                  100% de satisfação
                </div>
              </div>
            </div>

            {/* Botões - Ajustei o gap para telas menores */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4 sm:px-0 mb-3 sm:mb-5">
              <a href={`https://wa.me/5592984894507?text=${mensagemWhatsApp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-105 transition-transform w-full sm:w-auto text-sm sm:text-base">
                Iniciar Projeto →
              </a>
              <a href="#servicos" className="flex items-center justify-center border border-gray-700 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full font-medium transition w-full sm:w-auto text-sm sm:text-base">
                Ver Portfólio
              </a>
            </div>
          </header>

          {/* --- A SETINHA DE ROLE PARA BAIXO QUE VOCÊ QUERIA --- */}
          {/* Posicionada absolutamente no fundo da caixa */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 pointer-events-none z-10 animate-[scrollDownBounce_2s_ease-in-out_infinite]">
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