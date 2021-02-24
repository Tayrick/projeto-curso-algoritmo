function acaoBotao() {

    var valor01, valor02, resultado, operacao
    
    valor01 = prompt ("Digite o primeiro valor: ")
    valor02 = prompt ("Digite o segundo valor: ")
    operacao = prompt ("Digite: " + "\n" + "1 - Para ADIÇÃO" + "\n" + "2 - Para SUBTRAÇÃO" + "\n" + "3 - Para MULTIPLICAÇÃO" + "\n" + "4 - Para DIVISÃO")
    
    switch (operacao){
        case "1":
            resultado = parseInt(valor01) + parseInt(valor02)
            break;
        case "2":
            resultado = parseInt(valor01) - parseInt(valor02)
            break;
        case "3":
            resultado = parseInt(valor01) * parseInt(valor02)
            break;     
        case "4":
            resultado = parseInt(valor01) / parseInt(valor02)
            break;
    }
    
    document.getElementById("paragrafo").innerText = ("Resultado da operação: " + resultado)
    
    }
    