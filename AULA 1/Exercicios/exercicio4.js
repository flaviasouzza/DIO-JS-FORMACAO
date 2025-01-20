/* 
Calculo de IMC (indice de massa corporal)
Formula 
IMC = PESO / (altura * altura)

Elabore um algoritmo pra calcular o IMC de um adulto e insira as condições

- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso.
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade grave;
*/

const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Qual o seu peso (em kg): "));
let altura = parseFloat(prompt("Qual a sua altura (em metros): "));

let imc = peso / (altura * altura);

console.log("\nSeu IMC é: " + imc.toFixed(2));

function condicoes() {
    if (imc < 18.5) {
        console.log("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Você está no peso normal.");
    } else if (imc >= 25 && imc < 30) {
        console.log("Você está acima do peso.");
    } else if (imc >= 30 && imc < 40) {
        console.log("Você está obeso.");
    } else {
        console.log("Você está com obesidade grave, procure um médico!");
    }
}

condicoes();




































 







