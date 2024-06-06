function calcularFerraduras() {
    // Obtendo os valores do número de cavalos e de ferraduras por cavalo
    var numeroCavalos = parseInt(document.getElementById("numeroCavalos").value);
    var ferradurasPorCavalo = parseInt(document.getElementById("ferradurasPorCavalo").value);

    // Calculando o total de ferraduras necessárias
    var totalFerraduras = numeroCavalos * ferradurasPorCavalo;

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "Total de ferraduras necessárias: " + totalFerraduras;
}
