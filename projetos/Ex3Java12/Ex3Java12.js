function analisarNumero() {
    // Obtendo o número digitado pelo usuário
    var numero = parseInt(document.getElementById("numero").value);

    // Extraindo as centenas, dezenas e unidades do número
    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;

    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
}
