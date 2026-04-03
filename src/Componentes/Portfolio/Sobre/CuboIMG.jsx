// --- IMPORTS ---
// Importa os hooks do React para gerenciar o estado (useState) e os ciclos de vida/efeitos (useEffect).
import { useState, useEffect } from 'react';
// Importa a imagem que será usada no componente.
import minhaFoto from './Portfolio_IMG.png';

// --- COMPONENTE DE IMAGEM ANIMADA ---
// Este componente renderiza uma imagem com uma animação de "fragmentação" que é
// acionada em um ciclo contínuo.
const CuboIMG = () => {
  // --- ESTADO (STATE) ---
  // 'isHit': Um booleano que controla qual classe CSS é aplicada à imagem.
  // 'false' aplica 'grayscale', 'true' aplica 'fragment-assemble'.
  const [isHit, setIsHit] = useState(false);
  // 'key': Um número que serve como a prop 'key' para a tag <img>.
  // Mudar essa chave é um truque para forçar o React a recriar o elemento <img>,
  // o que, por sua vez, reinicia a animação CSS 'fragment-assemble'.
  const [key, setKey] = useState(0);

  // --- LÓGICA DO CICLO DE ANIMAÇÃO ---
  // O useEffect é usado para controlar o tempo da animação.
  // O array de dependências vazio `[]` no final garante que este efeito rode apenas uma vez, quando o componente é montado.
  useEffect(() => {
    // 'cycle' é a função que define um único ciclo da animação.
    const cycle = () => {
      // 1. Inicia com a imagem em escala de cinza.
      setIsHit(false);
      // 2. Espera 4 segundos.
      setTimeout(() => {
        // 3. Ativa a animação de montagem.
        setIsHit(true);
        // 4. Incrementa a 'key' para garantir que a próxima animação reinicie corretamente.
        setKey(prev => prev + 1);
      }, 4000);
    };

    // Inicia o primeiro ciclo imediatamente.
    cycle();
    // Configura um intervalo (setInterval) para repetir a função 'cycle' a cada 10 segundos, criando um loop infinito.
    const interval = setInterval(cycle, 10000);

    // Função de limpeza: Quando o componente for desmontado, o intervalo é limpo para evitar vazamentos de memória.
    return () => clearInterval(interval);
  }, []);

  // --- RENDERIZAÇÃO DO COMPONENTE ---
  return (
    // Container principal da imagem, com um brilho de fundo.
    <div className="relative group mx-auto md:mx-0 w-full max-w-[320px] sm:max-w-100 md:max-w-none image-container-inner">
      {/* Div para o efeito de brilho (blur) que fica atrás da imagem. */}
      <div className="absolute -inset-1 bg-blue-500/20 rounded-[30px] md:rounded-[40px] blur-xl md:blur-2xl"></div>

      {/* Linhas verticais decorativas que também são animadas via CSS. */}
      <div className="line-container scale-75 md:scale-100">
        <div className="vertical-line line-impact-active"></div>
        <div className="vertical-line line-2 line-impact-active"></div>
      </div>

      {/* O container da imagem com borda e efeito de sombra. */}
      <div className="relative bg-[#161822] rounded-[30px] md:rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
        <img 
          key={key} // A 'key' que força a recriação do elemento.
          src={minhaFoto}
          alt="Ayrton" 
          // Aplica a classe de animação ('fragment-assemble') ou a de escala de cinza ('grayscale') com base no estado 'isHit'.
          className={`w-full h-auto object-cover ${isHit ? 'fragment-assemble' : 'grayscale'}`}
          style={{ transition: 'filter 0.5s ease' }}
        />
      </div>
    </div>
  );
};

export default CuboIMG;