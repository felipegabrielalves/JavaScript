var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];

/*
O comando abaixo faz uma contagem de 1 a 5 e 
incremente de um em um. Dentro do corpo do for é
chamado o div miniatura e inserimos nela um
comando html para exibição de imagens e este
comando é repetido tantas vezes que é pedido no
comando for. Quando há a contagem o nome da
foto é incrementado com o número da variável i.
Fazendo uma contagem de 1 até 5 e exibir
as imagens de imagem1 até imagem5 dentro da 
div miniatura.

*/

for (var i = 1; i <= 5; i++){
    miniatura.innerHTML+="<img src=img/imagem"+i+".jpg onclick=abrir("+i+")>";
}

// FUNCIONA PORÉM ESTÁ REPETITIVO
// document.getElementsByTagName("img")[0].onclick = function (){
//     fullsize.innerHTML="<img src=img/imagem1.jpg>"
// }
// document.getElementsByTagName("img")[1].onclick = function (){
//     fullsize.innerHTML="<img src=img/imagem2.jpg>"
// }
// document.getElementsByTagName("img")[2].onclick = function (){
//     fullsize.innerHTML="<img src=img/imagem3.jpg>"
// }
// document.getElementsByTagName("img")[3].onclick = function (){
//     fullsize.innerHTML="<img src=img/imagem4.jpg>"
// }
// document.getElementsByTagName("img")[4].onclick = function (){
//     fullsize.innerHTML="<img src=img/imagem5.jpg>"
// }


// for (var p = 0; i <= 4; p++) {

/*
A função abrir é chamada todas as vezes que uma foto da 
miniatura é clicada.
Quando a miniatura é clicada, ela dispara um evento chamado onclick e 
chama a função abrir passando por parâmetro(argumento) um número,
que é a posição da foto. Assim, a função abrir recebe o número
passado e armazena a variávelp. Esta variável é usada para 
formar o nome da foto que será carregada na div
fullsize como vemos abaixo.
*/

    function abrir(p) {
        fullsize.innerHTML = "<img src=img/imagem" + (p) + ".jpg>"
    }
// }