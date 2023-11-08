// Vetor de 10 nomes (substitua com seus próprios valores)
var vetorNomes = ["Maria", "João", "Ana", "Carlos", "Pedro", "Lúcia", "Fernanda", "Ricardo", "Isabela", "Miguel"];

// Ordenar o vetor em ordem alfabética decrescente
vetorNomes.sort(function(a, b) {
    return b.localeCompare(a); // Ordenar alfabeticamente em ordem decrescente
});

// Exibir o vetor em ordem alfabética decrescente
console.log("Vetor de nomes em ordem decrescente: " + vetorNomes.join(", "));
