/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar
1 se o número for par e 0 se for ímpar.
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
function verificar(n1) {
    var verifique = n1 % 2;
    return verifique;
}
var verifique = verificar(n1);
if (verifique == 0) {
    console.log("1");
}
else if (verifique > 0) {
    console.log("0");
}
else {
    console.log("Algo deu errado!!");
}
