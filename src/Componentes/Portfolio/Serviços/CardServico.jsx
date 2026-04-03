// --- COMPONENT DEFINITION & PROPS ---
// Este é um componente "CardServico" reutilizável. Ele foi projetado como um template para exibir
// diferentes serviços, recebendo seus dados via 'props'. Isso promove a reutilização de código e a manutenibilidade.
// As props são desestruturadas para um acesso mais limpo dentro do componente.
const CardServico = ({ 
  icon,         // Um elemento React (SVG) representando o "Problema".
  iconeCentral, // Um elemento React (SVG) para o centro da animação da "Solução".
  cor,          // Uma string (código hexadecimal) para a cor de tema exclusiva do card.
  problema,     // Uma string descrevendo a dor do cliente.
  solucao,      // Uma string para o título da solução oferecida.
  descricao,    // Uma string detalhando a solução.
  tags = []     // Um array de strings para tags de tecnologia/metodologia. O valor padrão `[]` previne erros se a prop não for fornecida.
}) => {
  return (
    // --- MAIN WRAPPER ---
    // Esta div contém o card inteiro, incluindo o elemento de linha do tempo acima dele.
    // A classe 'group' é usada pelo Tailwind para estilizar elementos filhos no hover deste pai.
    <div 
      className="relative flex flex-col group w-full" 
      // --- INJEÇÃO DE VARIÁVEL CSS DINÂMICA ---
      // Este é um padrão poderoso do React. Ele cria uma propriedade customizada CSS (--service-color)
      // com escopo para esta instância do componente, usando o valor da prop 'cor'.
      // Isso permite que nossas animações CSS globais (@keyframes) usem uma cor única para cada card.
      style={{ '--service-color': cor }} 
    >
      
      {/* --- 1. VISUAL DA LINHA DO TEMPO SUPERIOR --- */}
      {/* Esta seção cria o efeito visual de uma linha do tempo fluindo para dentro do card. */}
      <div className="flex items-center w-full mb-6 px-2 md:px-6">
        {/* O círculo inicial animado. */}
        <div 
          className="w-4 h-4 shrink-0 rounded-full border-2 bg-[#0a0b10] z-10 animate-fill-circle" 
          // A cor da borda e um brilho (box-shadow) são definidos dinamicamente usando a prop 'cor'.
          // O '44' na cor do boxShadow é um valor alfa hexadecimal para ~27% de opacidade.
          style={{ borderColor: cor, boxShadow: `0 0 10px ${cor}44` }}
        ></div>
        
        {/* A linha horizontal que conecta o círculo ao card. */}
        <div className="h-px flex-1 bg-white/5 ml-4 relative">
          {/* A "energia" que flui através da linha. 
              'animate-fill-h-line' é uma animação customizada que escala sua largura de 0% a 100%. */}
          <div className="absolute top-0 left-0 h-full animate-fill-h-line" style={{ backgroundColor: cor }}></div>
        </div>
      </div>

      {/* --- 2. CONTEÚDO PRINCIPAL DO CARD --- */}
      {/* 'min-w-0' é uma correção de flexbox para prevenir que o conteúdo estique a tela em viewports pequenas.
          'overflow-hidden' garante que elementos filhos (como brilhos de fundo) respeitem os cantos arredondados. */}
      <div 
        className="relative bg-[#11121a] border rounded-3xl p-5 sm:p-8 flex-1 min-w-0 overflow-hidden mb-10"
        // A cor da borda também é dinâmica, usando a prop 'cor' com um alfa hexadecimal '40' para ~25% de opacidade.
        style={{ borderColor: `${cor}40` }}
      >
        <div className="flex flex-col gap-10 md:gap-12 relative">
          
          {/* --- SEÇÃO DO PROBLEMA --- */}
          <div className="relative z-10 flex flex-col">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block">Problema:</span>
              <div className="flex flex-row items-center gap-5">
                {/* O ícone do problema é renderizado aqui, com um fundo avermelhado para significar "problema". */}
                <div className="p-3 bg-red-500/10 rounded-xl text-red-400 shrink-0">{icon}</div>
                {/* A descrição do problema, estilizada em itálico para se assemelhar a uma citação. */}
                <p className="text-gray-400 italic text-sm md:text-base leading-relaxed text-left">"{problema}"</p>
              </div>
            </div>
          </div>

          {/* --- SEÇÃO DA SOLUÇÃO --- */}
          <div className="relative z-10 flex flex-col">
            
            {/* --- CABEÇALHO DA SOLUÇÃO (ÍCONE + TÍTULO) --- */}
            <div className="flex items-center gap-4 mb-5">
              {/* O container do ícone animado "balde de tinta". */}
              <div className="relative flex w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl shadow-xl overflow-hidden border border-white/10 bg-white/5">
                {/* Esta div é o fundo colorido que anima de baixo para cima, como um balde enchendo.
                    A animação keyframe 'animate-fill-bucket' controla este efeito. */}
                <div className="absolute inset-0 animate-fill-bucket" style={{ backgroundColor: cor }}></div>
                
                {/* O ícone central em si. Ele fica em uma camada acima do fundo que enche.
                    'animate-lightning' faz o ícone desaparecer à medida que o balde enche, criando um efeito polido. */}
                <div className="relative m-auto z-10 animate-lightning text-white">
                  {/* Renderização Condicional: Se 'iconeCentral' for fornecido, renderize-o.
                      Caso contrário, renderize um SVG de fallback (o raio). Isso torna o componente mais robusto. */}
                  {iconeCentral || (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  )}
                </div>
              </div>

              {/* --- TEXTO DO TÍTULO DA SOLUÇÃO --- */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-1">Solução:</span>
                {/* O título da solução é colorido dinamicamente usando a prop 'cor'. */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight wrap-break-word leading-none" style={{ color: cor }}>{solucao}</h3>
              </div>
            </div>

            {/* --- BARRA DE PROGRESSO ANIMADA --- */}
            {/* Um divisor visual sutil que também anima em sincronia com o resto do card. */}
            <div className="w-full mb-5">
              <div className="relative h-0.5 w-full bg-white/5 overflow-hidden">
                <div className="absolute left-0 top-0 h-full animate-fill-bar" style={{ backgroundColor: cor }}></div>
              </div>
            </div>

            {/* --- DESCRIÇÃO & TAGS --- */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed text-left">{descricao}</p>
              
              {/* Container para as tags de tecnologia. 'flex-wrap' permite que as tags quebrem para a próxima linha em telas menores. */}
              <div className="flex flex-wrap gap-2 pt-2">
                {/* --- RENDERIZAÇÃO DE LISTA DINÂMICA --- */}
                {/* O método .map() itera sobre o array 'tags'. Para cada string 'tag' no array,
                    ele retorna um elemento <span> estilizado. Esta é a maneira padrão e declarativa de renderizar listas no React.
                    A prop 'key={tag}' é essencial para que o React atualize a lista de forma eficiente. */}
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

// Exporta o componente, tornando-o disponível para importação e uso em outros arquivos, como 'Servico.jsx'.
export default CardServico;