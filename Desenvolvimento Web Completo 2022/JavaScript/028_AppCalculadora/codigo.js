var calculo='' ;

function limparTela(){
    document.getElementById('tela').value = '';
    calculo = '';
}

function inserirValor(Valor){
    calculo += Valor;
    document.getElementById('tela').value = calculo;
}

function inserirOperacao(opcao){
    switch(opcao){
        case '+':{
            console.log("soma");
            break;
        }
        case '-':{
            console.log("subtracao");
            break;
        }
        case '*':{
            console.log("multiplicacao");
            break;
        }
        case '/':{
            console.log("divisao");
            break;
        }
    }
}

function exibirResultado(){
    console.log('exibir resultado');
}