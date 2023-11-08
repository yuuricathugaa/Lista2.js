// Defina dois vetores ordenados de números inteiros (substitua com seus próprios valores)
var vetor1 = [2, 4, 6, 8, 10];
var vetor2 = [3, 7, 9, 12, 15];

// Inicialize um vetor para armazenar a união dos dois conjuntos
var vetorUniao = [];

// Índices para percorrer os vetores
var indice1 = 0;
var indice2 = 0;

// Percorra os dois vetores enquanto houver elementos em ambos
while (indice1 < vetor1.length && indice2 < vetor2.length) {
    if (vetor1[indice1] < vetor2[indice2]) {
        vetorUniao.push(vetor1[indice1]);
        indice1++;
    } else {
        vetorUniao.push(vetor2[indice2]);
        indice2++;
    }
}

// Adicione os elementos restantes de vetor1, se houver
while (indice1 < vetor1.length) {
    vetorUniao.push(vetor1[indice1]);
    indice1++;
}

// Adicione os elementos restantes de vetor2, se houver
while (indice2 < vetor2.length) {
    vetorUniao.push(vetor2[indice2]);
    indice2++;
}

// Exiba o vetor resultante (união)
console.log("Vetor de união dos conjuntos: " + vetorUniao.join(", "));
