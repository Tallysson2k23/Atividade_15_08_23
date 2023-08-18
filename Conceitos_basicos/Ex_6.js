//Escreva uma função que inverta uma string (exemplo: "hello" => "olleh").

function palavra_contrario() {
    const prompt = require("prompt-sync")();

    const palavra = prompt("Digite um nome: ");

    let palcontrario = "";
    for (i = palavra.length - 1; i >= 0; i = i - 1) {
      palcontrario = `${palcontrario}${palavra[i]}`;
    }
    console.log(`Palavra invertida: ${palcontrario}`);
  }
  palavra_contrario()