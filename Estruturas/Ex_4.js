// 4 : Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /).
 const prompt = require ("prompt-sync")();

 function repetir(){

    const num1 = parseFloat (prompt("Digite um numero: "));
    const operacao = prompt ("Escolha uma operação: -, +, *, /: ");
    const num2 =  parseFloat(prompt("Digite outro numero: "));

   

    if (operacao === "-"){
        console.log("O resultado da Subtração é: ", num1-num2);
    }else if (operacao === "+"){
        console.log("O resultado da soma é: ", num1+num2);
        }else if (operacao === "*"){
            console.log("O resultado da multiplicação é: ",num1*num2);
        }else if (operacao === "/"){
            console.log("o resultado da divisão é: ",num1/num2);
        }
    const resposta = prompt("Quer fazer outra operação? s ou n: ")
    if (resposta === "s"){
        repetir();
    }
 }
 repetir()