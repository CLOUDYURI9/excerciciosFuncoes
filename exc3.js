/*
Exercício 3
Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
*/
var teclado = require("prompt-sync")();
var raio = parseInt(teclado("Digite o valor de raio: "));
function volumeEsfera(raio) {
    var volume = (4 / 3) * 3.14 * (raio ^ 3);
    return volume;
}
console.log(volumeEsfera(raio));
