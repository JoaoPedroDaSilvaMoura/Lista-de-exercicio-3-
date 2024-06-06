function calcularArea() {
    // Obtendo os valores de largura e comprimento do terreno
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);

    // Calculando a área do terreno
    var area = largura * comprimento;

    // Exibindo a área na página
    document.getElementById("resultado").innerHTML = "A área do terreno é: " + area + " metros quadrados.";
}
