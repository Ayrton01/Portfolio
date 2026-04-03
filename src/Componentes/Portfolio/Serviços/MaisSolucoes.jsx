// --- IMPORTS ---
// Importa o componente 'SolucaoCard', que é o molde visual para cada card individual nesta seção.
import SolucaoCard from './SolucaoCard';
// Importa o array 'solucoes' do arquivo 'SolucoesData'. Este arquivo funciona como um "mini banco de dados",
// contendo todos os textos e ícones para cada card. Isso mantém os dados organizados e fora da lógica de exibição.
import { solucoes } from './SolucoesData';

// --- COMPONENTE DA SEÇÃO "MAIS SOLUÇÕES" ---
// Este componente é responsável por renderizar a seção que exibe um grid de serviços ou soluções adicionais.
const MaisSolucoes = () => {

  return (
    // A tag <section> define a área principal do componente.
    // Estilos Tailwind:
    // - '-mt-4 md:-mt-3': Uma margem superior negativa que faz esta seção "subir" um pouco, sobrepondo-se sutilmente à seção anterior para um efeito visual mais coeso.
    // - 'bg-[#0f111a]': Define a cor de fundo.
    // - 'relative z-10': Garante que esta seção fique na frente de elementos de fundo de outras seções.
    <section className="-mt-4 md:-mt-3 pb-24 bg-[#0f111a] relative z-10">
      {/* Container para centralizar o conteúdo e aplicar espaçamento lateral. */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="text-center mb-16">
          {/* Um "badge" ou "pílula" estilizada para o subtítulo. */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-10">
            Mais Soluções
          </div>
          {/* O título principal da seção. */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {/* O <span> permite estilizar uma parte específica do texto com uma cor diferente. */}
            Soluções <span className="text-blue-500">sob medida</span>
          </h2>
        </div>

        {/* --- GRID DE CARDS --- */}
        {/* Esta div usa o sistema de grid do Tailwind para organizar os cards.
            - 'grid-cols-1': Uma coluna em telas pequenas (mobile-first).
            - 'sm:grid-cols-2': Duas colunas em telas 'small' e maiores.
            - 'lg:grid-cols-3': Três colunas em telas 'large' e maiores. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* --- RENDERIZAÇÃO DINÂMICA DOS CARDS --- */}
          {/* O método .map() itera sobre cada 'item' no array 'solucoes'. Para cada item, ele renderiza um componente 'SolucaoCard'.
              - 'key={idx}': Uma chave única e estável, essencial para o React otimizar a renderização de listas.
              - '{...item}': O "spread operator" desempacota o objeto 'item' (ex: {titulo: '...', descricao: '...'}) e passa cada chave-valor como uma prop individual para o 'SolucaoCard' (titulo="...", descricao="..."). */}
          {solucoes.map((item, idx) => (
            <SolucaoCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporta o componente para ser usado no arquivo principal 'App.jsx' (ou 'Portfolio.jsx').
export default MaisSolucoes;