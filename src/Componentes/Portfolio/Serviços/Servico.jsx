import { useState } from 'react';
import CardServico from './CardServico';
import { meusServicos } from './ServicoData';

const Servicos = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicos" className="pt-12 pb-8 bg-[#0f111a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <span className="text-indigo-500 font-semibold tracking-widest text-sm uppercase">Serviços</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* --- ABAS (TABS) INTERATIVAS LATERAIS --- */}
          <div className="flex overflow-x-auto lg:flex-col w-full lg:w-75 shrink-0 gap-3 pb-4 lg:pb-0 justify-start snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {meusServicos.map((s, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group shrink-0 snap-center flex items-center gap-3 px-4 py-3 lg:py-4 rounded-xl border text-sm font-semibold transition-all duration-300 text-left ${
                    isActive
                      ? 'shadow-lg'
                      : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                  style={
                    isActive
                      ? { borderColor: s.cor, color: s.cor, backgroundColor: `${s.cor}1a`, textShadow: `0 0 10px ${s.cor}40` }
                      : {}
                  }
                >
                  {/* Símbolo do Card */}
                  <div className={`flex items-center justify-center shrink-0 transition-opacity duration-300 [&>svg]:w-5 [&>svg]:h-5 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                    {s.iconeCentral}
                  </div>
                  
                  {/* Texto da Aba */}
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {s.solucao}
                  </span>
                </button>
              );
            })}
          </div>

          {/* --- CONTEÚDO DA ABA (CARD ATIVO) --- */}
          <div className="relative w-full flex-1 transition-all duration-500 min-w-0">
            {/* A propriedade key com o activeTab força a recriação do componente, reiniciando as animações CSS */}
            <CardServico key={activeTab} {...meusServicos[activeTab]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;