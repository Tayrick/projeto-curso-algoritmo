 function acaoBotao() {
     
    var numero, fatorial
    numero = prompt ("Digite um número: ")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++){
        fatorial = fatorial * contador
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é:" + fatorial
 }