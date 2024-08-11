/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes =document.querySelectorAll(".informacoes");


//passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao , indice) => {
    botao.addEventListener("click", () =>{

        desativarobotaoselecionado();
        marcarbotaoSelecionado(botao);
        esconderimagemAtiva();
        mostrarimagemFundo(indice);
        esondendoinformacoesAtiva();
        mostrarinformacoesAtiva(indice);
    });
});

function marcarbotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarinformacoesAtiva(indice) {
    informacoes[indice].classList.add("ativa");
}

function esondendoinformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarimagemFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderimagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarobotaoselecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
