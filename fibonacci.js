function calcularFibonnaci() {
    const result = document.getElementById("resultado");
    const way1 = document.getElementById("caminho");
    var numero = document.getElementById("numero").value;
    var n1 = 0, n2 = 1, proximo;
    var way = "";

    if (numero > 1) {
        for (let i = 1; i <= numero; i++) {
            proximo = n1 + n2;
            n1 = n2;
            n2 = proximo;
            way = `${way}<br>${shortNumbers(n1)}`;
        }
        way1.innerHTML = way;
        result.innerHTML = n1;
    }
    else {
        result.innerHTML = "Erro, o enésimo precisa ser maior que 1.";
    }
}