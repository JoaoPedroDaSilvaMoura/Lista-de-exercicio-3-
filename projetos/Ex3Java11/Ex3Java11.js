function calcularSalario() {
    // Obtendo o salário do funcionário
    var salario = parseFloat(document.getElementById("salario").value);

    // Calculando o aumento de 15%
    var salarioAumentado = salario * 1.15;

    // Descontando 8% de impostos
    var salarioFinal = salarioAumentado * 0.92;

    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = "Salário inicial: R$ " + salario.toFixed(2) + "<br>" +
                                                      "Salário com aumento de 15%: R$ " + salarioAumentado.toFixed(2) + "<br>" +
                                                      "Salário final após desconto de impostos: R$ " + salarioFinal.toFixed(2);
}
