function calcularDistancia() {
    // Obtendo as coordenadas dos pontos
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);

    // Calculando a distância entre os pontos usando a fórmula da distância euclidiana
    var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "A distância entre os pontos é: " + distancia.toFixed(2);
}
