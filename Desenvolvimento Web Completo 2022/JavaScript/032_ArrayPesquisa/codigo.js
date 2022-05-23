var listaFrutas = Array();

listaFrutas[0] = 'Banana';
listaFrutas[1] = 'Maçã';
listaFrutas[2] = 'Morango';
listaFrutas[3] = 'Uva';

//console.log(listaFrutas.indexOf('Morango')); 
if(listaFrutas.indexOf('Morango')==-1){
    console.log('Elemento não existe');
}
else{
    console.log('Elemento existe e está na posição ' + listaFrutas.indexOf('Morango'));
}