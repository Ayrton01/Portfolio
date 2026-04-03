// --- IMPORTS ---
// Hooks do React para gerenciar estado e callbacks.
import { useCallback, useState } from "react";
// Componente principal da biblioteca de partículas.
import Particles from "react-tsparticles";
// Função para carregar a versão "slim" (mais leve) do motor de partículas.
import { loadSlim } from "tsparticles-slim";
// Biblioteca para animações declarativas.
import { motion } from "framer-motion";
// Importa os dados dos nós (tecnologias) e as cores das categorias.
import { techs, categoryColors } from './ConstelacaoData';
// Importa um hook customizado que centraliza a lógica de otimização e animação.
import useOtimizacaoConst from "./OtimizacaoConst";

// --- COMPONENTE CONSTELAÇÃO ---
// Este componente renderiza um canvas interativo de tecnologias como uma constelação.
const Constelacao = () => {
  // --- ESTADO (STATE) ---
  // 'hoveredNode': Armazena o índice do nó que está com o mouse sobre ele. `null` se nenhum.
  const [hoveredNode, setHoveredNode] = useState(null);
  // 'pinnedNode': Armazena o índice do nó que foi clicado/tocado, fixando o foco nele. `null` se nenhum.
  const [pinnedNode, setPinnedNode] = useState(null);
  // Desestrutura as funções e dados do nosso hook customizado para manter este componente mais limpo.
  const { optimizedParticlesOptions, getDimmedClass, getAnimationProps } = useOtimizacaoConst();

  // --- INICIALIZAÇÃO DAS PARTÍCULAS ---
  // 'useCallback' memoriza esta função para que ela não seja recriada a cada renderização, otimizando a performance.
  const particlesInit = useCallback(async (engine) => {
    // Carrega o motor de partículas necessário para a biblioteca funcionar.
    await loadSlim(engine);
  }, []);

  return (
    // Container principal que ocupa toda a área do seu pai.
    <div className="absolute inset-0 w-full h-full">
      {/* --- CAMADA 1: PARTÍCULAS DE FUNDO --- */}
      {/* Renderiza o componente de partículas que cria o fundo estrelado em movimento. */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={optimizedParticlesOptions}
        className="w-full h-full"
      />

      {/* --- CAMADA 2: LINHAS DE CONEXÃO (SVG) --- */}
      {/* Um SVG sobreposto para desenhar as linhas que conectam os nós da tecnologia.
          'pointer-events-none' faz com que cliques "atravessem" o SVG e atinjam os nós abaixo. */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 svg-draw-path">
        {/* Itera sobre cada tecnologia para desenhar suas linhas de conexão. */}
        {techs.map((tech, i) => {
          // Define qual é o nó atualmente em foco: o "pinado" tem prioridade sobre o "hover".
          const activeNode = pinnedNode ?? hoveredNode;

          // Se a tecnologia atual tiver links, mapeia cada um para criar uma linha.
          return tech.links?.map((targetIndex) => {
            // --- LÓGICA DE ESTILO DA LINHA ---
            // Uma linha é "ativa" se sua origem (i) ou seu destino (targetIndex) for o nó em foco.
            const isLineActive = activeNode !== null && (i === activeNode || targetIndex === activeNode);
            // Uma linha é "ofuscada" (dimmed) se existe um nó ativo, mas esta linha não tem relação com ele.
            const isLineDimmed = activeNode !== null && !isLineActive;
            
            // A cor da linha: se estiver ativa, usa a cor da categoria do nó focado; senão, usa uma cor padrão.
            const strokeColor = isLineActive ? categoryColors[techs[activeNode].category] : "#4f46e5";

            return (
              <line
                key={`${i}-${targetIndex}`}
                x1={tech.left} // Posição X da origem
                y1={tech.top}
                x2={techs[targetIndex].left} // Posição X do destino
                y2={techs[targetIndex].top}
                stroke={strokeColor}
                strokeWidth={isLineActive ? "2.5" : "1.5"}
                strokeOpacity={isLineActive ? "0.9" : isLineDimmed ? "0.05" : "0.4"}
                strokeDasharray={isLineActive ? "6 6" : "4 4"}
                // Adiciona uma animação de pulso sutil se a linha estiver ativa.
                className={`transition-all duration-300 ${isLineActive ? "animate-pulse" : ""}`}
              />
            );
          });
        })}
      </svg>

      {/* --- CAMADA 3: NÓS DA TECNOLOGIA (DIVs INTERATIVAS) --- */}
      {/* Camada final com os círculos e textos clicáveis. */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        {techs.map((tech, i) => {
          // Pega a cor hexadecimal correspondente à categoria da tecnologia.
          const hexColor = categoryColors[tech.category] || "#ffffff";
          
          // Novamente, define o nó ativo (pinado > hover).
          const activeNode = pinnedNode ?? hoveredNode;
          
          // --- LÓGICA DE RELACIONAMENTO ---
          // Um nó é "relacionado" se:
          // 1. Nenhum nó está ativo (todos visíveis).
          // 2. Ele é o próprio nó selecionado.
          // 3. O nó selecionado tem um link para ele.
          // 4. Ele tem um link para o nó selecionado.
          const isSelected = activeNode === i;
          const isRelated = activeNode === null || isSelected || 
                            tech.links?.includes(activeNode) || 
                            techs[activeNode]?.links?.includes(i);
                            
          // Pega as classes de estilo (ofuscado/normal) e as propriedades de animação do hook customizado.
          const dimmedClass = getDimmedClass(isRelated);
          const animationProps = getAnimationProps(i);

          return (
          // 'motion.div' da Framer Motion para animar a entrada e o hover.
          <motion.div
            key={tech.name}
            // Eventos de ponteiro: atualiza o estado de hover apenas para mouse, não para toque.
            onPointerEnter={(e) => e.pointerType === "mouse" && setHoveredNode(i)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setHoveredNode(null)}
            // Evento de clique/toque: se o nó já está pinado, desfaz o pino; senão, pina o nó.
            onClick={() => setPinnedNode(pinnedNode === i ? null : i)}
            // 'pointer-events-auto' sobrepõe o 'none' do pai, tornando este elemento clicável.
            className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group transition-[opacity,filter] duration-500 ${dimmedClass}`}
            style={{ top: tech.top, left: tech.left }}
            {...animationProps} // Aplica as props de animação de entrada (delay, etc.).
            whileHover={{ scale: 1.15 }}
          >
            
            {/* --- TOOLTIP (ETIQUETA DE CATEGORIA) --- */}
            {/* Fica invisível por padrão e aparece quando o nó é selecionado ou no hover. */}
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-30 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
              <span 
                className="px-2 sm:px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold rounded-md bg-[#0a0b10]/90 backdrop-blur-sm border shadow-xl whitespace-nowrap"
                style={{ color: hexColor, borderColor: `${hexColor}40`, boxShadow: `0 4px 15px ${hexColor}20` }}
              >
                {tech.category}
              </span>
            </div>

            {/* --- O CÍRCULO (NÓ) --- */}
            <div className="relative flex items-center justify-center">
              {/* O brilho de fundo do círculo. */}
              <div 
                className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full blur-xl transition-opacity duration-300 ${isSelected ? "opacity-40" : "opacity-20 group-hover:opacity-40"}`}
                style={{ backgroundColor: hexColor }}
              ></div>
              {/* O círculo principal com borda e efeito de vidro fosco. */}
              <div 
                className={`absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border bg-[#0a0b10]/60 backdrop-blur-md transition-colors duration-300 ${isSelected ? "border-white/30" : "border-white/10 group-hover:border-white/30"}`}
                style={{ boxShadow: `0 0 15px ${hexColor}20` }}
              ></div>
              
              {/* O nome da tecnologia no centro do círculo. */}
              <span 
                className="relative font-bold text-[9px] sm:text-[10px] md:text-xs tracking-tight px-2 py-1 sm:px-3 sm:py-1.5 transition-colors duration-300"
                style={{ color: hexColor }}
              >
                {tech.name}
              </span>
            </div>
          </motion.div>
        )})}
      </div>
    </div>
  );
};

export default Constelacao;