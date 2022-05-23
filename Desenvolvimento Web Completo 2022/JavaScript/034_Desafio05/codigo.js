var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function btn(type){
    var aux =document.getElementById('txt').value;

    if(aux != '' && type == 'adicionar'){// adicionar

        if(objetos.indexOf(aux) == -1){
            objetos.push(aux);
        }else{
            alert('Valor existente');
        }
        document.getElementById('txt').value = '';
    }
    else if(type =='ordenar'){//ordenar
        objetos.sort();
    }
    else{
        alert('Valor invalido');
    }
    console.log(objetos);
}