/* 
OBJETIVO 1 - quando o usuario clicar no botão de ver trailer, devemos abrir a modal com o video do trailer.
    passo 1 - pegar o elemento que representa o botão na tela usando o js.
    passo 2 - identificar quando o usuario clicar no botão.
    passo 3 - pegar o elemento da modal no js.
    passo 4 - abrir a modal na tela.

OBJETIVO 2 - quando o usuario clicar no 'X' devemos fechar a modal.
    passo 1 - pegar o elemento de fechar modal usando o js.
    passo 2 - identificar quando o usuario clicar no X.
    passo 3 - fechar a modal.
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk");
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", " ");
});

