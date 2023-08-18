// 2 : Crie uma função que retorne o maior valor entre três números.


const prompt = require ("prompt-sync")();
function repetir (){
    num = parseFloat(prompt("Digite o 1º numero: "))
    let maior=num;
    for(i=2; i<=3; i++){
        num = parseFloat(prompt (`Digite o ${i}º numero: `));
        if (maior < num){
            maior = num;
        }
    }

    console.log(`O maior numero é: ${maior}`);


    const perguntar=prompt("Quer digitar mais numeros? s ou n: ");
    if (perguntar === "s"){
        repetir();
    }
}

    repetir();