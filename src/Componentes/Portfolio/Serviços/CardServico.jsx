const CardServico = ({ icon, iconeCentral, cor, problema, solucao, descricao, tags = [] }) => {
  return (
    <div 
      className="relative flex flex-col group w-full" 
      style={{ '--service-color': cor }} // Passa a cor para o CSS
    >
      
      {/* 1. LINHA DO TEMPO SUPERIOR */}
      <div className="flex items-center w-full mb-6 px-2 md:px-6">
        <div 
          className="w-4 h-4 shrink-0 rounded-full border-2 bg-[#0a0b10] z-10 animate-fill-circle" 
          style={{ borderColor: cor, boxShadow: `0 0 10px ${cor}44` }}
        ></div>
        
        <div className="h-px flex-1 bg-white/5 ml-4 relative">
          {/* A energia correndo pela linha (horizontal) */}
          <div className="absolute top-0 left-0 h-full animate-fill-h-line" style={{ backgroundColor: cor }}></div>
        </div>
      </div>

      {/* 2. O CARD PRINCIPAL */}
      {/* Adicionado min-w-0 para evitar que o flexbox force a tela a esticar */}
      <div 
        className="relative bg-[#11121a] border rounded-3xl p-5 sm:p-8 flex-1 min-w-0 overflow-hidden mb-10"
        style={{ borderColor: `${cor}40` }}
      >
        <div className="flex flex-col gap-10 md:gap-12 relative">
          
          {/* TOPO: PROBLEMA */}
          <div className="relative z-10 flex flex-col">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block">Problema:</span>
              <div className="flex flex-row items-center gap-5">
                <div className="p-3 bg-red-500/10 rounded-xl text-red-400 shrink-0">{icon}</div>
                <p className="text-gray-400 italic text-sm md:text-base leading-relaxed text-left">"{problema}"</p>
              </div>
            </div>
          </div>

          {/* BAIXO: SOLUÇÃO */}
          <div className="relative z-10 flex flex-col">
            
            {/* ÍCONE E TÍTULO DA SOLUÇÃO */}
            <div className="flex items-center gap-4 mb-5">
              {/* O ÍCONE (O "BALDE" DE TINTA) */}
              <div className="relative flex w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl shadow-xl overflow-hidden border border-white/10 bg-white/5">
                <div className="absolute inset-0 animate-fill-bucket" style={{ backgroundColor: cor }}></div>
                <div className="relative m-auto z-10 animate-lightning text-white">
                  {iconeCentral || (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  )}
                </div>
              </div>

              {/* TEXTO: SOLUÇÃO */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-1">Solução:</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight wrap-break-word leading-none" style={{ color: cor }}>{solucao}</h3>
              </div>
            </div>

            {/* BARRA DE PROGRESSO QUE ENCHE */}
            <div className="w-full mb-5">
              <div className="relative h-0.5 w-full bg-white/5 overflow-hidden">
                <div className="absolute left-0 top-0 h-full animate-fill-bar" style={{ backgroundColor: cor }}></div>
              </div>
            </div>

            {/* DESCRIÇÃO E TAGS */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed text-left">{descricao}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-gray-500">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServico;