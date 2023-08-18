//Crie um programa que imprima a tabela de multiplicação de 1 a 10.

for (i=1; i <= 10; i++) {
    console.log(`Tabela do ${i}:`);
    for (j=1; j <= 10; j++) {
        const resultado = i * j;
        
        console.log(`${i} x ${j} = ${resultado}`);
    }
    console.log();
}
