// 3 : Converta uma temperatura de Celsius para Fahrenheit usando funções.

const prompt = require ("prompt-sync")(); 
function repetir (){

    
    let temp1 = parseFloat(prompt("Digite uma temperatura em Celsius: "));
    let temp2 = temp1*(9/5)+32;
    console.log(`A temperatura em Fahrenheit é: ${temp2}`);


    const pergunta = prompt("Quer converter outra temeperatura? s ou  n: ");
        if (pergunta === "s"){
            repetir();
        }

}
repetir();