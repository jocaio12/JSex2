function alterar(titulo, pagina) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById('campo').value = pagina;
}

alterar("Titulo 1", "Pagina1")

function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);

