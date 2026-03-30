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

export default LogoAnimada;