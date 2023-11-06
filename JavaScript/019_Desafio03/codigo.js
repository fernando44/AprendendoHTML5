var numero1 = parseFloat(prompt("Informe um valor"));
var numero2 = parseFloat(prompt("Informe outro valor"));
var operacao = prompt("Informe soma ou subtração");

operacao = operacao.toLocaleLowerCase();

function Soma(n1,n2){
    var n3 = n1 + n2;
    return document.write(n3);
}
function Subtracao(n1,n2){
    var n3 = n1 - n2;
    return document.write(n3);
}

switch(operacao){
    case "soma":{
        Soma(numero1,numero2);
        break;
    }

    case "subtração":{
        Subtracao(numero1,numero2);
        break;
    }

    default:{
        document.write("Valor invalido");
        break;
    }
}