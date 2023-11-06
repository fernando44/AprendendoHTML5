var a = 10;
var b = 20;
var c = null;

document.write('<p> Valor A = '+a+'</p><br/>');
document.write('<p> Valor B = '+b+'</p><br/>');
document.write('<p> Valor C = '+c+'</p>');

document.write('<hr/>');

c = a;
a = b;
b = c;
c = null;

document.write('<p> Valor alterado com sucesso!</p>');
document.write('<p> Valor A = '+a+'</p><br/>');
document.write('<p> Valor B = '+b+'</p><br/>');
document.write('<p> Valor C = '+c+'</p>');
