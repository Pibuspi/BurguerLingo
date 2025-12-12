/* ============================================================
   script.js - Burguer Lingo
   ============================================================ */

/* ---------------------------
   CONFIG DE PERSONAGENS
   --------------------------- */
const personagens = [
  { parado: "henrique.jpeg", feliz: "henriquefeliz.mp4", erro: "henriquetriste.mp4" },
  { parado: "eude.jpeg", feliz: "eudefeliz.mp4", erro: "eudetriste.mp4" },
  { parado: "milena.jpeg", feliz: "milenafeliz.mp4", erro: "milenatriste.mp4" }
];

const cupomPorLicao = {
  licao1: "DESCONTO5",
  licao2: "DESCONTO10",
  licao3: "DESCONTO15"
};

/* ---------------------------
   UTILITÁRIOS
   --------------------------- */
function getStorageJson(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}
function setStorageJson(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

/* ---------------------------
   ESTADO INICIAL
   --------------------------- */
const idiomaEscolhido = localStorage.getItem("idiomaEscolhido");
if (!idiomaEscolhido) {
  alert("Nenhum idioma selecionado.");
  window.location.href = "pagina_das_licoes.html";
}

let licaoAtualId = localStorage.getItem(`${idiomaEscolhido}_licaoAtual`) || "licao1";

if (!licoes || !licoes[idiomaEscolhido]) {
  alert("Lições não encontradas.");
  window.location.href = "pagina_das_licoes.html";
}

function obterLicoesDoNivel(licaoId) {
  return licoes[idiomaEscolhido][licaoId];
}

/* ---------------------------
   DOM
   --------------------------- */
const telaCarregamento = document.getElementById("telaCarregamento");
const telaLicao = document.getElementById("telaLicao");
const personagemImg = document.getElementById("personagemImg");
const personagemAnim = document.getElementById("personagemAnim");
const fraseEl = document.getElementById("frase");
const linhaEl = document.getElementById("linha");
const opcoesEl = document.getElementById("opcoes");
const progressoEl = document.getElementById("progresso");
const coracoesContainer = document.getElementById("coracoes-container");
const btnConfirmar = document.getElementById("btnConfirmar");
const btnPular = document.getElementById("pular");

/* ---------------------------
   ESTADO DA LIÇÃO
   --------------------------- */
let personagemAtual = personagens[Math.floor(Math.random() * personagens.length)];
let etapaIndex = parseInt(localStorage.getItem(`${idiomaEscolhido}_${licaoAtualId}_etapa`) || "0", 10);
let vidas = parseInt(localStorage.getItem(`${idiomaEscolhido}_${licaoAtualId}_vidas`) || "5", 10);

/* ---------------------------
   ÁUDIOS (corrigido)
   --------------------------- */
const somAcerto = new Audio("duolingo-correct.mp3");
const somErro = new Audio("duolingo-wrong.mp3");
const somFim = new Audio("duolingo-lesson-finished.mp3");

/* --- DESBLOQUEIO DE ÁUDIO REAL --- */
document.body.addEventListener("click", () => {
  somAcerto.volume = 0.01;
  somErro.volume = 0.01;
  somFim.volume = 0.01;

  somAcerto.play().catch(()=>{});
  somErro.play().catch(()=>{});
  somFim.play().catch(()=>{});

  setTimeout(() => {
    somAcerto.pause(); somErro.pause(); somFim.pause();
    somAcerto.currentTime = 0; somErro.currentTime = 0; somFim.currentTime = 0;

    somAcerto.volume = 1;
    somErro.volume = 1;
    somFim.volume = 1;
  }, 60);
}, { once: true });

/* ---------------------------
   INICIALIZAÇÃO
   --------------------------- */
function init() {
  if (telaCarregamento) telaCarregamento.style.display = "flex";
  if (telaLicao) telaLicao.style.display = "none";

  setTimeout(() => {
    if (telaCarregamento) telaCarregamento.style.display = "none";
    if (telaLicao) telaLicao.style.display = "block";

    carregarLicaoAtual();
  }, 400);
}
window.addEventListener("load", init);

/* ---------------------------
   PERSONAGEM
   --------------------------- */
function mostrarPersonagemParado() {
  personagemAnim.pause();
  personagemAnim.removeAttribute("src");
  personagemAnim.style.display = "none";
  personagemImg.src = personagemAtual.parado;
  personagemImg.style.display = "block";
}

function tocarAnimacao(tipo) {
  const src = (tipo === "feliz") ? personagemAtual.feliz : personagemAtual.erro;
  if (!src) return;

  personagemImg.style.display = "none";
  personagemAnim.style.display = "block";
  personagemAnim.src = src;
  personagemAnim.load();
  personagemAnim.play().catch(()=>{});
}

/* ---------------------------
   CARREGAR LIÇÃO
   --------------------------- */
function carregarLicaoAtual() {
  const nivel = obterLicoesDoNivel(licaoAtualId);
  const etapas = nivel.etapas;

  if (etapaIndex >= etapas.length) {
    concluirLicaoComSucesso();
    return;
  }

  renderEtapa();
  atualizarHUD();
}

/* ---------------------------
   RENDER ETAPA
   --------------------------- */
function renderEtapa() {
  const nivel = obterLicoesDoNivel(licaoAtualId);
  const etapa = nivel.etapas[etapaIndex];

  fraseEl.innerText = etapa.frase || "";
  linhaEl.innerText = "___";

  opcoesEl.innerHTML = "";
  etapa.opcoes.forEach(op => {
    const b = document.createElement("button");
    b.className = "opcao";
    b.innerText = op;

    b.addEventListener("click", () => {
      document.querySelectorAll(".opcao").forEach(x => x.classList.remove("selecionada"));
      b.classList.add("selecionada");
      linhaEl.innerText = b.innerText;
    });

    opcoesEl.appendChild(b);
  });

  mostrarPersonagemParado();
  btnConfirmar.disabled = false;
}

/* ---------------------------
   CONFIRMAR
   --------------------------- */
btnConfirmar.addEventListener("click", () => {
  const selecionada = document.querySelector(".opcao.selecionada");
  if (!selecionada) return;
  btnConfirmar.disabled = true;

  const nivel = obterLicoesDoNivel(licaoAtualId);
  const etapa = nivel.etapas[etapaIndex];

  const escolhida = selecionada.innerText;
  const correta = etapa.resposta;

  // ACERTO
  if (escolhida === correta) {
    selecionada.classList.add("correta");
    somAcerto.play();           // <-- SOM DE ACERTO
    tocarAnimacao("feliz");

    personagemAnim.onended = () => {
      mostrarPersonagemParado();
      etapaIndex++;
      salvarEstado();

      if (etapaIndex >= nivel.etapas.length) {
        concluirLicaoComSucesso();
      } else {
        renderEtapa();
      }
    };

    return;
  }

  // ERRO
  selecionada.classList.add("errada");
  somErro.play();              // <-- SOM DE ERRO
  tocarAnimacao("erro");

  personagemAnim.onended = () => {
    mostrarPersonagemParado();
    vidas--;
    salvarEstado();

    if (vidas <= 0) {
      concluirLicaoComFalha();
    } else {
      renderEtapa();
    }
  };
});

/* ---------------------------
   PULAR
   --------------------------- */
btnPular.addEventListener("click", () => {
  const nivel = obterLicoesDoNivel(licaoAtualId);
  etapaIndex++;
  salvarEstado();

  if (etapaIndex >= nivel.etapas.length) {
    concluirLicaoComSucesso();
  } else {
    renderEtapa();
  }
});

/* ---------------------------
   SALVAR HUD
   --------------------------- */
function salvarEstado() {
  localStorage.setItem(`${idiomaEscolhido}_${licaoAtualId}_etapa`, etapaIndex);
  localStorage.setItem(`${idiomaEscolhido}_${licaoAtualId}_vidas`, vidas);
}

function atualizarHUD() {
  let html = "";
  for (let i = 0; i < vidas; i++) html += "❤️";
  for (let i = vidas; i < 5; i++) html += "🤍";
  coracoesContainer.innerText = html;

  const nivel = obterLicoesDoNivel(licaoAtualId);
  const pct = Math.round((etapaIndex / nivel.etapas.length) * 100);
  progressoEl.style.width = `${pct}%`;
}

/* ---------------------------
   FINALIZAÇÃO DA LIÇÃO
   --------------------------- */
function concluirLicaoComSucesso() {
  somFim.play();            // <-- SOM DE FINALIZAÇÃO

  localStorage.setItem(`${idiomaEscolhido}_ultimaLicaoConcluida`, licaoAtualId);

  let cupons = JSON.parse(localStorage.getItem("cupons")) || [];
  cupons.push({
    codigo: cupomPorLicao[licaoAtualId],
    licao: licaoAtualId,
    idioma: idiomaEscolhido,
    usado: false
  });
  localStorage.setItem("cupons", JSON.stringify(cupons));

  const nivel = obterLicoesDoNivel(licaoAtualId);
  const proximo = nivel.proximoNivel;
  if (proximo && proximo !== "concluido") {
    localStorage.setItem(`${idiomaEscolhido}_${proximo}_unlocked`, "true");
  }

  window.location.href = "telafinal.html";
}

function concluirLicaoComFalha() {
  window.location.href = "telademalfim.html";
}

/* ---------------------------
   RECUPERAR ESTADO
   --------------------------- */
(function carregarEstadoInicial() {
  etapaIndex = parseInt(localStorage.getItem(`${idiomaEscolhido}_${licaoAtualId}_etapa`) || "0", 10);
  vidas = parseInt(localStorage.getItem(`${idiomaEscolhido}_${licaoAtualId}_vidas`) || "5", 10);
})();
