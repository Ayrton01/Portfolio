// --- IMPORTS ---
// Importa os hooks 'useState' e 'useEffect' do React.
// 'useState' nos permite armazenar e atualizar o tamanho da tela.
// 'useEffect' nos permite interagir com APIs do navegador, como o 'window.addEventListener'.
import { useState, useEffect } from 'react';

// --- HOOK CUSTOMIZADO: useSensorTela ---
// Um hook customizado é uma função JavaScript cujo nome começa com "use" e que pode chamar outros hooks.
// Este hook foi criado para encapsular a lógica de obter e monitorar o tamanho da janela do navegador.
function useSensorTela() {
  // --- ESTADO (STATE) ---
  // 'windowSize' é um objeto que armazena a largura (width) e altura (height) da janela.
  // 'setWindowSize' é a função que usamos para atualizar esse estado.
  // O estado inicial é 'undefined' porque, no momento da primeira renderização no servidor (se houver),
  // o objeto 'window' do navegador ainda não existe.
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // --- EFEITO COLATERAL (SIDE EFFECT) ---
  // 'useEffect' é usado para executar código que interage com o "mundo exterior" ao React, como o DOM ou a 'window'.
  // O array de dependências vazio `[]` no final significa que este efeito será executado apenas UMA VEZ,
  // logo após o componente que usa este hook ser montado na tela pela primeira vez.
  useEffect(() => {
    // --- FUNÇÃO DE ATUALIZAÇÃO ---
    // 'handleResize' é a função que será chamada sempre que a janela for redimensionada.
    function handleResize() {
      // Ela atualiza o nosso estado 'windowSize' com os novos valores de 'window.innerWidth' e 'window.innerHeight'.
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // --- REGISTRO DO EVENTO ---
    // Adiciona um "ouvinte" ao evento 'resize' da janela. Toda vez que o usuário redimensionar o navegador,
    // a função 'handleResize' será automaticamente executada.
    window.addEventListener("resize", handleResize);
    // Chama 'handleResize' imediatamente após a montagem para definir o tamanho inicial da tela.
    handleResize();
    
    // --- FUNÇÃO DE LIMPEZA (CLEANUP) ---
    // A função retornada pelo 'useEffect' é executada quando o componente é "desmontado" (sai da tela).
    // 'removeEventListener' remove o "ouvinte" que adicionamos. Isso é CRUCIAL para a performance
    // e para evitar vazamentos de memória (memory leaks), garantindo que não tenhamos múltiplos "ouvintes"
    // desnecessários rodando ao mesmo tempo.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // O hook retorna o objeto 'windowSize' com os valores atualizados.
  // Qualquer componente que usar 'useSensorTela()' terá acesso a esses valores e será
  // re-renderizado automaticamente sempre que eles mudarem.
  return windowSize;
}

export default useSensorTela;