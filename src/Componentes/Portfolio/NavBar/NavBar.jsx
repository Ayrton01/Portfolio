import { useState, useEffect } from 'react'

const LogoAnimada = () => {
  const [text, setText] = useState('Ayrton'); 
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Ayrton';

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      if (text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 5000);
      } else {
        timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), 150);
      }
    } else {
      if (text === '') {
        setIsDeleting(false);
        timer = setTimeout(() => {}, 400);
      } else {
        timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), 100);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="relative text-indigo-400 font-bold text-xl tracking-tighter flex items-center cursor-pointer select-none">
      <span>&lt;</span>
      <span className="min-w-1.25 ml-px mr-0.5">{text}</span>
      {/* A barra deitada (/) atuando como o cursor piscando */}
      <span className="animate-[pulse_1s_infinite]">/</span>
      <span>&gt;</span>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0b10]/60 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        
        {/* Logo */}
        <div className="relative">
          <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full"></div>
          <LogoAnimada />
        </div>

        {/* Desktop Links (Escondem abaixo de 768px/md) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button (Esconde abaixo de md) */}
        <a href="#contato" className="hidden md:block bg-linear-to-r from-[#4f46e5] to-[#7c3aed] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:scale-105 transition-transform text-center">
          Fale Comigo
        </a>

        {/* Botão Hambúrguer (Aparece apenas em Mobile/Tablet) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* --- MENU MOBILE (O OVERLAY COM FAIXAS PRETAS) --- */}
      <div className={`
        fixed inset-0 top-18 bg-[#0a0b10] z-40 flex flex-col transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
      `}>
        {/* Container dos links com as faixas */}
        <div className="flex flex-col w-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              // Adicionamos 'bg-[#0f111a]' para criar a faixa e 'border-b' para separar
              className="w-full px-8 py-5 text-lg font-medium bg-[#0f111a] text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Botão Fale Comigo centralizado com faixa preta */}
        <div className="w-full px-8 py-6 bg-[#0f111a] border-b border-white/5">
          <a href="#contato" onClick={() => setIsOpen(false)} className="w-full block text-center bg-linear-to-r from-[#4f46e5] to-[#7c3aed] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20">
            Fale Comigo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 