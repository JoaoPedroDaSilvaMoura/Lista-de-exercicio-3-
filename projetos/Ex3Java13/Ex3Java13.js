function calcularArea() {
    // Obtendo o raio da pizza
    var raio = parseFloat(document.getElementById("raio").value);

    // Calculando a área da pizza usando a fórmula A = pi * r^2
    var area = 3.14 * raio * raio;

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "A área da pizza é: " + area.toFixed(2) + " cm²";
}
