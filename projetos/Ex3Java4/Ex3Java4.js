function calcularDiasVida() {
    // Obtendo os valores do nome e da idade
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);

    // Calculando o total de dias de vida
    var diasVida = idade * 365;

    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = nome.toUpperCase() + ", VOCÊ JÁ VIVEU " + diasVida + " DIAS";
}
