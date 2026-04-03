// --- IMPORTS ---
// Importa o hook 'useState' do React para gerenciar o estado do menu (aberto/fechado).
import { useState } from 'react'
// Importa o componente da logo animada que será exibido no canto esquerdo da barra.
import LogoAnimada from './LogoAnimada';

// --- COMPONENTE DA BARRA DE NAVEGAÇÃO ---
// Este componente cria uma barra de navegação fixa no topo da página,
// que se adapta para telas de desktop e mobile.
const Navbar = () => {
  // --- ESTADO (STATE) ---
  // 'isOpen' é uma variável de estado que controla a visibilidade do menu mobile.
  // 'setIsOpen' é a função que usamos para atualizar o valor de 'isOpen'.
  // O valor inicial é 'false', significando que o menu começa fechado.
  const [isOpen, setIsOpen] = useState(false);

  // --- DADOS DOS LINKS ---
  // Um array de objetos para guardar os links de navegação.
  // Usar um array torna o código mais limpo e fácil de manter (princípio DRY - Don't Repeat Yourself).
  // Se precisarmos adicionar ou remover um link, só mexemos aqui.
  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Contato", href: "#contato" },
  ];

  // --- RENDERIZAÇÃO DO COMPONENTE ---
  return (
    // A tag <nav> é o contêiner principal.
    // Estilos Tailwind:
    // - 'fixed top-0 left-0 w-full': Fixa a barra no topo da tela, ocupando toda a largura.
    // - 'z-50': Garante que a barra fique acima de quase todos os outros elementos da página.
    // - 'bg-[#0a0b10]/60 backdrop-blur-xl': Cria o efeito de vidro fosco (glassmorphism), com um fundo escuro semitransparente e um desfoque do conteúdo que está atrás.
    // - 'border-b border-white/5': Adiciona uma borda sutil na parte inferior.
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0b10]/60 backdrop-blur-xl border-b border-white/5 py-4">
      {/* Div interna para centralizar e alinhar o conteúdo da barra */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        
        {/* Logo com efeito de brilho ao redor */}
        <div className="relative">
          {/* Div para o brilho (blur) que fica atrás da logo */}
          <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full"></div>
          {/* Renderiza o componente da logo animada */}
          <LogoAnimada />
        </div>

        {/* Links para Desktop (só aparecem em telas médias 'md' ou maiores) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {/* Mapeia o array 'navLinks' para criar um link <a> para cada item. */}
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão "Fale Comigo" para Desktop (também só aparece em telas 'md' ou maiores) */}
        <a href="#contato" className="hidden md:block bg-linear-to-r from-[#4f46e5] to-[#7c3aed] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:scale-105 transition-transform text-center">
          Fale Comigo
        </a>

        {/* Botão Hambúrguer (só aparece em telas menores que 'md') */}
        <button 
          // Ao clicar, o estado 'isOpen' é invertido (de true para false, e vice-versa).
          onClick={() => setIsOpen(!isOpen)}
          // 'md:hidden' faz este botão ser visível apenas em telas pequenas.
          className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
        >
          {/* Renderização condicional do ícone: se o menu estiver aberto, mostra um 'X', senão, mostra as três linhas (hambúrguer). */}
          {isOpen ? (
            // Ícone 'X' para fechar
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            // Ícone de hambúrguer para abrir
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* --- PAINEL DO MENU MOBILE (OVERLAY) --- */}
      {/* Este painel só é visível quando 'isOpen' é true. */}
      <div className={`
        fixed inset-0 top-18 bg-[#0a0b10] z-40 flex flex-col transition-all duration-300 ease-in-out md:hidden /* Estilos base e transição */
        ${isOpen 
          ? 'translate-x-0 opacity-100' /* Se 'isOpen' for true: desliza para a tela e fica visível */
          : 'translate-x-full opacity-0 pointer-events-none' /* Se for false: desliza para fora, fica invisível e não pode ser clicado */
        }
      `}>
        {/* Container dos links dentro do menu mobile */}
        <div className="flex flex-col w-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              // Ao clicar em um link, o menu se fecha automaticamente.
              onClick={() => setIsOpen(false)} 
              // Estilo de cada item do menu, criando as "faixas" com bordas.
              className="w-full px-8 py-5 text-lg font-medium bg-[#0f111a] text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Botão "Fale Comigo" dentro do menu mobile */}
        <div className="w-full px-8 py-6 bg-[#0f111a] border-b border-white/5">
          {/* Também fecha o menu ao ser clicado */}
          <a href="#contato" onClick={() => setIsOpen(false)} className="w-full block text-center bg-linear-to-r from-[#4f46e5] to-[#7c3aed] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20">
            Fale Comigo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 