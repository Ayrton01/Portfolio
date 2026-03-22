import CuboIMG from './CuboIMG';

const Sobre = () => {
  return (
      <section id="sobre" className="relative py-16 md:py-24 border-t border-white/5 z-10">
        {/* PRÓXIMA SEÇÃO (Sobre Mim) */}
        <div className="max-w-6xl mx-auto px-6">
          {/* grid-cols-1 para mobile (empilhado) e md:grid-cols-2 para PC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Lado Esquerdo: Imagem (Aparece primeiro no mobile) */}
            <div className="order-1 md:order-1 flex justify-center">
              <CuboIMG />
            </div>

            {/* Lado Direito: Texto */}
            <div className="flex flex-col order-2 md:order-2 text-center md:text-left">
              <span className="text-indigo-500 font-semibold tracking-widest text-xs md:text-sm mb-2 uppercase">
                Sobre mim
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Engenharia com <span className="text-blue-400"> propósito </span>
              </h2>
              
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

              {/* Badges - Centralizados no mobile, alinhados à esquerda no PC */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-10">
                <div className="flex items-center gap-2 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm text-indigo-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Código escalável
                </div>
                <div className="flex items-center gap-2 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm text-indigo-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Entregas no prazo
                </div>
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

export default Sobre;