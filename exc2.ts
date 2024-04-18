/*
Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
*/

const teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número`))


function  menor(n1: number, n2: number, n3: number): number{

    let menor = 0;
    if( n1 < n2 && n1 < n3){
        menor = n1
        console.log(`O menor é ${n1}`);
    }
    else if( n2 < n1 && n2 < n3){
        menor = n2
        console.log(`O menor é ${n2}`);
    }
    else if( n3 < n1 && n3 < n2){
        menor = n3
        console.log(`O menor número é ${n3}`)
    }
    return  menor;
}

menor(n1,n2,n3);



