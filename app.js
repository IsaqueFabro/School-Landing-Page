// variaveis para os elementos das setas e cards
var setaEsquerda = window.document.getElementById("seta-esquerda");
var setaDireita = window.document.getElementById("seta-direita");
var leonardo = window.document.getElementById('leonardo');
var samantha = window.document.getElementById('samantha');
var bruna = window.document.getElementById('bruna');

// funcao para rolar para a direita (mostrar bruna e esconder leonardo)
function RolarParaDireita() {
    leonardo.style ="display: none"; // esconde leonardo
    bruna.style ="display: flex"; // mostra bruna
    setaDireita.style ="display: none"; // esconde seta direita
    setaEsquerda.style ="display: flex; margin-top: 50%"; // mostra seta esquerda
}

// funcao para rolar para a esquerda (mostrar leonardo e esconder bruna)
function RolarParaEsquerda(){
    bruna.style ="display: none"; // esconde bruna
    leonardo.style ="display: flex"; // mostra leonardo
    setaDireita.style ="display: flex; margin-top: 50%"; // mostra seta direita
    setaEsquerda.style ="display: none"; // esconde seta esquerda
}