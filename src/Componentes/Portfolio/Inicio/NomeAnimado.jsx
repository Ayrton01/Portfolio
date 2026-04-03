// --- IMPORTS ---
// Importamos os 'hooks' do React que nos permitirão gerenciar o estado e os efeitos colaterais do componente.
import { useState, useEffect } from 'react';

// --- COMPONENTE DE ANIMAÇÃO DE TEXTO ---
// Este é um componente funcional focado em criar um efeito de digitação e exclusão de texto.
const NomeAnimado = () => {
  // --- ESTADO (STATE) DO COMPONENTE ---
  // 'useState' é um hook que nos permite adicionar uma variável de estado ao componente.

  // 'text': Armazena a string que está sendo exibida na tela no momento.
  // Começa com o nome completo para que ele apareça imediatamente ao carregar a página.
  const [text, setText] = useState('Ayrton');

  // 'isDeleting': Um 'interruptor' (booleano) que nos diz se a animação está no modo "apagando" (true) ou "escrevendo" (false).
  const [isDeleting, setIsDeleting] = useState(false);
  
  // 'fullText': Uma constante com o texto completo que queremos animar.
  const fullText = 'Ayrton';

  // --- LÓGICA DA ANIMAÇÃO (EFEITO COLATERAL) ---
  // 'useEffect' é um hook que executa um código (efeito) toda vez que uma de suas dependências (no array no final) muda.
  // É perfeito para animações baseadas em tempo, como a nossa.
  useEffect(() => {
    let timer; // Variável para guardar o ID do nosso temporizador (setTimeout).

    // --- LÓGICA DE "ESCREVER" ---
    if (!isDeleting) {
      // Se o texto exibido já for o texto completo...
      if (text === fullText) {
        // ...esperamos 5 segundos (5000ms) e então ativamos o modo "apagando".
        timer = setTimeout(() => setIsDeleting(true), 5000);
      } else {
        // ...senão, esperamos 150ms e adicionamos a próxima letra ao texto.
        timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), 150);
      }
    } 
    // --- LÓGICA DE "APAGAR" ---
    else {
      // Se o texto já estiver vazio...
      if (text === '') {
        // ...desativamos o modo "apagando" para que ele comece a escrever de novo.
        setIsDeleting(false);
        // Damos uma pequena pausa de 400ms antes de recomeçar a escrever.
        timer = setTimeout(() => {}, 400); 
      } else {
        // ...senão, esperamos 100ms e removemos a última letra do texto.
        timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), 100);
      }
    }

    // --- FUNÇÃO DE LIMPEZA ---
    // Esta função é retornada pelo useEffect e é executada sempre que o componente for "desmontado"
    // ou antes de o efeito ser executado novamente. Ela cancela o temporizador anterior,
    // evitando que múltiplas animações rodem ao mesmo tempo e causem bugs.
    return () => clearTimeout(timer);
    
  // --- ARRAY DE DEPENDÊNCIAS ---
  // O useEffect será re-executado toda vez que o valor de 'text' ou 'isDeleting' mudar.
  }, [text, isDeleting]);

  // --- RENDERIZAÇÃO (O QUE APARECE NA TELA) ---
  return (
    // Um contêiner 'span' que usa flexbox para alinhar o texto e o cursor piscante.
    // 'h-[1.2em]' garante uma altura fixa para evitar que o layout "pule" quando o texto some.
    <span className="flex items-center justify-center mt-1 h-[1.2em]">
      
      {/* O texto animado em si. As classes Tailwind criam um efeito de texto com fundo degradê.
          - 'text-transparent': Deixa o texto invisível.
          - 'bg-clip-text': Usa o texto como uma máscara para o fundo.
          - 'bg-linear-to-r...': Aplica o degradê como fundo. */}
      <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 font-bold">
        {text}
      </span>

      {/* O cursor piscante. É uma 'span' vazia estilizada para parecer uma barra vertical.
          - 'animate-[pulse_1s_infinite]': Aplica uma animação de pulso (pisca-pisca) definida no CSS/Tailwind.
          - 'ml-2 sm:ml-3': Adiciona uma margem à esquerda para separar do texto. */}
      <span className="w-0.75 sm:w-1.25 h-[0.9em] bg-purple-400 animate-[pulse_1s_infinite] ml-2 sm:ml-3 rounded-full opacity-80"></span>
    </span>
  );
};

// Exporta o componente para que ele possa ser usado em outros arquivos, como o 'Inicio.jsx'.
export default NomeAnimado;