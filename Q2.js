// Inicialize o vetor com 10 números inteiros (você pode alterá-los de acordo com suas necessidades)
var vetor = [20, 30, 90, 24, 45, 80, 35, 100, 60, 10];

// Inicialize um novo vetor para armazenar os elementos simétricos
var vetorSimetrico = [];

// Percorra o vetor original
for (var i = 0; i < vetor.length; i++) {
    // Calcule o elemento simétrico
    var elementoSimetrico = vetor[i] - vetor[vetor.length - 1 - i];
    
    // Adicione o par de elementos ao vetor simétrico
    vetorSimetrico.push(vetor[i] + " - " + elementoSimetrico);
}

// Exiba o vetor acompanhado do seu elemento simétrico
console.log("Entrada: [" + vetor.join(", ") + "]");
console.log("Saída: [" + vetorSimetrico.join(", ") + "]");
