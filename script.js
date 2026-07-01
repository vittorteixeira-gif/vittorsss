// ==========================================================================
// 1. GERENCIADOR DE TEMA (MODO ESCURO / MODO CLARO)
// ==========================================================================

// Seleciona o botão de alternância através do ID configurado no HTML
const botaoTema = document.getElementById('theme-btn');

// Adiciona o evento de clique para modificar o atributo estrutural do layout
botaoTema.addEventListener('click', () => {
    // Verifica se o corpo da página já possui o atributo de modo claro
    const temaAtual = document.body.getAttribute('data-theme');
    
    if (temaAtual === 'light') {
        // Se estiver claro, remove o atributo para voltar ao modo escuro padrão (cyberpunk)
        document.body.removeAttribute('data-theme');
    } else {
        // Se estiver escuro, injeta o atributo que ativa as cores do modo claro do CSS
        document.body.setAttribute('data-theme', 'light');
    }
});


// ==========================================================================
// 2. VALIDADOR INTERATIVO DO QUIZ DE CIDADANIA DIGITAL (MANIPULAÇÃO DO DOM)
// ==========================================================================

// Seleciona o formulário do quiz e a div oculta que exibirá os resultados
const formularioQuiz = document.getElementById('form-interativo');
const painelResultado = document.getElementById('bloco-resultado');

// Escuta o envio (submit) do formulário
formularioQuiz.addEventListener('submit', (evento) => {
    // Impede o comportamento padrão do navegador de recarregar a página ao enviar
    evento.preventDefault();

    // Captura os valores dos inputs do tipo radio que o estudante selecionou
    const resposta1 = document.querySelector('input[name="pergunta1"]:checked').value;
    const resposta2 = document.querySelector('input[name="pergunta2"]:checked').value;

    // Inicializa o contador de acertos
    let totalAcertos = 0;

    // Condicionais para checar as respostas corretas (definidas como "verdadeiro" no HTML)
    if (resposta1 === 'verdadeiro') {
        totalAcertos++;
    }
    
    if (resposta2 === 'verdadeiro') {
        totalAcertos++;
    }

    // Remove as classes utilitárias antigas para resetar o estado visual do painel
    painelResultado.classList.remove('hidden-element', 'success');
    
    // Adiciona a classe visual de sucesso para renderizar o layout com as cores neon corretas
    painelResultado.classList.add('success');

    // Altera o conteúdo HTML interno do painel dinamicamente com base no desempenho
    if (totalAcertos === 2) {
        painelResultado.innerHTML = `🎯 Incrível! Pontuação: 2/2. Sua percepção crítica e cidadania digital estão impecáveis contra ameaças de IA!`;
    } else {
        painelResultado.innerHTML = `⚠️ Pontuação: ${totalAcertos}/2. Atenção! Revise as diretrizes de combate para não propagar conteúdos e deepfakes falsos na rede.`;
    }
});
