const ContatoCard = ({ icon, label, valor, link, cor }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-[#11121a] border border-white/5 py-10 sm:py-12 px-5 sm:px-8 rounded-3xl flex flex-col items-center justify-center text-center gap-5 sm:gap-6 group hover:border-white/10 transition-all backdrop-blur-sm relative overflow-hidden min-w-50 h-full min-h-60 sm:min-h-65 flex-1"
    >
      {/* Ícone com o Brilho Circular do Print 1 */}
      <div className="relative">
        <div 
          className="p-5 rounded-2xl relative z-10 transition-transform group-hover:scale-110 svg-draw-path text-white"
          style={{ backgroundColor: `${cor}20` }}
        >
          {icon}
        </div>
        {/* Brilho de Fundo (Glow) */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
          style={{ backgroundColor: cor }}
        ></div>
      </div>

      {/* Textos Centrais */}
      <div className="relative z-10">
        <h3 className="text-white text-xl font-bold mb-2">{label}</h3>
        <p className="text-gray-500 text-xs leading-relaxed max-w-37.5">
          {valor}
        </p>
      </div>
    </a>
  );
};

export default ContatoCard;