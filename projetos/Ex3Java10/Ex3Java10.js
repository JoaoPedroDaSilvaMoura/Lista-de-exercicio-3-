function converterTempo() {
    // Obtendo a quantidade de dias sem acidentes
    var dias = parseInt(document.getElementById("dias").value);

    // Convertendo dias em anos, meses e dias
    var anos = Math.floor(dias / 365);
    var meses = Math.floor((dias % 365) / 30);
    var diasRestantes = dias % 30;

    // Exibindo o resultado na página
    document.getElementById("resultado").innerHTML = "Tempo sem acidentes: " + anos + " anos, " + meses + " meses e " + diasRestantes + " dias.";
}
