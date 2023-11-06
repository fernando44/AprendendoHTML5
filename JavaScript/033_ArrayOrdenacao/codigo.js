var listaFrutas = Array('Maçã', 'Uva', 'Banana', 'Morango');

console.log(listaFrutas.sort());


var listaNumeros = Array('21','2','322','1','50');

console.log(listaNumeros.sort(ordenaNumeros));

function ordenaNumeros(a,b){
    return a-b;
}