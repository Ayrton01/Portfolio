  export const particlesOptions = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.5 }
        },
      },
    },
    particles: {
      color: { value: "#4f46e5" }, // Cor das partículas (Indigo)
      links: {
        color: "#4f46e5", // Cor das linhas
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 15,
      },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  };

  export const techs = [
    { name: "React", top: "40%", left: "32%", category: "Frontend", links: [2, 4] },
    { name: "Next.js", top: "25%", left: "50%", category: "Frontend", links: [0, 3, 4] },
    { name: "Tailwind", top: "65%", left: "28%", category: "Frontend", links: [4, 5, 6] },
    { name: "TypeScript", top: "40%", left: "68%", category: "Frontend", links: [4, 8, 10] },
    { name: "Node.js", top: "55%", left: "50%", category: "Backend", links: [5, 7, 8, 9] }, /* Adicionado 9 (Docker) ao Node */
    { name: "GraphQL", top: "75%", left: "48%", category: "Backend", links: [7] },
    { name: "Python", top: "80%", left: "25%", category: "Backend", links: [] },
    { name: "PostgreSQL", top: "82%", left: "65%", category: "Database", links: [8, 9] },
    { name: "MongoDB", top: "60%", left: "72%", category: "Database", links: [9, 10] },
    { name: "Docker", top: "78%", left: "82%", category: "DevOps", links: [] },
    { name: "Git", top: "30%", left: "82%", category: "DevOps", links: [] },
    { name: "AWS", top: "28%", left: "18%", category: "Cloud", links: [0, 1] },
  ];

  // Mapeamento exato das cores da Legenda (Tailwind 400s)
  export const categoryColors = {
    Frontend: "#60a5fa", // bg-blue-400
    Backend: "#818cf8",  // bg-indigo-400
    Database: "#c084fc", // bg-purple-400
    DevOps: "#4ade80",   // bg-green-400
    Cloud: "#fb923c"     // bg-orange-400
  };

  