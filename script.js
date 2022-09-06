function playStart(){
    menuPrincipal.classList.add("invisivel");
    telaDeJogo.classList.remove("invisivel");
}

function addPalavra(){
    menuPrincipal.classList.add("invisivel");
    telaPalavra.classList.remove("invisivel");
}

function giveUp(){
    telaDeJogo.classList.add("invisivel");
    menuPrincipal.classList.remove("invisivel");
}

function cancel(){
    telaPalavra.classList.add("invisivel");
    menuPrincipal.classList.remove("invisivel");
}

const menuPrincipal = document.querySelector(".menu-principal");
const play = document.getElementById("botao-iniciar");
const add = document.querySelector(".botao-negativo");

const telaDeJogo = document.querySelector(".jogo");
const novoJogo = document.getElementById("reiniciar");
const desistir = document.getElementsByClassName("botao-negativo")[1];

const telaPalavra = document.querySelector(".adicionar-palavra");
const salvarPalavra = document.getElementById("salvar");
const cancelar = document.getElementsByClassName("botao-negativo")[2];

/*navegando entre telas*/
play.onclick = playStart;
add.onclick = addPalavra;
desistir.onclick = giveUp;
cancelar.onclick = cancel;