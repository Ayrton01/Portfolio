import Constelacao from './Constelacao';

const Tecnologias = () => {
  return (
    <section id="tecnologias" className="pt-24 pb-0 relative overflow-hidden z-10">
      
      {/* 1. Título */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 text-center mb-0 md:mb-0">
        <span className="text-indigo-500 font-semibold tracking-widest text-xs sm:text-sm uppercase block mb-2 sm:mb-3">
          Tecnologias
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Stack <span className="text-indigo-400 hover:text-blue-400 transition-colors">Moderno</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0">
          Ecossistema tecnológico integrado para soluções robustas e escaláveis.
        </p>
      </div>

      {/* 2. Área da Constelação */}
      <div className="relative w-full h-112.5 sm:h-125 md:h-162.5 z-10 -mt-8 sm:-mt-12 md:-mt-10">
        <Constelacao />
      </div>

      {/* 3. Legenda da Stack (O que você marcou no print) */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 md:mt-8 relative z-20">
        {[
          { label: "Frontend", cor: "bg-blue-400" },
          { label: "Backend", cor: "bg-indigo-400" },
          { label: "Database", cor: "bg-purple-400" },
          { label: "DevOps", cor: "bg-green-400" },
          { label: "Cloud", cor: "bg-orange-400" },
        ].map((item) => (
          <div 
            key={item.label}
            className="flex items-center gap-1.5 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-[#0a0b10]/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
          >
            <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${item.cor}`}></div>
            <span className="text-gray-300 text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-wider uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Tecnologias;