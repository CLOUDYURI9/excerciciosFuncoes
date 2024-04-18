/*
Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
*/
function primo(n, divisor) {
    if (divisor === void 0) { divisor = 2; }
    if (n <= 1) {
        return false;
    }
    if (divisor == n) {
        return true;
    }
    if (n % divisor == 0) {
        return false;
    }
    return primo(n, divisor + 1);
}
function listarPrimos(n) {
    if (n === void 0) { n = 2; }
    if (n > 1000) {
        return;
    }
    if (primo(n)) {
        console.log(n);
    }
    listarPrimos(n + 1);
}
var lista = 0;
listarPrimos(lista);
