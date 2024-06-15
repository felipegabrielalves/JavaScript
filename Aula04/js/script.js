var pos = 1;
function esquerda(){
    if (pos<=1){
        pos = 1;
    }
    else{
        pos--;
    }


    document.getElementById("imagem").innerHTML="<img src=img/imagem"+pos+".jpg>"
}
function direita(){
    if (pos>=5){
        pos = 5;
    }
    
    else{
        pos++;

    }
    document.getElementById("imagem").innerHTML="<img src=img/imagem"+pos+".jpg>"
}