var valores = []; // Inicialize um array vazio para armazenar os valores

// Ler 20 valores inteiros
for (var i = 0; i < 20; i++) {
    var valor = parseInt(prompt("Digite o valor " + (i + 1) + ":"));
    valores.push(valor); // Adicione o valor ao array
}

// Exibir os valores na ordem inversa
console.log("Valores na ordem inversa:");

for (var i = 19; i >= 0; i--) {
    console.log(valores[i]);
}
