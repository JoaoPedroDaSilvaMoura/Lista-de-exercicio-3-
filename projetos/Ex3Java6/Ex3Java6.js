function calcularValor() {
    // Obtendo o valor do peso do prato
    var pesoPrato = parseFloat(document.getElementById("pesoPrato").value);

    // Calculando o valor a pagar
    var valorPagar = pesoPrato * 12.00;

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "Valor a pagar: R$ " + valorPagar.toFixed(2);
}
