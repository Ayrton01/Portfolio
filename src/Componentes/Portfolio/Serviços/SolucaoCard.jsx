import { motion } from 'framer-motion';

const SolucaoCard = ({ icon, titulo, descricao }) => {
  return (
    <div className="bg-[#11121a] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all group relative overflow-hidden">
      
      {/* Container do Ícone com Animação de Pulo */}
      <div className="mb-6 relative h-16 flex items-end">
        <motion.div
          className="text-blue-400 svg-draw-path"
          animate={{
            y: [0, -20, 0], // Pula e cai
          }}
          transition={{
            duration: 5,     // Ciclo total de 5s como você pediu
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>

        {/* Barras de "Suporte" que aparecem na queda */}
        <motion.div 
          className="absolute bottom-0 left-0 flex gap-1 w-10"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            times: [0, 0.5, 1] // Aparece mais forte no meio do ciclo (na queda)
          }}
        >
          <div className="w-1 h-4 bg-blue-500/20 rounded-full"></div>
          <div className="w-1 h-6 bg-blue-500/40 rounded-full"></div>
          <div className="w-1 h-4 bg-blue-500/20 rounded-full"></div>
        </motion.div>
      </div>

      <h3 className="text-white text-xl max-[360px]:text-lg max-[360px]:text-center font-bold mb-4">{titulo}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {descricao}
      </p>

      {/* Brilho sutil no fundo ao passar o mouse */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
    </div>
  );
};

export default SolucaoCard;