import { useState, useEffect } from 'react';

const NomeAnimado = () => {
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
    <span className="flex items-center justify-center mt-1 h-[1.2em]">
      <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
        {text}
      </span>
      {/* Cursor piscando na cor roxa combinando com o final do degradê */}
      <span className="w-0.75 sm:w-1.25 h-[0.9em] bg-purple-400 animate-[pulse_1s_infinite] ml-2 sm:ml-3 rounded-full opacity-80"></span>
    </span>
  );
};

export default NomeAnimado;