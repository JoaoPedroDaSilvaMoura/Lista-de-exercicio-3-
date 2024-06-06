function calcularVendas() {
    // Obtendo os valores das quantidades de pães e broas
    var quantidadePao = parseInt(document.getElementById("quantidadePao").value);
    var quantidadeBroa = parseInt(document.getElementById("quantidadeBroa").value);

    // Calculando o total arrecadado
    var valorPao = quantidadePao * 0.12;
    var valorBroa = quantidadeBroa * 1.50;
    var totalArrecadado = valorPao + valorBroa;

    // Calculando o valor a ser guardado na conta de poupança (10% do total arrecadado)
    var poupanca = totalArrecadado * 0.10;

    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = "Total arrecadado: R$ " + totalArrecadado.toFixed(2) + "<br>" +
                                                        "Valor a ser guardado na conta de poupança: R$ " + poupanca.toFixed(2);
}
