// --- CONFIGURAÇÃO E DADOS DA CONSTELAÇÃO ---
// Separar estes dados do arquivo 'Constelacao.jsx' deixa o componente mais limpo e
// focado apenas na renderização, facilitando manutenções futuras.

// --- OPÇÕES DAS PARTÍCULAS (FUNDO) ---
// Este objeto contém todas as regras para o fundo estrelado animado (react-tsparticles).
export const particlesOptions = {
  // 'fullScreen: false' garante que as partículas fiquem presas dentro da 'div' pai, e não tomem a tela inteira.
  fullScreen: { enable: false },
  // Limita os quadros por segundo a 120 para poupar processamento do navegador.
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        // O modo "grab" faz com que o mouse "puxe" linhas das partículas próximas a ele.
        mode: "grab",
      },
    },
    modes: {
      grab: {
        // Distância máxima (em pixels) para o mouse se conectar a uma partícula.
        distance: 200,
        links: { opacity: 0.5 }
      },
    },
  },
  particles: {
    // Cor dos pontinhos (neste caso, a cor Indigo base do tema).
    color: { value: "#4f46e5" }, 
    links: {
      // Configuração das linhas finas que conectam as partículas de fundo.
      color: "#4f46e5", 
      distance: 150, // Conecta as partículas se elas estiverem a menos de 150px de distância.
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      // Habilita o movimento constante livre das partículas.
      enable: true,
      speed: 1, // Velocidade do vento bem suave.
      direction: "none",
      random: false,
      straight: false,
      // "bounce" (quicar): quando batem na borda da div pai, as partículas retornam como se houvesse uma parede.
      outModes: { default: "bounce" },
    },
    number: {
      // Quantidade base de partículas na tela.
      density: { enable: true, area: 800 },
      value: 15, // Número fixo inicial (será ajustado para mobile no arquivo OtimizacaoConst.jsx).
    },
    opacity: { value: 0.6 },
    shape: { type: "circle" }, // Formato geométrico das partículas.
    size: { value: { min: 2, max: 4 } }, // Variância: Tamanhos aleatórios indo de 2px a 4px.
  },
  // detectRetina melhora a definição visual em monitores/telas de alta densidade de pixels (celulares, MacBooks).
  detectRetina: true,
};

// --- DADOS DOS NÓS DA TECNOLOGIA (AS BOLINHAS GRANDES) ---
// Cada objeto deste array representa um nó visual na frente das partículas.
export const techs = [
  // O índice em que cada item está neste array (0, 1, 2...) é crucial para o mapeamento dos "links".
  // 'top' e 'left' ditam a posição X e Y na tela de forma absoluta e em porcentagem (tornando as posições responsivas por natureza).
  // 'links' é uma array que indica para quais os índices dos demais nós este nó deve desenhar uma linha SVG direta.
  { name: "React", top: "40%", left: "32%", category: "Frontend", links: [2, 4] },         // Índice 0
  { name: "Next.js", top: "25%", left: "50%", category: "Frontend", links: [0, 3, 4] },    // Índice 1
  { name: "Tailwind", top: "65%", left: "28%", category: "Frontend", links: [4, 5, 6] },   // Índice 2
  { name: "TypeScript", top: "40%", left: "68%", category: "Frontend", links: [4, 8, 10] },// Índice 3
  { name: "Node.js", top: "55%", left: "50%", category: "Backend", links: [5, 7, 8, 9] },  // Índice 4 (Nota: ligações com o Node)
  { name: "GraphQL", top: "75%", left: "48%", category: "Backend", links: [7] },           // Índice 5
  { name: "Python", top: "80%", left: "25%", category: "Backend", links: [] },             // Índice 6
  { name: "PostgreSQL", top: "82%", left: "65%", category: "Database", links: [8, 9] },    // Índice 7
  { name: "MongoDB", top: "60%", left: "72%", category: "Database", links: [9, 10] },      // Índice 8
  { name: "Docker", top: "78%", left: "82%", category: "DevOps", links: [] },              // Índice 9
  { name: "Git", top: "30%", left: "82%", category: "DevOps", links: [] },                 // Índice 10
  { name: "AWS", top: "28%", left: "18%", category: "Cloud", links: [0, 1] },              // Índice 11
];

// --- MAPEAMENTO DE CORES DO TEMA ---
// Um dicionário de mapeamento simples (Dicionário chave-valor).
// Centralizar as cores das categorias aqui facilita garantir que a cor usada na legenda
// sempre vai bater perfeitamente com a cor injetada nas bolinhas da constelação.
export const categoryColors = {
  Frontend: "#60a5fa", // Equivalente exato da cor bg-blue-400 do Tailwind
  Backend: "#818cf8",  // Equivalente exato da cor bg-indigo-400 do Tailwind
  Database: "#c084fc", // Equivalente exato da cor bg-purple-400 do Tailwind
  DevOps: "#4ade80",   // Equivalente exato da cor bg-green-400 do Tailwind
  Cloud: "#fb923c"     // Equivalente exato da cor bg-orange-400 do Tailwind
};

  