// =============================================================================
// I. GESTÃO DE ESTADO E VARIÁVEIS GLOBAIS
// -----------------------------------------------------------------------------

// Assegura que o objeto 'licoes' (do seu etapa.js) esteja carregado.
// Se você está incluindo o etapa.js antes deste script, essa verificação é ok.
// ⚠️ ASSUMINDO que 'licoes' está disponível globalmente.

// =====================
// Progresso Geral
// =====================
if (!localStorage.getItem("progresso")) {
    localStorage.setItem("progresso", JSON.stringify({}));
}
let progresso = JSON.parse(localStorage.getItem("progresso"));

// =====================
// VARIÁVEIS GLOBAIS DO QUIZ
// =====================
let aguardandoConfirmacao = false; // Controla o fluxo de clique após resposta (Acerto/Erro).
let maxCoracoes = 5;
let coracoes = maxCoracoes;
let etapaAtual = 0;
let acertos = 0;
let etapas = []; // Onde as perguntas da lição atual serão carregadas.
let proximoNivelChave = ""; // Chave da próxima lição para desbloquear.

// =====================
// CONFIGURAÇÃO DE SONS (Caminhos podem precisar de ajuste)
// =====================
const somAcerto = new Audio("duolingo-correct.mp3");
const somErro = new Audio("duolingo-wrong.mp3");
const somFim = new Audio("duolingo-lesson-finished.mp3");

// =============================================================================
// II. FUNÇÕES GLOBAIS DE NAVEGAÇÃO
// -----------------------------------------------------------------------------

/**
 * Função de redirecionamento usada pela página principal de idiomas.
 */
function selecionarIdioma(idioma) {
    window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
}

// =============================================================================
// III. LÓGICA DO MAPA DE LIÇÕES (progresso.html)
// -----------------------------------------------------------------------------

if (window.location.pathname.includes("progresso.html")) {
    document.addEventListener('DOMContentLoaded', () => {

        const urlParams = new URLSearchParams(window.location.search);
        const idioma = urlParams.get("idioma");
        const titulo = document.getElementById("titulo-progresso");

        if (!idioma) {
            if (titulo) titulo.textContent = "Idioma não especificado.";
            return;
        }

        if (titulo) titulo.textContent = `Progresso em ${idioma}`;

        // Inicializa o progresso para o novo idioma ou carrega o existente.
        if (!progresso[idioma]) {
            // Usa as chaves do seu arquivo etapa.js para inicializar: licao1, licao2, etc.
            progresso[idioma] = {};
            
            // Cria a lista inicial de lições (ex: licao1, licao2, licao3)
            if (typeof licoes !== 'undefined' && licoes[idioma]) {
                 Object.keys(licoes[idioma]).forEach((key, i) => {
                     // Define a primeira lição como desbloqueada, as demais como bloqueadas.
                     progresso[idioma][key] = (i === 0) ? "desbloqueada" : "bloqueada";
                 });
            } else {
                 // Fallback se o licoes.js falhar, garante que o mapa pelo menos inicie.
                 progresso[idioma]["licao1"] = "desbloqueada";
                 progresso[idioma]["licao2"] = "bloqueada";
                 progresso[idioma]["licao3"] = "bloqueada";
            }
            
            localStorage.setItem("progresso", JSON.stringify(progresso));
        }

        const mapa = document.getElementById("mapa-licoes");
        if (!mapa) return;

        mapa.innerHTML = "";
        
        // Desenha as bolinhas de lição no mapa.
        // A chave aqui é o nome da lição (ex: "licao1", "licao2").
        Object.keys(progresso[idioma]).forEach((licaoChave, i) => {
            const div = document.createElement("div");
            div.className = `licao ${progresso[idioma][licaoChave]}`;
            // Usa o índice + 1 como número da lição no display.
            div.textContent = i + 1; 

            // Se a lição não estiver bloqueada, torna-a clicável.
            if (progresso[idioma][licaoChave] !== "bloqueada") {
                div.onclick = () => {
                    // Redireciona para o quiz, passando o nome da lição no parâmetro 'chave'.
                    window.location.href = `licaoIdioma.html?idioma=${encodeURIComponent(idioma)}&chave=${licaoChave}`;
                };
            }

            mapa.appendChild(div);
        });
    });
}

// =============================================================================
// IV. LÓGICA DO QUIZ (licaoIdioma.html)
// -----------------------------------------------------------------------------

