// --- CONFIGURAÇÃO DO LINK DO WHATSAPP ---
// Este arquivo centraliza a criação do link de contato direto para o WhatsApp.
// Manter isso em um arquivo separado é uma excelente prática: se o seu número 
// ou a mensagem padrão mudarem no futuro, você só precisa alterar neste único arquivo, 
// e a mudança será aplicada automaticamente em todos os botões do site que o utilizam.

// Define a mensagem de saudação padrão que aparecerá preenchida no WhatsApp do cliente.
// A função nativa do JavaScript 'encodeURIComponent' é crucial aqui: ela pega o texto com espaços e pontuações
// e o converte em um formato seguro para links de internet (ex: troca espaços por '%20'), evitando que o link quebre.
const mensagemWhatsApp = encodeURIComponent(
  "Olá Ayrton. Tenho uma ideia de projeto e gostaria de iniciar o seu desenvolvimento. Quais informações você precisa para uma análise inicial?"
);

// Cria a constante com a URL completa e a exporta ('export') para ser usada em outros arquivos (como o Inicio.jsx).
// A URL usa a API oficial de clique para o chat do WhatsApp ('wa.me/'), seguida do código do país (55), DDD (92) e o número.
// O parâmetro '?text=' no final anexa a mensagem que codificamos acima.
export const whatsapp_URL = `https://wa.me/5592984894507?text=${mensagemWhatsApp}`;