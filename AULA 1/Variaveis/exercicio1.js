/* 
1- Preço do combustível 
2- Gasto médio de combustível do carro por km;
3- Distancia em km da viagem. 
Observação: o valor gasto é calculado da seguinte forma:
Distancia percorrida (divido) pelos litros do veículo por km, e posteriormente o resultado é (multiplicado) pelo valor do combustível 
 */

let precoCombustivel = 5.95;
let mediaCarro = 10;
let distanciaViagem = 550;

let resultado = (distanciaViagem / mediaCarro) * precoCombustivel;

console.log("O valor gasto de combustível é de " + resultado + "\n");


let precoCombustivel2 = 6;
let mediaCarro2 = 8;
let distanciaViagem2 = 500;

let resultado2 = (distanciaViagem2 / mediaCarro2) * precoCombustivel2;

console.log("O valor gasto de combustível é de " + resultado2 + "\n");


const precoCombustivel3 = 5.65;
const mediaCarro3 = 12.5;
const distanciaViagem3 = 1860;

const litrosCosumidos = distanciaViagem3 / mediaCarro3;
const valorGasto3 = litrosCosumidos * precoCombustivel3;

console.log("O valor gasto de combustível é de " + valorGasto3.toFixed(2));

/*
Observações:
1- Fiz 3 exemplos diferentes
2- Em programação não usamos a , (vírgula) usamos o . (ponto)
3- O toFixed(2) serve para você definir quantos números posterior a vírgula você quer que imprima no console.
*/