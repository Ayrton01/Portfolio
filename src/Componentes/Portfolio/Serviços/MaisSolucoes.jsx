import SolucaoCard from './SolucaoCard';
import { solucoes } from './SolucoesData';

const MaisSolucoes = () => {

  return (
    <section className="-mt-4 md:-mt-3 pb-24 bg-[#0f111a] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título Central */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-10">
            Mais Soluções
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Soluções <span className="text-blue-500">sob medida</span>
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((item, idx) => (
            <SolucaoCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaisSolucoes;