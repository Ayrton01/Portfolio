import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ContatoCard from './ContatoCard';
// Importando as configurações que você externalizou:
import { particlesOptions } from '../Tecnologia/ConstelacaoData';

const Contato = () => {
  const particlesInit = useCallback(async (engine) => {
    // Carrega o motor leve de partículas para o rodapé
    await loadSlim(engine);
  }, []);

  // Criamos uma cópia das opções da constelação, mas aumentamos a quantidade só para o footer
  const footerParticlesOptions = {
    ...particlesOptions,
    particles: {
      ...particlesOptions.particles,
      number: {
        value: 200, // Aqui você aumenta a quantidade (estava 15, mudei para 60)
        density: { enable: true, area: 800 }
      }
    }
  };

  const listaContatos = [
    { label: "WhatsApp", valor: "Resposta rápida, direto no ponto", cor: "#22c55e", link: "https://wa.me/5592984894507", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
    { label: "GitHub", valor: "Veja meus repositórios e projetos", cor: "#94a3b8", link: "https://github.com/Ayrton01", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { label: "LinkedIn", valor: "Veja meu perfil profissional", cor: "#0ea5e9", link: "https://linkedin.com/in/ayrtonsousa", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { label: "Email", valor: "Para propostas detalhadas", cor: "#4f46e5", link: "mailto:ayrton@email.com", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  ];

  return (
    <section id="contato" className="pt-15 pb-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* Títulos Centrais */}
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

        {/* GRID DOS CARDS (O Efeito Escada) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {listaContatos.map((contato, idx) => (
            <div 
              key={idx} 
              className={`transition-transform duration-700 ease-out h-full ${
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

      {/* O RODAPÉ */}
      {/* FOOTER COMPACTO COM PARTÍCULAS REUTILIZADAS */}
      <footer className="mt-16 sm:mt-20 lg:mt-48 border-t border-white/5 py-3 sm:py-4 relative z-10 overflow-hidden">
        
        {/* Reuso das Partículas da Constelação */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <Particles
            id="tsparticles-footer"
            init={particlesInit}
            options={footerParticlesOptions}
            className="h-full w-full"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-20">
          {/* Lado Esquerdo: Copyright */}
          <div className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Ayrton. Todos os direitos reservados.
          </div>

          {/* Lado Direito: Feito com Café */}
          <div className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide flex items-center gap-1.5">
            Feito com 
            <span className="text-red-500/80 animate-pulse text-base">❤️</span> 
            e muito café
          </div>
        </div>
      </footer>        
    </section>
  );
};

export default Contato;