// Vetor de 10 números inteiros (substitua com seus próprios valores)
var vetorNumeros = [5, 3, 10, 8, 2, 7, 9, 4, 1, 6];

// Ordenar o vetor em ordem decrescente
vetorNumeros.sort(function(a, b) {
    return b - a;
});

// Exibir o vetor em ordem decrescente
console.log("Vetor de números em ordem decrescente: " + vetorNumeros.join(", "));
