// --- COMPONENTE CARD DE CONTATO ---
// Este é um componente reutilizável que representa uma única opção de contato (ex: WhatsApp, LinkedIn).
// Ele recebe suas informações dinamicamente através das 'props' (icon, label, valor, link, cor).
const ContatoCard = ({ icon, label, valor, link, cor }) => {
  return (
    // --- LINK / CONTAINER PRINCIPAL ---
    // Usamos a tag <a> para que o card inteiro seja clicável.
    // 'target="_blank"' instrui o navegador a abrir o link em uma nova aba.
    // 'rel="noopener noreferrer"' é uma prática crucial de segurança ao usar target="_blank" para evitar problemas de segurança (tabnabbing).
    // A classe 'group' do Tailwind permite que elementos filhos (como o ícone e o brilho) mudem de estilo quando o card inteiro for focado (hover).
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-[#11121a] border border-white/5 py-10 sm:py-12 px-5 sm:px-8 rounded-3xl flex flex-col items-center justify-center text-center gap-5 sm:gap-6 group hover:border-white/10 transition-all backdrop-blur-sm relative overflow-hidden min-w-50 h-full min-h-60 sm:min-h-65 flex-1"
    >
      {/* --- ÁREA DO ÍCONE E BRILHO --- */}
      <div className="relative">
        
        {/* O ÍCONE EM SI */}
        <div 
          // 'group-hover:scale-110': Faz o ícone dar um leve "zoom in" quando o usuário passa o mouse sobre qualquer parte do card.
          // 'svg-draw-path': Classe customizada que faz uma animação contínua nas linhas de contorno do SVG.
          className="p-5 rounded-2xl relative z-10 transition-transform group-hover:scale-110 svg-draw-path text-white"
          // Pega a 'cor' recebida via props (ex: "#22c55e") e anexa "20" no final.
          // No CSS, adicionar números após uma cor hexadecimal altera sua opacidade. Isso cria um fundo colorido semi-transparente.
          style={{ backgroundColor: `${cor}20` }}
        >
          {icon}
        </div>
        
        {/* BRILHO DE FUNDO (GLOW) */}
        {/* Esta div fica logo atrás do ícone e possui a classe 'blur-2xl' que desfoca severamente a cor, criando um efeito de "mancha de luz". */}
        <div 
          // 'group-hover:opacity-60': Aumenta a intensidade do brilho animadamente quando o card está focado.
          className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
          // Pinta a mancha de luz exatamente com a cor específica da rede social.
          style={{ backgroundColor: cor }}
        ></div>
      </div>

      {/* --- ÁREA DE TEXTO --- */}
      {/* 'z-10' garante que os textos fiquem sempre à frente de qualquer efeito de fundo ou brilho. */}
      <div className="relative z-10">
        {/* Título (Nome da Rede/Contato) */}
        <h3 className="text-white text-xl font-bold mb-2">{label}</h3>
        {/* Breve descrição do valor/motivo daquele canal */}
        <p className="text-gray-500 text-xs leading-relaxed max-w-37.5">
          {valor}
        </p>
      </div>
    </a>
  );
};

export default ContatoCard;