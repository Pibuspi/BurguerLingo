// script.js — Versão corrigida e mais robusta
// Requisitos: garantir que etapas.js seja incluído antes deste script (seu HTML faz isso).
// Funcionalidades: mapa de lições (progresso.html) + quiz (licaoIdioma.html)

// Encapsula tudo para evitar poluir global
(() => {
  'use strict';

  // --- Utilidades ---
  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const safeText = v => (v === null || v === undefined) ? '' : String(v);
  const normalize = s => safeText(s).trim().toLowerCase();

  // --- Persistência de progresso ---
  const loadProgresso = () => {
    try {
      const raw = localStorage.getItem('progresso');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Erro lendo progresso do localStorage', e);
      return {};
    }
  };
  const saveProgresso = (obj) => {
    try { localStorage.setItem('progresso', JSON.stringify(obj)); }
    catch (e) { console.error('Erro salvando progresso', e); }
  };

  let progresso = loadProgresso();

  // --- Áudios (opcional — falha silenciosa se não existir) ---
  const tryAudio = (path) => {
    try {
      return new Audio(path);
    } catch (e) {
      console.warn('Audio não disponível:', path, e);
      return null;
    }
  };
  const somAcerto = tryAudio('duolingo-correct.mp3');
  const somErro = tryAudio('duolingo-wrong.mp3');
  const somFim = tryAudio('duolingo-lesson-finished.mp3');

  // --- Função comum para esconder loader (sempre chamar quando terminar) ---
  function ocultarLoader() {
    const loader = document.getElementById('telaCarregamento');
    const mainContent = document.getElementById('telaLicao');
    if (loader) loader.style.display = 'none';
    if (mainContent) mainContent.style.display = getComputedStyle(mainContent).display === 'none' ? 'flex' : getComputedStyle(mainContent).display;
  }

  // --- FUNÇÕES: Progresso / Mapa (progresso.html) ---
  function initProgressoPage() {
    document.addEventListener('DOMContentLoaded', () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const idioma = urlParams.get('idioma');

        const titulo = document.getElementById('titulo-progresso');
        const mapa = document.getElementById('mapa-licoes');

        if (!idioma) {
          if (titulo) titulo.textContent = 'Idioma não especificado.';
          if (mapa) mapa.innerHTML = '<p>Escolha um idioma no menu.</p>';
          return;
        }

        if (titulo) titulo.textContent = `Progresso em ${idioma}`;

        // Inicializa estrutura de progresso para o idioma se precisar
        if (!progresso[idioma]) {
          progresso[idioma] = {};
          if (typeof licoes !== 'undefined' && licoes[idioma]) {
            Object.keys(licoes[idioma]).forEach((key, i) => {
              progresso[idioma][key] = (i === 0) ? 'desbloqueada' : 'bloqueada';
            });
          } else {
            // fallback simples
            progresso[idioma] = { 'licao1': 'desbloqueada' };
          }
          saveProgresso(progresso);
        }

        if (!mapa) return;
        mapa.innerHTML = '';

        Object.keys(progresso[idioma]).forEach((licaoChave, i) => {
          const div = document.createElement('div');
          div.className = `licao ${progresso[idioma][licaoChave]}`;
          div.textContent = i + 1;
          if (progresso[idioma][licaoChave] !== 'bloqueada') {
            div.style.cursor = 'pointer';
            div.addEventListener('click', () => {
              window.location.href = `licaoIdioma.html?idioma=${encodeURIComponent(idioma)}&chave=${encodeURIComponent(licaoChave)}`;
            });
          } else {
            div.title = 'Bloqueada';
          }
          mapa.appendChild(div);
        });

      } catch (err) {
        console.error('Erro initProgressoPage:', err);
      }
    });
  }

  // --- FUNÇÕES: Lição / Quiz (licaoIdioma.html) ---
  function initLicaoPage() {
    if (!document.getElementById) return; // proteção

    document.addEventListener('DOMContentLoaded', () => {
      // Elementos chave
      const container = document.getElementById('container');
      const confirmarBtn = document.getElementById('confirmar');
      const pularBtn = document.getElementById('pular');
      const sairBtn = document.getElementById('sair');
      const barraProgresso = document.getElementById('progresso');
      const coracoesContainer = document.getElementById('coracoes-container');
      const telaFinal = document.getElementById('telaFinal');

      // Ler params e definir fallback seguros
      const urlParams = new URLSearchParams(window.location.search);
      const idiomaParam = urlParams.get('idioma') || localStorage.getItem('idioma') || null;
      const licaoChaveParam = urlParams.get('chave') || 'licao1';

      const idioma = idiomaParam;
      const licaoChave = licaoChaveParam;

      // Se licoes (dados) não existir, mostra mensagem e retorna (mas sempre esconde loader)
      if (typeof licoes === 'undefined') {
        if (container) container.innerHTML = '<p>Dados das lições (etapas.js) não carregados.</p>';
        ocultarLoader();
        return;
      }

      if (!idioma || !licoes[idioma] || !licoes[idioma][licaoChave]) {
        if (container) {
          container.innerHTML = `<p>Idioma ou lição não encontrada. (idioma="${idioma}", chave="${licaoChave}")</p>
            <p><a href="pagina_das_licoes.html">Voltar ao menu de idiomas</a></p>`;
        }
        if (confirmarBtn) confirmarBtn.style.display = "none";
        if (pularBtn) pularBtn.style.display = "none";
        ocultarLoader();
        return;
      }

      // Carregar etapas
      let etapas = Array.isArray(licoes[idioma][licaoChave].etapas) ? licoes[idioma][licaoChave].etapas : [];
      const proximoNivelChave = licoes[idioma][licaoChave].proximoNivel || null;

      // Estado do quiz
      let etapaAtual = 0;
      let acertos = 0;
      let aguardandoConfirmacao = false;
      const maxCoracoes = 5;
      let coracoes = maxCoracoes;

      // Inicial UI
      function atualizarCoracoes() {
        if (!coracoesContainer) return;
        coracoesContainer.innerHTML = '';
        for (let i = 0; i < coracoes; i++) {
          const s = document.createElement('span');
          s.textContent = '❤️';
          s.style.marginRight = '4px';
          coracoesContainer.appendChild(s);
        }
        for (let i = 0; i < (maxCoracoes - coracoes); i++) {
          const s = document.createElement('span');
          s.textContent = '🤍';
          s.style.marginRight = '4px';
          coracoesContainer.appendChild(s);
        }
      }

      function perderCoracao() {
        if (coracoes <= 0) return;
        if (somErro) somErro.play().catch(()=>{});
        coracoes--;
        atualizarCoracoes();
        if (coracoes <= 0) {
          // marca bloqueada e volta pro mapa
          if (!progresso[idioma]) progresso[idioma] = {};
          progresso[idioma][licaoChave] = 'bloqueada';
          saveProgresso(progresso);
          alert('Você perdeu todos os corações. Voltando ao mapa.');
          window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
        } else {
          // recupera 1 coração depois de 20s
          setTimeout(() => {
            if (coracoes < maxCoracoes) { coracoes++; atualizarCoracoes(); }
          }, 20000);
        }
      }

      function atualizarBarra() {
        if (!barraProgresso) return;
        const pct = Math.round((etapaAtual / Math.max(1, etapas.length)) * 100);
        barraProgresso.style.width = `${pct}%`;
      }

      function limparContainer() {
        if (!container) return;
        container.innerHTML = '';
      }

      function renderEtapa() {
        if (!container) return;
        limparContainer();

        if (etapaAtual >= etapas.length) {
          // finalizou
          if (somFim) somFim.play().catch(()=>{});
          if (!progresso[idioma]) progresso[idioma] = {};
          progresso[idioma][licaoChave] = 'concluida';
          // desbloqueia próxima
          if (proximoNivelChave && proximoNivelChave !== 'concluido') {
            if (!progresso[idioma]) progresso[idioma] = {};
            progresso[idioma][proximoNivelChave] = 'desbloqueada';
          }
          saveProgresso(progresso);

          const total = etapas.length;
          const percentual = total === 0 ? 0 : Math.round((acertos / total) * 100);
          if (barraProgresso) barraProgresso.style.width = '100%';
          container.innerHTML = `
            <h2>Você concluiu a Lição!</h2>
            <p>Acertos: ${acertos} de ${total} (${percentual}%)</p>
            <p><button id="voltarMapa">Voltar ao Progresso</button></p>
          `;
          const voltarBtn = qs('#voltarMapa', container);
          if (voltarBtn) voltarBtn.addEventListener('click', () => {
            window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
          });
          if (confirmarBtn) {
            confirmarBtn.textContent = 'Voltar ao Progresso';
            confirmarBtn.onclick = () => window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
          }
          if (pularBtn) pularBtn.style.display = 'none';
          if (telaFinal) telaFinal.style.display = 'block';
          return;
        }

        // Render passo atual
        const etapa = etapas[etapaAtual];
        const pergunta = document.createElement('h2');
        pergunta.textContent = etapa && etapa.frase ? etapa.frase : 'Pergunta indisponível';
        container.appendChild(pergunta);

        // Opções
        const opcoesWrap = document.createElement('div');
        opcoesWrap.className = 'opcoes-wrap';
        if (Array.isArray(etapa.opcoes) && etapa.opcoes.length) {
          etapa.opcoes.forEach((op) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'opcao';
            btn.textContent = op;
            btn.style.display = 'block';
            btn.style.margin = '6px 0';
            btn.addEventListener('click', () => {
              // desmarca todas
              qsa('.opcao', container).forEach(b => {
                b.classList.remove('selecionada');
                b.style.background = '';
              });
              btn.classList.add('selecionada');
              btn.style.background = 'lightblue';
              // habilita confirmar
              if (confirmarBtn) confirmarBtn.disabled = false;
            });
            opcoesWrap.appendChild(btn);
          });
        } else {
          const info = document.createElement('p');
          info.textContent = 'Esta etapa não possui opções.';
          opcoesWrap.appendChild(info);
        }
        container.appendChild(opcoesWrap);

        atualizarBarra();
        // reset estado de confirmação
        aguardandoConfirmacao = false;
        if (confirmarBtn) confirmarBtn.disabled = true;
      }

      // Handlers botões
      if (confirmarBtn) {
        confirmarBtn.addEventListener('click', () => {
          try {
            if (aguardandoConfirmacao) {
              etapaAtual++;
              renderEtapa();
              return;
            }

            const selecionado = qs('.opcao.selecionada', container);
            const etapa = etapas[etapaAtual] || {};
            const respostaCorreta = etapa.resposta;

            // Se nada selecionado: tratar como pular
            if (!selecionado) {
              qsa('.opcao', container).forEach(b => {
                if (b.textContent === respostaCorreta) b.style.background = 'gold';
              });
              alert(`Você pulou. A resposta correta era: "${respostaCorreta}"`);
              perderCoracao();
              aguardandoConfirmacao = true;
              return;
            }

            // comparar normalizado
            const escolhido = normalize(selecionado.textContent);
            const correto = normalize(respostaCorreta);

            if (escolhido === correto) {
              if (somAcerto) somAcerto.play().catch(()=>{});
              selecionado.style.background = 'lightgreen';
              acertos++;
              aguardandoConfirmacao = true;
              return;
            } else {
              // incorreto
              selecionado.style.background = 'red';
              qsa('.opcao', container).forEach(b => {
                if (normalize(b.textContent) === correto) {
                  b.style.outline = '3px solid gold';
                }
              });
              alert(`Você errou. A resposta correta era: "${respostaCorreta}"`);
              perderCoracao();
              aguardandoConfirmacao = true;
              return;
            }
          } catch (err) {
            console.error('Erro no confirmarBtn click:', err);
          }
        });
      }

      if (pularBtn) {
        pularBtn.addEventListener('click', () => {
          if (aguardandoConfirmacao) {
            aguardandoConfirmacao = false;
            etapaAtual++;
            renderEtapa();
            return;
          }
          // mostra correta e perde coracao
          const etapa = etapas[etapaAtual] || {};
          qsa('.opcao', container).forEach(b => {
            if (b.textContent === etapa.resposta) b.style.background = 'gold';
          });
          alert(`Você pulou. A resposta correta era: "${etapa.resposta}"`);
          perderCoracao();
          aguardandoConfirmacao = true;
        });
      }

      if (sairBtn) {
        sairBtn.addEventListener('click', () => {
          const ok = confirm('Tem certeza que deseja sair? Seu progresso nesta lição será perdido.');
          if (ok) window.location.href = `progresso.html?idioma=${encodeURIComponent(idioma)}`;
        });
      }

      // Inicial
      atualizarCoracoes();
      renderEtapa();

      // Garantir que loader suma mesmo se algo deu errado acima
      ocultarLoader();
    });
  }

  // --- Roteamento simples baseado no pathname (funciona com file:// e http) ---
  const path = (window.location.pathname || '').toLowerCase();
  if (path.includes('progresso.html') || window.location.href.toLowerCase().includes('progresso.html')) {
    initProgressoPage();
  }
  if (path.includes('licaoi') || path.includes('licaoidioma.html') || window.location.href.toLowerCase().includes('licaoidioma.html')) {
    // aceita variações
    initLicaoPage();
  } else {
    // Também inicializa licao se for exatamente licaoIdioma.html sem path
    if (window.location.href.toLowerCase().includes('licaoidioma.html')) initLicaoPage();
  }

  // fallback: se a página é licaoIdioma mas a checagem acima falhar por algum motivo,
  // ainda tenta inicializar (segurança)
  if (window.location.href.toLowerCase().includes('licaoidioma.html') && typeof initLicaoPage === 'function') {
    initLicaoPage();
  }

})(); // fim IIFE