if (window.location.pathname.includes("licaoIdioma.html")) {
    document.addEventListener('DOMContentLoaded', () => {

        function ocultarLoader() {
            const loader = document.getElementById('telaCarregamento');
            const mainContent = document.getElementById('telaLicao');

            if (loader) {
                // Oculta a tela de carregamento
                loader.style.display = 'none'; 
            }
            if (mainContent) {
                // Garante que o conteúdo principal (quiz) seja exibido.
                // Se ele estiver oculto no duolicao.css, isso o mostra.
                mainContent.style.display = 'flex'; // Use 'flex' ou 'block' dependendo do seu layout
            }
        }
        // -----------------------------------------------------------
        
        // 1. OBTENÇÃO DE PARÂMETROS E DADOS
        const urlParams = new URLSearchParams(window.location.search);
        const idioma = urlParams.get("idioma");
        // OBTÉM A CHAVE COMPLETA DA LIÇÃO (ex: "licao1", "licao2")
        const licaoChave = urlParams.get("chave"); 
        
        // Extrai o número da lição para exibição (ex: "licao1" -> "1")
        const numeroLicaoDisplay = licaoChave ? licaoChave.replace('licao', '') : 'Erro'; 

        const titulo = document.getElementById("titulo-licao");
        const container = document.getElementById("container");
        const confirmarBtn = document.getElementById("confirmar");
        const pularBtn = document.getElementById("pular");
        const sairBtn = document.getElementById("sair");
        const barraProgresso = document.getElementById("progresso");
        const coracoesContainer = document.getElementById("coracoes-container");

        if (titulo) titulo.textContent = `Lição ${numeroLicaoDisplay} de ${idioma}`;

        // 2. CARREGAMENTO DE ETAPAS (Ajustado para o seu etapa.js)
        if (typeof licoes === 'undefined' || !licoes[idioma] || !licoes[idioma][licaoChave]) {
            if (container) container.innerHTML = "<p>Idioma ou lição não encontrado.</p>";
            if (confirmarBtn) confirmarBtn.style.display = "none";
            if (pularBtn) pularBtn.style.display = "none";
            return;
        }

        // 🎯 CORREÇÃO CRUCIAL: Acessa o array de etapas aninhado.
        etapas = licoes[idioma][licaoChave].etapas;
        proximoNivelChave = licoes[idioma][licaoChave].proximoNivel;


        // 3. FUNÇÕES ESSENCIAIS DE ESTADO
        function atualizarCoracoes() {
            if (coracoesContainer) {
                coracoesContainer.innerHTML = "❤️".repeat(coracoes) + "🤍".repeat(maxCoracoes - coracoes);
            }
        }

        function perderCoracao() {
            if (coracoes > 0) {
                somErro.play().catch(e => console.error("Som Erro Falhou:", e));
                coracoes--;
                atualizarCoracoes();

                // === LÓGICA DE FALHA CRÍTICA ===
                if (coracoes === 0) {
                    alert("💡 É errando que se aprende! Você perdeu todos os corações e voltará ao mapa.");

                    // Marca a lição como BLOQUEADA no progresso e salva.
                    if (!progresso[idioma]) progresso[idioma] = {};
                    progresso[idioma][licaoChave] = "bloqueada";
                    localStorage.setItem("progresso", JSON.stringify(progresso));

                    // Redireciona para a tela de progresso (Mapa).
                    window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
                    return;
                }

                // Regenera um coração após 20 segundos
                setTimeout(() => {
                    if (coracoes < maxCoracoes) {
                        coracoes++;
                        atualizarCoracoes();
                    }
                }, 20000);
            }
        }

        // Inicializa visualmente.
        atualizarCoracoes();

        // 4. CARREGAMENTO DE ETAPA E RENDERIZAÇÃO

        function carregarEtapa() {

            // === LÓGICA DE FINALIZAÇÃO (SUCESSO) ===
            if (etapaAtual >= etapas.length) {
                somFim.play().catch(e => console.error("Som Final Falhou:", e));

                // 1. Marca lição atual como CONCLUÍDA
                if (!progresso[idioma]) progresso[idioma] = {};
                progresso[idioma][licaoChave] = "concluida";

                // 2. Desbloqueia a PRÓXIMA lição usando a chave `proximoNivel`
                if (proximoNivelChave !== "concluido" && progresso[idioma][proximoNivelChave]) {
                    progresso[idioma][proximoNivelChave] = "desbloqueada";
                }
                localStorage.setItem("progresso", JSON.stringify(progresso));

                // Display final
                const total = etapas.length;
                const percentual = Math.round((acertos / total) * 100);

                if (barraProgresso) barraProgresso.style.width = "100%";

                container.innerHTML = `
                    <h2>Você concluiu a Lição ${numeroLicaoDisplay}! ✅</h2>
                    <p>Acertos: ${acertos} de ${total} (${percentual}%)</p>
                    `;

                if (confirmarBtn) confirmarBtn.textContent = "Voltar ao Progresso";
                if (pularBtn) pularBtn.style.display = "none";

                // Redireciona de volta ao mapa ao clicar no botão final
                if (confirmarBtn) confirmarBtn.onclick = () => window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
                return;
            }

            // Lógica de Carregamento da Etapa Atual
            const progressoPercent = Math.round((etapaAtual / etapas.length) * 100);
            if (barraProgresso) barraProgresso.style.width = `${progressoPercent}%`;

            container.innerHTML = "";
            const etapa = etapas[etapaAtual];

            // Renderiza a Pergunta (usando a propriedade 'frase' da sua nova estrutura)
            const pergunta = document.createElement("h2");
            pergunta.textContent = etapa.frase;
            container.appendChild(pergunta);

            // Renderiza os botões de Opções
            etapa.opcoes.forEach(opcao => {
                const btn = document.createElement("button");
                btn.textContent = opcao;
                btn.onclick = (e) => {
                    // Lógica de seleção (desmarca o anterior e marca o atual).
                    document.querySelectorAll("#container button").forEach(b => {
                        b.style.background = "";
                        b.style.border = "";
                        b.removeAttribute("data-selecionado");
                    });
                    e.target.style.background = "lightblue";
                    e.target.dataset.selecionado = "true";
                };
                container.appendChild(btn);


            });
        }

        // 5. LÓGICA DE INTERAÇÃO (Botão Confirmar/Pular)

        if (confirmarBtn) confirmarBtn.onclick = () => {
            if (aguardandoConfirmacao) {
                // Se já respondido, o próximo clique avança a etapa.
                aguardandoConfirmacao = false;
                etapaAtual++;
                carregarEtapa();
                return;
            }

            const selecionado = document.querySelector("#container button[data-selecionado='true']");
            const etapa = etapas[etapaAtual];
            const botoes = document.querySelectorAll("#container button");

            // Se nada selecionado, trata como PULAR (com perda de vida).
            if (!selecionado) {
                // Destaca resposta correta
                botoes.forEach(btn => { 
                    if (btn.textContent === etapa.resposta) { // Usa 'resposta' do seu JSON
                        btn.style.background = "gold"; 
                    } 
                });
                alert(`Você pulou. A resposta correta era: "${etapa.resposta}"`);
                perderCoracao();
                aguardandoConfirmacao = true;
                return;
            }

            // Resposta correta
            if (selecionado.textContent === etapa.resposta) { // Usa 'resposta' do seu JSON
                somAcerto.play().catch(e => console.error("Som Acerto Falhou:", e));
                selecionado.style.background = "lightgreen";
                acertos++;
                aguardandoConfirmacao = true;
                return;
            }

            // Resposta incorreta
            selecionado.style.background = "red";

            // Destaca a resposta correta
            botoes.forEach(btn => {
                if (btn.textContent === etapa.resposta) { // Usa 'resposta' do seu JSON
                    btn.style.border = "2px solid gold";
                }
            });

            alert(`Você errou. A resposta correta era: "${etapa.resposta}"`);

            perderCoracao();
            aguardandoConfirmacao = true;
        };

        // Lógica do botão Pular (com perda de vida).
        if (pularBtn) pularBtn.onclick = () => {
            if (aguardandoConfirmacao) {
                // Se já houver um feedback, o clique avança.
                aguardandoConfirmacao = false;
                etapaAtual++;
                carregarEtapa();
                return;
            }
            // Simula um erro/pulo.
            const etapa = etapas[etapaAtual];
            const botoes = document.querySelectorAll("#container button");

            botoes.forEach(btn => {
                if (btn.textContent === etapa.resposta) { 
                    btn.style.background = "gold"; 
                } 
            });
            alert(`Você pulou. A resposta correta era: "${etapa.resposta}"`);
            perderCoracao();
            aguardandoConfirmacao = true;
        };

        // Lógica do botão Sair (volta para o mapa).
        if (sairBtn) sairBtn.onclick = () => {
            if (confirm("Tem certeza que deseja sair? Seu progresso nesta lição será perdido.")) {
                window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
            }
        };

        // Inicia o Quiz.
        carregarEtapa();

        ocultarLoader();
    });
}
