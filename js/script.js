/* =================================================================

   ================================================================= */

document.addEventListener('DOMContentLoaded', function () {

    // 1) Intercepta o submit da busca (só para o protótipo não recarregar)
    const formBusca = document.querySelector('.busca__form');
    if (formBusca) {
        formBusca.addEventListener('submit', function (e) {
            e.preventDefault();
            const termo = document.getElementById('campo-busca').value.trim();
            if (termo === '') {
                alert('Digite algo para pesquisar.');
                return;
            }
            // No PHP futuro: o form já vai fazer o GET para buscar.php
            alert('Você buscou por: ' + termo + '\n(No PHP isto vai para buscar.php?s=' + encodeURIComponent(termo) + ')');
        });
    }

    // 2) Log simples para conferir se o JS carregou (útil no GitHub Pages)
    console.log('CLIC protótipo carregado ✔');
});


/**
 * Função para abrir link com confirmação de saída do protótipo
 * @param {string} url - URL para onde o usuário será redirecionado
 * @param {string} mensagem - (opcional) mensagem personalizada
 * @returns {boolean} - false para prevenir navegação padrão
 */
function confirmarSaida(url, mensagem) {
    if (!url || url === '#') {
        alert('Este link ainda não foi configurado no protótipo.');
        return false;
    }

    const msgPadrao = 'Você está saindo do ambiente de protótipo e acessando o site oficial.\nDeseja continuar?';
    const confirmar = confirm(mensagem || msgPadrao);

    if (confirmar) {
        window.open(url, '_blank'); // abre em nova aba
        // ou use window.location.href = url; para abrir na mesma aba
    }
    return false;
}