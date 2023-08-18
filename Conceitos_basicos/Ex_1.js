// 1 ;Crie uma função que calcule o fatorial de um número inteiro.

const prompt = require ("prompt-sync")();
function repetir (){


    const num = parseFloat(prompt("Digite um numero: "));
    let armazenar = num;


    for (i=num-1; i>=1; i=i-1){
        armazenar=armazenar*i;
         
    }
    console.log (armazenar)

}
repetir();