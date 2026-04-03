// --- IMPORTS ---
// Hooks do React.
import { useCallback } from "react";
// Componente principal para renderizar o fundo animado.
import Particles from "react-tsparticles";
// Motor leve das partículas.
import { loadSlim } from "tsparticles-slim";
// Componente visual do card individual de contato.
import ContatoCard from './ContatoCard';
// Importando as configurações base das partículas que criamos na seção de Tecnologias.
// Reutilizar esse objeto economiza código e mantém um padrão visual na página.
import { particlesOptions } from '../Tecnologia/ConstelacaoData';

// --- COMPONENTE DE CONTATO E RODAPÉ ---
// Este componente renderiza a última seção do site, contendo as opções de contato
// e o rodapé (footer) da página.
const Contato = () => {
  // Função memorizada para inicializar o motor de partículas de forma performática.
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // --- OPÇÕES CUSTOMIZADAS PARA O RODAPÉ ---
  // Criamos uma cópia das opções originais usando o "Spread Operator" (...).
  // A intenção aqui é usar o mesmo visual de estrelas interativas, mas com muito mais densidade
  // para criar um efeito de encerramento estético no fundo do rodapé.
  const footerParticlesOptions = {
    ...particlesOptions, // Copia todas as configurações bases
    particles: {
      ...particlesOptions.particles, // Copia a sub-configuração de partículas
      number: {
        value: 200, // Sobrescreve o valor: de 15 (original) para 200.
        density: { enable: true, area: 800 }
      }
    }
  };

  // --- DADOS DOS CANAIS DE CONTATO ---
  // Array de objetos contendo as informações para renderizar cada botão de contato.
  const listaContatos = [
    { label: "WhatsApp", valor: "Resposta rápida, direto no ponto", cor: "#22c55e", link: "https://wa.me/5592984894507", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
    { label: "GitHub", valor: "Veja meus repositórios e projetos", cor: "#94a3b8", link: "https://github.com/Ayrton01", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { label: "LinkedIn", valor: "Veja meu perfil profissional", cor: "#0ea5e9", link: "https://linkedin.com/in/ayrtonsousa", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { label: "Email", valor: "Para propostas detalhadas", cor: "#4f46e5", link: "mailto:ayrton@email.com", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  ];

  return (
    // --- CONTAINER PRINCIPAL ---
    // 'id="contato"': Permite que o link da NavBar navegue até aqui.
    <section id="contato" className="pt-15 pb-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-indigo-500 font-semibold tracking-widest text-sm uppercase">Contato</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">
            Vamos <span className="text-indigo-400">conversar?</span>
          </h2>
          <p className="text-gray-400 mt-10 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0">
            Aguardo sua mensagem para construirmos sua solução. <br className="hidden sm:block" />
            Conecte-se comigo através do canal de sua preferência.
          </p>
        </div>

        {/* --- GRID DE CARDS DE CONTATO (EFEITO ESCADA) --- */}
        {/* Organiza os cards em colunas (1 em mobile, 2 em tablets, 4 em monitores). */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {listaContatos.map((contato, idx) => (
            <div 
              key={idx} // Chave única para o React otimizar a renderização da lista.
              className={`transition-transform duration-700 ease-out h-full ${
                // Lógica Condicional para o Efeito "Escada" em telas grandes (lg):
                // Dependendo do índice (0, 1, 2, 3), o card é "empurrado" mais para baixo usando 'translate-y'.
                // O primeiro (0) não desce nada, o segundo desce 10, o terceiro 20 e o último 30.
                idx === 1 ? "lg:translate-y-10" : 
                idx === 2 ? "lg:translate-y-20" : 
                idx === 3 ? "lg:translate-y-30" : ""
              }`}
            >
              <ContatoCard {...contato} />
            </div>
          ))}
        </div>
      </div>

      {/* --- RODAPÉ (FOOTER) --- */}
      <footer className="mt-16 sm:mt-20 lg:mt-48 border-t border-white/5 py-3 sm:py-4 relative z-10 overflow-hidden">
        
        {/* FUNDO ANIMADO DO RODAPÉ */}
        {/* 'absolute inset-0 -z-10': Faz as partículas ocuparem o fundo inteiro do footer, por trás dos textos. */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <Particles
            id="tsparticles-footer"
            init={particlesInit}
            options={footerParticlesOptions}
            className="h-full w-full"
          />
        </div>

        {/* CONTEÚDO DO RODAPÉ (Textos) */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-20">
          {/* Lado Esquerdo: Copyright */}
          <div className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Ayrton. Todos os direitos reservados.
          </div>

          {/* Lado Direito: Feito com Café */}
          <div className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide flex items-center gap-1.5">
            Feito com 
            {/* Coração pulsante para dar um toque de personalidade. */}
            <span className="text-red-500/80 animate-pulse text-base">❤️</span> 
            e muito café
          </div>
        </div>
      </footer>        
    </section>
  );
};

export default Contato;