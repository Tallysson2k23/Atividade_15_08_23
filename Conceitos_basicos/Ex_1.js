// 1 ;Crie uma função que calcule o fatorial de um número inteiro.

const prompt = require ("prompt-sync")();
function repetir (){


    const num = prompt("Digite um numero: ")


    for (i=num; i>=1; i=i-1){
        console.log(num*num)
    }




}
repetir();