var calculo='';

function telaPrint(){
    document.getElementById('tela').value = calculo;
}

function limparTela(){
    document.getElementById('tela').value = '';
    calculo = '';
}

function inserirValor(Valor){
    /* entrada de 2 . . == ok
    if(Valor=='.' && calculo.charAt(calculo.length - 1) != '' && calculo.charAt(calculo.length - 1) != '.' || Valor != '.')
    {
        calculo += Valor;
        telaPrint();
    }*/
    calculo += Valor;
    telaPrint();
    console.log(calculo.includes('.'))
    
}

function inserirOperacao(opcao){
    
    if(calculo != ''){
        calculo += opcao;
        telaPrint();
    }
    
}

function exibirResultado(){
    if(calculo != '')
    {
        calculo = (eval(calculo));
        telaPrint();
    }
    
}