// --- IMPORTS ---
// Importa os hooks do React necessários para gerenciar o estado (memória) e os efeitos (animação) do componente.
import { useState, useEffect } from 'react'

// --- COMPONENTE LOGO ANIMADA ---
// Este componente cria a logo de texto que fica no canto esquerdo da NavBar.
// Ele tem uma animação de digitação parecida com o componente 'NomeAnimado', 
// mas é focado em criar a estética de uma tag de código: <Ayrton/>
const LogoAnimada = () => {
  // --- ESTADO (STATE) ---
  // 'text' armazena a parte do nome que está visível na tela no momento. 
  // Inicializa com o nome completo ('Ayrton') para aparecer pronto quando a página carregar.
  const [text, setText] = useState('Ayrton');
  
  // 'isDeleting' funciona como um interruptor que avisa se a animação está no sentido de "escrever" (false) ou "apagar" (true).
  const [isDeleting, setIsDeleting] = useState(false);
  
  // A palavra-alvo completa da nossa animação.
  const fullText = 'Ayrton';

  // --- LÓGICA DA ANIMAÇÃO (EFEITO) ---
  // O useEffect roda a cada vez que as variáveis 'text' ou 'isDeleting' são atualizadas.
  useEffect(() => {
    let timer; // Variável para armazenar o nosso "cronômetro" (timeout).

    // Se NÃO estivermos apagando (ou seja, estamos escrevendo)...
    if (!isDeleting) {
      // Checa se a palavra escrita atual é igual à palavra completa.
      if (text === fullText) {
        // Se a palavra estiver completa, pausa por 5 segundos (5000ms) e vira a chave para começar a apagar.
        timer = setTimeout(() => setIsDeleting(true), 5000);
      } else {
        // Se não estiver completa, adiciona a próxima letra após 150ms.
        timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), 150);
      }
    } 
    // Se ESTIVERMOS apagando...
    else {
      // Checa se a palavra já sumiu inteira.
      if (text === '') {
        // Se a palavra sumiu, vira a chave para começar a escrever de novo.
        setIsDeleting(false);
        // Pequena pausa (400ms) antes de digitar a primeira letra de novo.
        timer = setTimeout(() => {}, 400);
      } else {
        // Se ainda tem letras para apagar, tira a última letra após 100ms.
        timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), 100);
      }
    }

    // Função de limpeza: limpa o cronômetro (timer) anterior caso o componente seja remontado rápido demais,
    // evitando que o React se "confunda" com vários cronômetros rodando ao mesmo tempo.
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  // --- RENDERIZAÇÃO (O QUE VAI PARA A TELA) ---
  return (
    // Container da Logo. Classes importantes do Tailwind:
    // - 'text-indigo-400 font-bold': Dá a cor e peso à fonte.
    // - 'tracking-tighter': Deixa as letras mais juntinhas, estilo fonte de código.
    // - 'select-none': Impede o usuário de selecionar/grifar esse texto acidentalmente como se fosse um texto normal.
    <div className="relative text-indigo-400 font-bold text-xl tracking-tighter flex items-center cursor-pointer select-none">
      {/* Símbolo "menor que" que abre a nossa tag de código fictícia */}
      <span>&lt;</span>
      
      {/* O texto animado em si. 'min-w-1.25' mantém um pequeno espaço reservado mesmo quando o texto some por completo, evitando que os símbolos de <> grudem um no outro. */}
      <span className="min-w-1.25 ml-px mr-0.5">{text}</span>
      
      {/* A sacada genial desse componente: a barra deitada (/) atua como a barra de fechamento de tag HTML e TAMBÉM como o cursor piscando do terminal!
          'animate-[pulse_1s_infinite]' aplica o efeito de piscar (pulsar) do Tailwind. */}
      <span className="animate-[pulse_1s_infinite]">/</span>
      
      {/* Símbolo "maior que" para fechar a tag */}
      <span>&gt;</span>
    </div>
  );
};

// Exporta o componente para ser injetado dentro da NavBar.
export default LogoAnimada;