/*
Faça um algortimo com 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima sua média e sua classificação conforme a tabela abaixo
1- Média menor que 5, repovação;
2- Média entre 5 e 7, recuperação;
3- Média acima de 7, passou de semestre;

Calculo de média = (nota1 + nota2 + nota3)/3;
*/

const prompt = require("prompt-sync")();


let nota1 = parseInt(prompt("Qual o valor da nota 1: "));
let nota2 = parseInt(prompt("Qual o valor da nota 2: "));
let nota3 = parseInt(prompt("Qual o valor da nota 3: "));

const somaNotas = (nota1 + nota2 + nota3);
const mediaNotas = somaNotas / 3;

console.log("\nA sua média é: " + mediaNotas);

function  resultado(){
    if (mediaNotas <= 5) {
        console.log("Reprovado");
}
    else if (mediaNotas > 5 || mediaNotas < 7) {
        console.log("Recuperação");
    }
    else  {
        console.log("Aprovado");
    }
} 
resultado();
