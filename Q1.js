// Solicitar ao usuário a quantidade de notas
var quantidadeNotas = parseInt(prompt("Digite a quantidade de notas:"));

// Inicializar os vetores para notas maiores e menores que a média
var notas = [];
var notasMaioresQueMedia = [];
var notasMenoresQueMedia = [];

// Ler as notas e calcular a média
var somaNotas = 0;

for (var i = 0; i < quantidadeNotas; i++) {
    var nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));

    // Verificar se a nota é válida (entre 0 e 10)
    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
        somaNotas += nota;
    } else {
        alert("Nota inválida. Digite uma nota entre 0 e 10.");
        i--; // Decrementar o contador para ler novamente a nota inválida
    }
}

// Calcular a média
var media = somaNotas / quantidadeNotas;

// Separar as notas maiores e menores que a média
for (var i = 0; i < quantidadeNotas; i++) {
    if (notas[i] > media) {
        notasMaioresQueMedia.push(notas[i]);
    } else if (notas[i] < media) {
        notasMenoresQueMedia.push(notas[i]);
    }
}

// Exibir os resultados
console.log("Notas maiores que a média: " + notasMaioresQueMedia.join(", "));
console.log("Notas menores que a média: " + notasMenoresQueMedia.join(", "));
console.log("Média das notas: " + media);
