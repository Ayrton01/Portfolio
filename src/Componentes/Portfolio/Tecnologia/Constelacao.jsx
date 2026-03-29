import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { techs, categoryColors } from './ConstelacaoData';
import useOtimizacaoConst from "./OtimizacaoConst";

const Constelacao = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const { optimizedParticlesOptions, getDimmedClass, getAnimationProps } = useOtimizacaoConst();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={optimizedParticlesOptions}
        className="w-full h-full"
      />

      {/* SVG para desenhar a constelação interligando as bolinhas de tecnologia */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 svg-draw-path">
        {techs.map((tech, i) => {
          return tech.links?.map((targetIndex) => {
            // Verifica se a linha pertence ao nó que está com o mouse em cima
            const isLineActive = hoveredNode !== null && (i === hoveredNode || targetIndex === hoveredNode);
            const isLineDimmed = hoveredNode !== null && !isLineActive;
            
            // Se ativa, a linha pega a cor da tecnologia focada
            const strokeColor = isLineActive ? categoryColors[techs[hoveredNode].category] : "#4f46e5";

            return (
              <line
                key={`${i}-${targetIndex}`}
                x1={tech.left}
                y1={tech.top}
                x2={techs[targetIndex].left}
                y2={techs[targetIndex].top}
                stroke={strokeColor}
                strokeWidth={isLineActive ? "2.5" : "1.5"}
                strokeOpacity={isLineActive ? "0.9" : isLineDimmed ? "0.05" : "0.4"}
                strokeDasharray={isLineActive ? "6 6" : "4 4"}
                className={`transition-all duration-300 ${isLineActive ? "animate-pulse" : ""}`}
              />
            );
          });
        })}
      </svg>

      {/* Camada de Texto com os nós da tecnologia */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        {techs.map((tech, i) => {
          const hexColor = categoryColors[tech.category] || "#ffffff";
          
          // Lógica para saber se essa bolinha tem relação com a que está sendo focada
          const isHovered = hoveredNode === i;
          const isRelated = hoveredNode === null || isHovered || 
                            tech.links?.includes(hoveredNode) || 
                            techs[hoveredNode]?.links?.includes(i);
                            
          const dimmedClass = getDimmedClass(isRelated);
          const animationProps = getAnimationProps(i);

          return (
          <motion.div
            key={tech.name}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHoveredNode(i)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setHoveredNode(null)}
            onClick={() => setHoveredNode(hoveredNode === i ? null : i)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group transition-[opacity,filter] duration-500 ${dimmedClass}`}
            style={{ top: tech.top, left: tech.left }}
            {...animationProps}
            whileHover={{ scale: 1.15 }}
          >
            
            {/* Tooltip flutuante exibindo a categoria da legenda */}
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-30 ${isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
              <span 
                className="px-2 sm:px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold rounded-md bg-[#0a0b10]/90 backdrop-blur-sm border shadow-xl whitespace-nowrap"
                style={{ color: hexColor, borderColor: `${hexColor}40`, boxShadow: `0 4px 15px ${hexColor}20` }}
              >
                {tech.category}
              </span>
            </div>

            {/* O Círculo */}
            <div className="relative flex items-center justify-center">
              <div 
                className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full blur-xl transition-opacity duration-300 ${isHovered ? "opacity-40" : "opacity-20 group-hover:opacity-40"}`}
                style={{ backgroundColor: hexColor }}
              ></div>
              <div 
                className={`absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border bg-[#0a0b10]/60 backdrop-blur-md transition-colors duration-300 ${isHovered ? "border-white/30" : "border-white/10 group-hover:border-white/30"}`}
                style={{ boxShadow: `0 0 15px ${hexColor}20` }}
              ></div>
              
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