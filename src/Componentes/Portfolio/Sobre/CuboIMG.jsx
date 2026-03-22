import { useState, useEffect } from 'react';
import minhaFoto from './Portfolio_IMG.png';

const CuboIMG = () => {
  const [isHit, setIsHit] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setIsHit(false);
      setTimeout(() => {
        setIsHit(true);
        setKey(prev => prev + 1);
      }, 4000);
    };

    cycle();
    const interval = setInterval(cycle, 10000);
    return () => clearInterval(interval);
  }, []);

  // FALTAVA ISSO AQUI: O que o componente desenha na tela
  return (
    <div className="relative group mx-auto md:mx-0 w-full max-w-[320px] sm:max-w-100 md:max-w-none image-container-inner">
      <div className="absolute -inset-1 bg-blue-500/20 rounded-[30px] md:rounded-[40px] blur-xl md:blur-2xl"></div>

      <div className="line-container scale-75 md:scale-100">
        <div className="vertical-line line-impact-active"></div>
        <div className="vertical-line line-2 line-impact-active"></div>
      </div>

      <div className="relative bg-[#161822] rounded-[30px] md:rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
        <img 
          key={key}
          src={minhaFoto}
          alt="Ayrton" 
          className={`w-full h-auto object-cover ${isHit ? 'fragment-assemble' : 'grayscale'}`}
          style={{ transition: 'filter 0.5s ease' }}
        />
      </div>
    </div>
  );
}; // Fecha a função CuboIMG

export default CuboIMG;