const btnSortear = document.querySelector('.sortear');
const textarea = document.queryselector('.textarea');
const tagResultado= document.querySelector('.resultado p');
const popUpResultado =document.querySelector('.resultado')

function pegarDadosFormulario(){
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",");
    const tamanhoArray = listaNome.length;
    const posicaoNome = geraNumeroAleatorio(tamanhoArray);
    const nome = listaNomes[posicaoNome]

    mostraResultado(nome);
    textarea.value = ""

}
btnSortear.addEventListener("click, pegarDadosFormulario")

function geraNumeroAleatorio(tamanhoArray){
    return Math.floor(Math.random()*(tamanhoArray - 0)+0)
}
function mostraResultado(nome){
    tagResultado.innerHTML = `resultado: ${nome}`
    popUpResultado.classList.add("resultado");
}