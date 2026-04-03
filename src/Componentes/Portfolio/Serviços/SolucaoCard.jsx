// --- IMPORTS ---
// Importa a biblioteca 'framer-motion', que é usada para criar animações complexas de forma declarativa em React.
import { motion } from 'framer-motion';

// --- COMPONENTE DE CARD DE SOLUÇÃO ---
// Este é um componente de apresentação reutilizável. Ele recebe 'icon', 'titulo' e 'descricao'
// como props do componente pai ('MaisSolucoes.jsx') e os exibe em um layout de card estilizado.
const SolucaoCard = ({ icon, titulo, descricao }) => {
  return (
    // --- CONTAINER PRINCIPAL DO CARD ---
    // Estilos Tailwind:
    // - 'group': Permite estilizar elementos filhos quando o mouse passa por cima deste container (ex: 'group-hover:...').
    // - 'relative overflow-hidden': Necessário para posicionar o brilho de fundo e garantir que ele não vaze para fora das bordas arredondadas.
    <div className="bg-[#11121a] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all group relative overflow-hidden">
      
      {/* --- CONTAINER DO ÍCONE ANIMADO --- */}
      {/* 'h-16 flex items-end': Define uma altura fixa e alinha o ícone na base, para que ele "pule" a partir do chão. */}
      <div className="mb-6 relative h-16 flex items-end">
        
        {/* O ÍCONE QUE PULA */}
        {/* 'motion.div' é o componente da Framer Motion que substitui uma 'div' normal, permitindo que ela seja animada. */}
        <motion.div
          // 'svg-draw-path': Classe CSS customizada que anima o desenho do traço do SVG.
          className="text-blue-400 svg-draw-path"
          // A prop 'animate' define o estado final ou a sequência da animação.
          animate={{
            y: [0, -20, 0], // Anima a posição Y (vertical): começa em 0, sobe 20px, e volta para 0.
          }}
          // A prop 'transition' controla o "como" a animação acontece.
          transition={{
            duration: 5,      // A animação completa (subir e descer) leva 5 segundos.
            repeat: Infinity, // Repete a animação infinitamente.
            ease: "easeInOut" // Acelera no início e desacelera no final para um movimento suave.
          }}
        >
          {icon} {/* Renderiza o ícone (SVG) recebido via props. */}
        </motion.div>

        {/* BARRAS DE "SUPORTE" QUE APARECEM NA QUEDA */}
        {/* Este elemento anima em sincronia com o ícone para criar um efeito de "impacto" ou "suporte". */}
        <motion.div 
          className="absolute bottom-0 left-0 flex gap-1 w-10"
          animate={{
            opacity: [0, 1, 0], // Fica invisível, aparece, e desaparece.
            scaleY: [0, 1, 0]   // Estica verticalmente do nada, atinge altura total, e encolhe de volta ao nada.
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            // 'times' mapeia os keyframes da animação para pontos no tempo.
            // Aqui, a animação atinge seu pico (opacidade 1, escala 1) em 50% (0.5) da duração total,
            // sincronizando perfeitamente com o momento em que o ícone principal aterrissa.
            times: [0, 0.5, 1] 
          }}
        >
          <div className="w-1 h-4 bg-blue-500/20 rounded-full"></div>
          <div className="w-1 h-6 bg-blue-500/40 rounded-full"></div>
          <div className="w-1 h-4 bg-blue-500/20 rounded-full"></div>
        </motion.div>
      </div>

      {/* --- TEXTOS DO CARD --- */}
      {/* Título da solução. As classes 'max-[360px]:...' são media queries customizadas do Tailwind para telas muito pequenas. */}
      <h3 className="text-white text-xl max-[360px]:text-lg max-[360px]:text-center font-bold mb-4">{titulo}</h3>
      {/* Descrição da solução. */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {descricao}
      </p>

      {/* --- EFEITO DE BRILHO NO HOVER --- */}
      {/* Uma div posicionada absolutamente no canto inferior direito.
          'group-hover:bg-blue-500/10': Quando o mouse passa sobre o card (o 'group'), a cor de fundo deste brilho se intensifica. */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
    </div>
  );
};

export default SolucaoCard;