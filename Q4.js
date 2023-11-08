// Defina os dois vetores (substitua com seus próprios valores)
var vetor1 = [2, 4, 6, 8, 10];
var vetor2 = [4, 8, 12, 16, 20];

// Inicialize um vetor para armazenar a intersecção
var interseccao = [];

// Percorra o primeiro vetor
for (var i = 0; i < vetor1.length; i++) {
    var elemento = vetor1[i];

    // Verifique se o elemento está presente no segundo vetor
    if (vetor2.includes(elemento)) {
        interseccao.push(elemento);
    }
}

// Exiba a intersecção
console.log("Intersecção dos vetores: " + interseccao.join(", "));
