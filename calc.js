let calculo = null;
let resultado = 0;
let idAtivo = null;


function Digitar(valor) {
    console.log(valor)
    var visor = document.getElementById('visor');

    if ( visor.value != 0) {
        visor.value += valor;
    } else {
        visor.value = valor;
    }
}


function botaoOperacao(valor, id) {
    let visor = document.getElementById('visor');
    resultado = visor.value;
    calculo = valor
    visor.value = "";

    if(idAtivo != null){
        document.querySelector(idAtivo).classList.remove("botaoAtivo");
        idAtivo = null;
    }

    document.querySelector(id).classList.add("botaoAtivo");
    idAtivo = id;
}



function botaoC() {
    let visor = document.getElementById('visor');
    visor.value = '0'; 
    calculo = null;
    console.log(visor);

    if(idAtivo != null){
        document.querySelector(idAtivo).classList.remove("botaoAtivo");
        idAtivo = null;
    }
}


function botaoIgual() {
    let visor = document.getElementById('visor');

    if (calculo == "/") {
        resultado = resultado / visor.value;
    }
    if (calculo == "*") {
        resultado = resultado * visor.value;
    }
    if (calculo == "-") {
        resultado = resultado - visor.value;
    }
    if (calculo == "+") {
        resultado = parseFloat(resultado) + parseFloat(visor.value);
    }

    if(idAtivo != null){
        document.querySelector(idAtivo).classList.remove("btn-ativo");
        idAtivo = null;
    }

    visor.value = resultado;
    calculo = null;
}