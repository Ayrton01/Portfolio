import { useMemo } from "react";
import useSensorTela from "./SensorTela";
import { particlesOptions } from "./ConstelacaoData";

export default function useOtimizacaoConst() {
  const { width } = useSensorTela();

  // Otimização 1: Define se é um dispositivo móvel/pequeno.
  const isMobile = useMemo(() => width < 768, [width]);

  // Otimização 2: Reduz o número de partículas em telas menores.
  const optimizedParticlesOptions = useMemo(() => {
    if (isMobile) {
      return {
        ...particlesOptions,
        particles: {
          ...particlesOptions.particles,
          number: {
            ...particlesOptions.particles.number,
            value: 20,
          },
        },
      };
    }
    return particlesOptions;
  }, [isMobile]);

  // Otimização 3: Helper para remover o efeito de blur e grayscale em telas menores.
  const getDimmedClass = (isRelated) => {
    return !isRelated ? (isMobile ? "opacity-30" : "opacity-20 grayscale blur-[2px]") : "opacity-100";
  };

  // Otimização 4: Helper para desativar a animação de flutuação infinita em mobile.
  const getAnimationProps = (index) => {
    return {
      animate: !isMobile ? { y: [0, -8, 0] } : {},
      transition: !isMobile ? { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } : {}
    };
  };

  return { optimizedParticlesOptions, getDimmedClass, getAnimationProps };
}