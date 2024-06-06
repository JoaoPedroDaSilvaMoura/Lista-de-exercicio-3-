function calcularLitros() {
    // Obtendo os valores do preço do litro e do valor do pagamento
    var precoLitro = parseFloat(document.getElementById("precoLitro").value);
    var valorPagamento = parseFloat(document.getElementById("valorPagamento").value);

    // Calculando a quantidade de litros
    var litros = valorPagamento / precoLitro;

    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = "Você conseguiu colocar " + litros.toFixed(2) + " litros no tanque.";
}
