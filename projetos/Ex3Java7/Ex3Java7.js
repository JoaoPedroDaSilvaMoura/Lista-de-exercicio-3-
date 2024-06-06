function calcularDias() {
    // Obtendo os valores do dia e do mês
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);

    // Calculando os dias passados desde o início do ano
    var diasPassados = (mes - 1) * 30 + dia;

    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = "Dias passados desde o início do ano: " + diasPassados;
}
