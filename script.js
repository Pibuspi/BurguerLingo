// =====================
// Progresso por idioma no localStorage
// =====================
if (!localStorage.getItem("progresso")) {
  localStorage.setItem("progresso", JSON.stringify({}));
}
let progresso = JSON.parse(localStorage.getItem("progresso"));

// =====================
// PROGRESSO.HTML → Mostrar mapa de lições
// =====================
if (window.location.pathname.includes("progresso.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const idioma = urlParams.get("idioma");
  const titulo = document.getElementById("titulo-progresso");

  if (!idioma) {
    titulo.textContent = "Idioma não especificado.";
  } else {
    titulo.textContent = `Progresso em ${idioma}`;

    if (!progresso[idioma]) {
      progresso[idioma] = {
        licao1: "desbloqueada",
        licao2: "bloqueada",
        licao3: "bloqueada"
      };
      localStorage.setItem("progresso", JSON.stringify(progresso));
    }

    const mapa = document.getElementById("mapa-licoes");
    mapa.innerHTML = "";

    Object.keys(progresso[idioma]).forEach((licao, i) => {
      const div = document.createElement("div");
      div.className = `licao ${progresso[idioma][licao]}`;
      div.textContent = i + 1;

      if (progresso[idioma][licao] !== "bloqueada") {
        div.onclick = () => {
          window.location.href = licaoIdioma.html?idioma=${encodeURIComponent(idioma)}&numero=${i + 1}`;
        };
      }

      mapa.appendChild(div);
    });
  }
}

// =====================
// LIÇÃO.HTML → Carregar etapas da lição com progresso e corações
// =====================
if (window.location.pathname.includes("licaoIdioma.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const idioma = urlParams.get("idioma");
  const numero = urlParams.get("numero");

  const titulo = document.getElementById("titulo-licao");
  titulo.textContent = `Lição ${numero} de ${idioma}`;

  const container = document.getElementById("container");
  const confirmarBtn = document.getElementById("confirmar");
  const pularBtn = document.getElementById("pular");
  const sairBtn = document.getElementById("sair");
  const barraProgresso = document.getElementById("progresso");
  const coracoesContainer = document.getElementById("coracoes-container");

  const maxCoracoes = 5;
  let coracoes = maxCoracoes;
  let etapaAtual = 0;
  let acertos = 0;

  function atualizarCoracoes() {
    coracoesContainer.innerHTML = "❤️".repeat(coracoes) + "🤍".repeat(maxCoracoes - coracoes);
  }

  // === ALTERAÇÃO AQUI: Função perderCoracao atualizada para bloquear lição e voltar ao progresso quando coracoes=0 ===
  function perderCoracao() {
    if (coracoes > 0) {
      coracoes--;
      atualizarCoracoes();

      // Se perdeu todos os corações, bloqueia lição e volta à tela de progresso
      if (coracoes === 0) {
        alert("💡 É errando que se aprende!");

        // Marca a lição como BLOQUEADA no progresso
        if (!progresso[idioma]) progresso[idioma] = {};
        progresso[idioma][`licao${numero}`] = "bloqueada";
        localStorage.setItem("progresso", JSON.stringify(progresso));

        // Redireciona para a tela de progresso
        window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
        return;
      }

      // Regenera um coração após 10 segundos
      setTimeout(() => {
        if (coracoes < maxCoracoes) {
          coracoes++;
          atualizarCoracoes();
        }
      }, 20000);
    }
  }
  // === FIM ALTERAÇÃO perderCoracao ===

  atualizarCoracoes();

  // Dados das lições por idioma
  const licoes = {
    Italiano: [
      { pergunta: "Io", opcoes: ["eu", "jarro", "ele", "lugar"], correta: "eu" },
      { pergunta: "mangio", opcoes: ["como", "bebê", "corre", "pula"], correta: "como" },
      { pergunta: "ici", opcoes: ["aqui", "ali", "lá", "ontem"], correta: "aqui" },
      { pergunta: "Io mangio ___", opcoes: ["qui", "hamburger", "Io"], correta: "qui" },
      { pergunta: "___ mangio qui", opcoes: ["Io", "Lui", "Lei"], correta: "Io" }
    ],
    Francês: [
      { pergunta: "je", opcoes: ["eu", "jarro", "ele", "lugar"], correta: "eu" },
      { pergunta: "je mange ___", opcoes: ["ici", "hamburger", "je"], correta: "hamburger" },
      { pergunta: "bonjour", opcoes: ["bom dia", "adeus", "tchau"], correta: "bom dia" }
    ]
  };

  const etapas = licoes[idioma];
  if (!etapas) {
    container.innerHTML = "<p>Idioma ou lição não encontrado.</p>";
    confirmarBtn.style.display = "none";
    pularBtn.style.display = "none";
    throw new Error("Idioma ou lição não encontrado.");
  }

  function carregarEtapa() {
    if (etapaAtual >= etapas.length) {
      const total = etapas.length;
      const percentual = Math.max(0, Math.round((acertos / total) * 100));
      const desconto = Math.round((percentual / 100) * 25);

      if (!progresso[idioma]) progresso[idioma] = {};
      progresso[idioma][`licao${numero}`] = "concluida";

      const proxima = `licao${parseInt(numero) + 1}`;
      if (!progresso[idioma][proxima]) {
        progresso[idioma][proxima] = "desbloqueada";
      }

      localStorage.setItem("progresso", JSON.stringify(progresso));


      barraProgresso.style.width = "100%";
      
      container.innerHTML = `
        <h2>Você concluiu a lição ${numero}! ✅</h2>
        <p>Acertos: ${acertos} de ${total} (${percentual}%)</p>
        <p>Parabéns! Você ganhou -${desconto}% de desconto 🎉</p>
        `;

      confirmarBtn.textContent = "Voltar ao Progresso";
      pularBtn.style.display = "none";
      confirmarBtn.onclick = () => window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
      return;
    }

    // Atualiza barra de progresso
    const progressoPercent = Math.round((etapaAtual / etapas.length) * 100);
    barraProgresso.style.width = `${progressoPercent}%`;

    container.innerHTML = "";
    const etapa = etapas[etapaAtual];
    const pergunta = document.createElement("h2");
    pergunta.textContent = etapa.pergunta;
    container.appendChild(pergunta);

    etapa.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.onclick = () => {
        document.querySelectorAll("#container button").forEach(b => {
          b.style.background = "";
          b.style.border = "";
          b.removeAttribute("data-selecionado");
        });
        btn.style.background = "lightblue";
        btn.dataset.selecionado = "true";
      };
      container.appendChild(btn);
    });
  }

  // === ALTERAÇÃO AQUI: confirmarBtn.onclick atualizado para controle de confirmação com alertas e corações ===
  let aguardandoConfirmacao = false; // controla se estamos esperando o clique para avançar após resposta

  confirmarBtn.onclick = () => {
    // Se já respondeu e aguarda confirmação para próxima etapa
    if (aguardandoConfirmacao) {
      aguardandoConfirmacao = false;
      etapaAtual++;
      carregarEtapa();
      return;
    }

    const selecionado = document.querySelector("#container button[data-selecionado='true']");
    const etapa = etapas[etapaAtual];
    const botoes = document.querySelectorAll("#container button");

    // Se nenhuma opção selecionada → pular
    if (!selecionado) {
      // Destaca resposta correta em amarelo
      botoes.forEach(btn => {
        if (btn.textContent === etapa.correta) {
          btn.style.background = "gold";
          btn.style.color = "black"; // para contraste
        }
      });

      alert(`Você pulou. A resposta correta era: "${etapa.correta}"`);

      perderCoracao();
      aguardandoConfirmacao = true; // espera o próximo clique para avançar
      return;
    }

    // Resposta correta
    if (selecionado.textContent === etapa.correta) {
      selecionado.style.background = "lightgreen";
      acertos++;
      aguardandoConfirmacao = true;
      return;
    }

    // Resposta incorreta
    selecionado.style.background = "red";

    // Destaca a resposta correta com borda dourada
    botoes.forEach(btn => {
      if (btn.textContent === etapa.correta) {
        btn.style.border = "2px solid gold";
      }
    });

    alert(`Você errou. A resposta correta era: "${etapa.correta}"`);

    perderCoracao();
    aguardandoConfirmacao = true;
  };
  // === FIM ALTERAÇÃO confirmarBtn.onclick ===

  // Atualizo pularBtn.onclick para usar a mesma lógica do confirmarBtn, mantendo controle e alerta
  pularBtn.onclick = () => {
    const etapa = etapas[etapaAtual];
    const botoes = document.querySelectorAll("#container button");

    // Destaca resposta correta em amarelo
    botoes.forEach(btn => {
      if (btn.textContent === etapa.correta) {
        btn.style.background = "gold";
        btn.style.color = "black";
      }
    });

    alert(`Você pulou. A resposta correta era: "${etapa.correta}"`);

    perderCoracao();
    aguardandoConfirmacao = true;
  };

  sairBtn.onclick = () => {
    if (confirm("Tem certeza que deseja sair da lição? Seu progresso atual será perdido.")) {
      window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
    }
  };

  carregarEtapa();
}

