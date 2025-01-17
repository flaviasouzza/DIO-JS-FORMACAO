const numero = 7 

const numeroPar = (numero % 2) === 0;
// Aqui temos uma condição ou é verdadeiro ou é falso 

console.log(numeroPar + "\n");

// ----------------------------

const numero1 = 8 

const numeroPar1 = (numero1 % 2) === 0;
console.log(numeroPar1);


if (numeroPar1){
    console.log("O número é par\n");
}
else {
    console.log("O número é ímpar\n");
}

// ----------------------------
 
const prompt = require("prompt-sync")();

let numero2;

do {
    numero2 = parseInt(prompt("Digite um número até 200: "));  

    if (isNaN(numero2) || numero2 <= 0) {
        console.log("O número é inválido. Tente novamente.");
    } else if (numero2 > 200) {
        console.log("O número é inválido. Tente novamente.");
    } else {
        break; 
    }
} while (true);

if (numero2 % 5 === 0) {
    console.log("É divisível por 5");
} else {
    console.log("Não é divisível por 5");
}
