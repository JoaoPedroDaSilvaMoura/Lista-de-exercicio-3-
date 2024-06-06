function calcularDivisao() {
    // Obtendo o valor total da conta
    var totalConta = parseFloat(document.getElementById("totalConta").value);

    // Dividindo igualmente entre os três amigos
    var valorPorAmigo = totalConta / 3;

    // Arredondando o valor para que Carlos e André não paguem centavos
    var valorCarlosAndre = Math.floor(valorPorAmigo);
    var valorFelipe = (totalConta - (valorCarlosAndre * 2)).toFixed(2);

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "Carlos: R$ " + valorCarlosAndre.toFixed(2) + "<br>" +
                                                      "André: R$ " + valorCarlosAndre.toFixed(2) + "<br>" +
                                                      "Felipe: R$ " + valorFelipe;
}
