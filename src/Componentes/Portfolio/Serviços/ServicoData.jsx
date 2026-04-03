// --- DADOS DOS SERVIÇOS (MOCK DATABASE) ---
// Este arquivo atua como um "banco de dados" local estático para a seção de serviços.
// Ele centraliza os textos, cores e ícones, separando a INFORMAÇÃO do LAYOUT.
// Vantagem: Para adicionar ou remover um serviço do site no futuro, você só precisa
// mexer neste array, sem precisar encostar em nenhuma linha de código HTML/Tailwind.

// Exportamos a constante 'meusServicos' (array de objetos) para importá-la dentro de 'Servico.jsx'.
export const meusServicos = [
  {
    // 'cor': Variável dinâmica (hexadecimal) que será injetada no CSS via React para pintar as animações deste card específico.
    cor: "#fbbf24",
    // Textos descritivos que serão recebidos via 'props' pelo componente 'CardServico'.
    problema: "Meu site está lento e afastando clientes",
    solucao: "Otimização de Performance",
    descricao: "Análise completa e otimização para garantir carregamento rápido e melhor experiência do usuário.",
    // Array de tecnologias/métodos. O método .map() lá no CardServico vai transformar cada string dessa em uma "pílula" (tag) visual.
    tags: ["Análise de gargalos", "Otimização de código", "Cache inteligente", "CDN"],
    // O JSX permite armazenar elementos HTML/SVG diretamente dentro de variáveis JavaScript.
    // Esses ícones (icon e iconeCentral) serão inseridos direto na estrutura visual do card.
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>,
    iconeCentral: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  },
  // --- DEMAIS SERVIÇOS ---
  // Os objetos abaixo seguem exatamente a mesma "interface" (estrutura de chaves) definida acima, garantindo que o CardServico não quebre.
  {
    cor: "#38bdf8",
    problema: "Preciso de um site/app do zero",
    solucao: "Desenvolvimento Web & Mobile",
    descricao: "Criação de aplicações modernas, responsivas e escaláveis usando as melhores tecnologias.",
    tags: ["React/Next.js", "Node.js", "React Native", "APIs REST"],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    iconeCentral: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  },
  {
    cor: "#a855f7", // Roxo vibrante
    problema: "Meus dados estão desorganizados",
    solucao: "Banco de Dados & Infraestrutura",
    descricao: "Modelagem, migração e otimização de bancos de dados para máxima eficiência e segurança.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Backup automatizado"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    iconeCentral: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
      </svg>
    )
  },
  {
    cor: "#22c55e", // Verde esmeralda
    problema: "Tenho medo de ataques e vazamentos",
    solucao: "Segurança & Proteção",
    descricao: "Implementação de práticas de segurança para proteger sua aplicação e dados dos seus clientes.",
    tags: ["Auditoria de segurança", "SSL/HTTPS", "Autenticação segura", "LGPD"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    iconeCentral: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    cor: "#ec4899", // Rosa Pink vibrante
    problema: "Meu sistema atual não atende mais",
    solucao: "Modernização de Sistemas",
    descricao: "Atualização de sistemas legados para tecnologias modernas sem perder dados ou funcionalidades.",
    tags: ["Migração gradual", "Refatoração", "Integração de APIs", "Documentação"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconeCentral: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 2.6-2 3.5 0 1.1 1 2 2 2 .9 0 2.24-.5 3.5-2" />
        <path d="M15 2s-4 1-5 5c-.3 1.21-.1 2.41.47 3.42l-7.3 7.3a1 1 0 0 0 0 1.42l2.3 2.3a1 1 0 0 0 1.42 0l7.3-7.3c1 .57 2.21.77 3.42.47 4-1 5-5 5-5s-1 1-5 1Z" />
      </svg>
    )
  },
  {
    cor: "#0ea5e9", // Sky Blue
    problema: "Preciso de suporte técnico confiável",
    solucao: "Suporte & Manutenção",
    descricao: "Acompanhamento contínuo para garantir que sua aplicação funcione perfeitamente 24/7.",
    tags: ["Monitoramento", "Correção de bugs", "Atualizações", "SLA garantido"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25a.25.25 0 01.25-.25h17.5a.25.25 0 01.25.25v13.5a.25.25 0 01-.25.25H3.25a.25.25 0 01-.25-.25V5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3 3 7-7" />
      </svg>
    ),
    iconeCentral: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
];