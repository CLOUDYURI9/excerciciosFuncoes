/*
Exercício 3
Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
Nome: Yuri Dinato da Silva
*/
const teclado = require(`prompt-sync`)();

let raio: number = parseInt(teclado(`Digite o valor de raio: `));

function volumeEsfera(raio: number): number{
    let volume = 4/3*3.14*(raio*raio*raio);
    return volume;
}

console.log(volumeEsfera(raio));

