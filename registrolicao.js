/* ============================================================
   registroLicao.js
   Registra corretamente a última lição concluída pelo usuário
   sem interferir no script.js principal.
   ============================================================ */

// Obtém idioma salvo
const idioma = localStorage.getItem("idiomaEscolhido");
if (!idioma) {
    console.warn("Nenhum idioma detectado ao registrar lição.");
    return;
}

// Obtém a última lição concluída na tela final
const ultimaLicaoConcluida = localStorage.getItem(`${idioma}_ultimaLicaoConcluida`);

if (ultimaLicaoConcluida) {
    // Define como lição atual do idioma
    localStorage.setItem(`${idioma}_licaoAtual`, ultimaLicaoConcluida);
} else {
    console.warn("Nenhuma lição concluída foi encontrada para registrar.");
}
