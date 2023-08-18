// 4 : Crie uma função que receba um array de números e retorne a média deles.

const prompt = require ("prompt-sync")();

const numeros = []
    for (i=0; i<=3; i++){
        numeros.push(parseFloat(prompt("Digite um nunero: ")))
    }

        let soma = 0;
    for (i=soma; i<=numeros.length-1; i++){
         soma = soma+numeros[i];
    }
        let dividir = soma / numeros.length;
        console.log(`A media calculada é: ${dividir}`);