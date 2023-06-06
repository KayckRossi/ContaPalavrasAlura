var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciarJogo);
});
function atualizaTamanhoFrase(){

var frase = $(".frase").text();//Estou armazenando meu conteudo da classe Frase 
var numPalavras = frase.split(" ").length;//split faz a separação das minhas palvras e length faz a contagem
var tamanhoFrases = $("#tamanho-frase"); //pega o valor do meu elemento selecionado

tamanhoFrases.text(numPalavras);//Estou passsndo o valor da minha varialvel contarPalavras 


}
//para dentro da minha tag span com o id totalPalavras

//Ambas as funções .val() e .text() podem manipular os valores de texto dos elementos, mas a .val() funciona em elementos de <input> que são campos aonde o usuário do site insere dados , como os campos de <input>(todos os tipos), <textarea> e <select>.
//Já a função .text() pega o conteúdo de texto de tags HTML que tem texto dentro, como as <h1>, <span> e <p>
//Ambas as funções podem atribuir novos valores a determinados elementos, ou apenas pegar os valores deles.

function inicializaContadores() {
    campo.on("input", function () {//A função on() do jQuery, recebe como parâmetro dois argumentos: O primeiro sendo uma string com o nome do evento que ela vai passar a escutar e o segundo uma função, com a ação que ela deve executar quando o evento acontecer. 
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;///\S+/) A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio: /\S+/.
        $("#contador-palavras").text(qtdPalavras);

        var conteudoSemEspaco = conteudo.replace(/\s+/g, '');

        var qtdCaracteres = conteudoSemEspaco.length;
        $('#contador-caracteres').text(qtdCaracteres);
    });
};
function inicializaCronometro() {
    campo.one("focus", function () {//One serve para que a function seja executada apenas uma vez
        //on repete o tempo inteiro
        var tempoRestante = parseInt($("#tempo-digitacao").text()); // Converter para número
        var cronometroId = setInterval(function () {

            tempoRestante--; // fazendo com que a contagem seja decrescente

            if (tempoRestante < 1) { //fazendo a validacion para que a contagem para no 0 
                campo.attr("disabled", true); // attr serve para alterar ou implementar um atributo

                clearInterval(cronometroId); // serve para que o cronometro pare
            }

            $("#tempo-digitacao").text(tempoRestante);
        }, 1000); //aqui é onde coloco o tempo que for necessario para a função durar
    });
};

function reiniciarJogo () {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
};




