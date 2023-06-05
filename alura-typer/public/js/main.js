var frase = $(".frase").text();//Estou armazenando meu conteudo da classe Frase 
var contarPalavras = frase.split(" ").length;//split faz a separação das minhas palvras e length faz a contagem
var totalPalavras = $("#totalPalvras").text(contarPalavras); //Estou passsndo o valor da minha varialvel contarPalavras 
//para dentro da minha tag span com o id totalPalavras