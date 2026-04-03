// --- IMPORTS GLOBAIS ---
// Importa o StrictMode do React. Ele não renderiza nada visualmente, mas ativa verificações
// e avisos rigorosos durante o desenvolvimento (ex: detecta uso de métodos obsoletos).
import { StrictMode } from 'react'
// Importa a nova API de renderização (introduzida no React 18), pronta para recursos concorrentes.
import { createRoot } from 'react-dom/client'

// Importa o arquivo de estilos global. Tudo que for definido aqui (como as diretivas do Tailwind
// e os nossos @keyframes customizados) estará disponível e ativo para toda a aplicação.
import './Portfolio.css'
// Importa o nosso componente principal, que funciona como o "esqueleto" que agrupa todo o resto.
import Portfolio from './Portfolio.jsx'

// --- INICIALIZAÇÃO DA APLICAÇÃO ---
// 1. `document.getElementById('root')`: Busca no arquivo físico 'index.html' (na pasta base do projeto)
//    uma `<div>` vazia que possui o id "root".
// 2. `createRoot(...)`: Assume o controle dessa div, transformando-a na raiz da árvore do React.
// 3. `.render(...)`: Pega os nossos componentes React e os injeta/desenha dentro dessa raiz.
createRoot(document.getElementById('root')).render(
  // O StrictMode envolve a nossa aplicação inteira.
  // Curiosidade de Dev: O StrictMode faz com que os componentes sejam renderizados DUAS VEZES 
  // (apenas no modo de desenvolvimento local) para ajudar a encontrar bugs em efeitos colaterais (useEffects).
  // Em produção (quando o site está no ar), ele renderiza apenas uma vez normalmente.
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
