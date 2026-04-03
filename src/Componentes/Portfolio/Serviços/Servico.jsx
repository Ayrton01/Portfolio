// --- IMPORTS ---
// Importa o hook 'useState' do React para gerenciar o estado da aba ativa.
import { useState } from 'react';
// Importa o componente 'CardServico', que é o "molde" visual para exibir os detalhes de um serviço.
import CardServico from './CardServico';
// Importa o array 'meusServicos' do arquivo 'ServicoData'. Este arquivo atua como um banco de dados,
// separando os dados (textos, cores, ícones) da lógica de apresentação do componente.
import { meusServicos } from './ServicoData';

// --- COMPONENTE DA SEÇÃO DE SERVIÇOS ---
// Este componente cria uma seção interativa com abas (tabs) para navegar
// entre os diferentes serviços oferecidos.
const Servicos = () => {
  // --- ESTADO (STATE) ---
  // 'activeTab' armazena o índice (número) do serviço que está atualmente selecionado.
  // 'setActiveTab' é a função usada para atualizar este índice.
  // O estado inicial é 0, o que significa que o primeiro serviço da lista será exibido ao carregar.
  const [activeTab, setActiveTab] = useState(0);

  return (
    // A tag <section> define a área principal do componente.
    // O id="servicos" é crucial para que os links de navegação (ex: <a href="#servicos">) funcionem corretamente.
    <section id="servicos" className="pt-12 pb-8 bg-[#0f111a] relative overflow-hidden">
      {/* Container para centralizar o conteúdo e aplicar espaçamento. */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="text-center mb-12">
          <span className="text-indigo-500 font-semibold tracking-widest text-sm uppercase">Serviços</span>
        </div>

        {/* Container principal que organiza as abas e o card de conteúdo lado a lado em telas grandes (lg:flex-row)
            e um abaixo do outro em telas menores (flex-col). */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* --- ABAS (TABS) INTERATIVAS LATERAIS --- */}
          {/* Em telas pequenas, esta div é uma lista horizontal rolável ('overflow-x-auto').
              Em telas grandes, torna-se uma coluna vertical ('lg:flex-col').
              As classes '[&::-webkit-scrollbar]:hidden', etc., escondem a barra de rolagem para um visual mais limpo. */}
          <div className="flex overflow-x-auto lg:flex-col w-full lg:w-75 shrink-0 gap-3 pb-4 lg:pb-0 justify-start snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Mapeia o array 'meusServicos' para criar um botão de aba para cada serviço. */}
            {meusServicos.map((s, index) => {
              // Verifica se a aba atual no loop é a mesma que está ativa no estado.
              const isActive = activeTab === index;
              return (
                <button
                  key={index} // Chave única para o React otimizar a renderização da lista.
                  // Ao clicar, o estado 'activeTab' é atualizado com o índice deste botão.
                  onClick={() => setActiveTab(index)}
                  // Classes condicionais: aplica um conjunto de estilos se 'isActive' for true, e outro se for false.
                  className={`group shrink-0 snap-center flex items-center gap-3 px-4 py-3 lg:py-4 rounded-xl border text-sm font-semibold transition-all duration-300 text-left ${
                    isActive
                      ? 'shadow-lg' // Estilo da aba ativa.
                      : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                  // Estilos inline condicionais: se a aba estiver ativa, usa a cor específica do serviço
                  // para a borda, texto e fundo, criando um efeito de destaque temático.
                  style={
                    isActive
                      ? { borderColor: s.cor, color: s.cor, backgroundColor: `${s.cor}1a`, textShadow: `0 0 10px ${s.cor}40` }
                      : {}
                  }
                >
                  {/* Ícone da aba. */}
                  <div className={`flex items-center justify-center shrink-0 transition-opacity duration-300 [&>svg]:w-5 [&>svg]:h-5 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                    {s.iconeCentral}
                  </div>
                  
                  {/* Título da aba. */}
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {s.solucao}
                  </span>
                </button>
              );
            })}
          </div>

          {/* --- CONTEÚDO DA ABA (CARD ATIVO) --- */}
          {/* Este container exibe o CardServico correspondente à aba ativa. */}
          <div className="relative w-full flex-1 transition-all duration-500 min-w-0">
            {/* --- O TRUQUE DA ANIMAÇÃO ---
                A propriedade 'key' é fundamental aqui. Quando a 'key' de um componente muda (neste caso, quando 'activeTab' muda de 0 para 1, etc.),
                o React entende que este não é mais o "mesmo" componente. Ele "destrói" (unmounts) a instância antiga do CardServico
                e cria uma instância totalmente nova.
                Ao fazer isso, todas as animações CSS dentro do CardServico (que rodam quando o componente aparece) são reiniciadas do zero.
                O spread operator '{...meusServicos[activeTab]}' passa todas as propriedades do objeto do serviço ativo como props para o CardServico. */}
            <CardServico key={activeTab} {...meusServicos[activeTab]} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporta o componente para ser usado no arquivo principal 'App.jsx' (ou 'Portfolio.jsx').
export default Servicos;