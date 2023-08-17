

// 1 : Imprima os números de 1 a 10 utilizando um loop (for)


function repetir (){

    for (i=1; i<=10; i++)
    console.log(i)
const prompt = require ("prompt-sync")();
const resposta = prompt ("Quer repetir os numeros? s ou n: ")
    if (resposta === "s")
        repetir()   
}
repetir();

