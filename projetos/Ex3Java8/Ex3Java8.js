function calcularValor() {
    // Obtendo os valores das quantidades de camisetas
    var quantidadePequenas = parseInt(document.getElementById("quantidadePequenas").value);
    var quantidadeMedias = parseInt(document.getElementById("quantidadeMedias").value);
    var quantidadeGrandes = parseInt(document.getElementById("quantidadeGrandes").value);

    // Calculando o valor arrecadado
    var valorArrecadado = quantidadePequenas * 10 + quantidadeMedias * 12 + quantidadeGrandes * 15;

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "Valor arrecadado: R$ " + valorArrecadado.toFixed(2);
}
