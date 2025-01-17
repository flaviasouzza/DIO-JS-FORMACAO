/* Você terá 5 variáveis, sendo elas:
1- Preço do etanol 
2- Preço da gasolina
3- tipo de combustível do seu carro 
4- Gasto médio de combustível do carro por km;
5- Distancia em km da viagem. 
*/

const prompt = require("prompt-sync")();

function Combustivel() {
    const opcoes = ["etanol", "gasolina"];

    let tipo;

do {
    console.log("\nSelecione o tipo do combustível:");
    console.log("Etanol");
    console.log("Gasolina");

    const escolha = prompt("Qual a opção escolhida: ").toLowerCase();

    if (opcoes.includes(escolha)) {
        tipo = escolha;
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
} while (!tipo);

return tipo;
}

const precoEtanol = 3.70;
const precoGasolina = 5.95;
let mediaCarro = 12.5;
let distanciaViagem = 1860;

const tipoCombustivel = Combustivel ();

let precoCombustivel;

if (tipoCombustivel === "gasolina")
{
    precoCombustivel= precoGasolina;
}
else{
    precoCombustivel=precoEtanol
}

const litrosCosumidos = distanciaViagem / mediaCarro;
const valorGasto = litrosCosumidos * precoCombustivel;

console.log("\nO seu combustível é: " + tipoCombustivel.toUpperCase());
console.log("O valor gasto de combustível é de: " + valorGasto.toFixed(2));