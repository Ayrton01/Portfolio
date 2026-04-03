// --- IMPORTS ---
// 'useMemo' é um hook que memoriza o resultado de uma função, evitando recálculos desnecessários a cada renderização.
import { useMemo } from "react"; 
// Importa nosso outro hook customizado que detecta a largura da tela.
import useSensorTela from "./SensorTela";
// Importa as opções de configuração base das partículas.
import { particlesOptions } from "./ConstelacaoData";

// --- HOOK CUSTOMIZADO DE OTIMIZAÇÃO ---
// Hooks customizados (que começam com 'use') são uma forma de extrair e reutilizar lógica com estado entre componentes.
// Este hook centraliza todas as otimizações de performance para a animação da constelação.
export default function useOtimizacaoConst() {
  // Pega a largura atual da tela do nosso hook sensor.
  const { width } = useSensorTela();

  // --- OTIMIZAÇÃO 1: DETECÇÃO DE DISPOSITIVO MÓVEL ---
  // 'useMemo' garante que o cálculo 'width < 768' só seja refeito quando a 'width' realmente mudar.
  // 'isMobile' se torna um booleano (true/false) que podemos usar nas outras otimizações.
  const isMobile = useMemo(() => width < 768, [width]);

  // --- OTIMIZAÇÃO 2: REDUÇÃO DE PARTÍCULAS EM TELAS MENORES ---
  // Novamente, usamos 'useMemo' para criar uma versão otimizada das opções de partículas.
  const optimizedParticlesOptions = useMemo(() => {
    // Se for um dispositivo móvel...
    if (isMobile) {
      // ...retorna uma cópia do objeto de opções original, mas sobrescreve o número de partículas para um valor menor (20).
      // Isso reduz drasticamente o processamento necessário em celulares, melhorando a fluidez.
      return {
        ...particlesOptions,
        particles: {
          ...particlesOptions.particles,
          number: {
            ...particlesOptions.particles.number,
            value: 10, // Reduzido para 10 para ainda menos carga
          },
        },
      };
    }
    // Se não for mobile, retorna as opções originais sem modificação.
    return particlesOptions;
  }, [isMobile]);

  // --- OTIMIZAÇÃO 3: EFEITO DE "OFUSCAR" (DIM) RESPONSIVO ---
  // Esta é uma função "helper" que retorna a classe CSS correta com base na relação do nó e no tipo de dispositivo.
  const getDimmedClass = (isRelated) => {
    // Se o nó não for relacionado ao nó ativo:
    // - Em mobile, aplica apenas uma opacidade reduzida ('opacity-30').
    // - Em desktop, aplica um efeito mais pesado com opacidade, escala de cinza e desfoque.
    // Isso evita efeitos de filtro (blur, grayscale) que são caros para processadores de celular.
    return !isRelated ? (isMobile ? "opacity-30" : "opacity-20 grayscale blur-[2px]") : "opacity-100";
  };

  // --- OTIMIZAÇÃO 4: ANIMAÇÃO DE FLUTUAÇÃO CONDICIONAL ---
  // Outra função "helper" que retorna as props de animação para a Framer Motion.
  const getAnimationProps = (index) => {
    return {
      // Se NÃO for mobile, aplica a animação de flutuação (eixo Y). Se for, retorna um objeto vazio (sem animação).
      animate: !isMobile ? { y: [0, -8, 0] } : {},
      // A mesma lógica para as propriedades de transição. O 'delay' escalonado cria um efeito de onda na entrada dos nós.
      transition: !isMobile ? { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } : {}
    };
  };

  // O hook retorna um objeto com as opções otimizadas e as funções helper para serem usadas no componente 'Constelacao'.
  return { optimizedParticlesOptions, getDimmedClass, getAnimationProps };
}