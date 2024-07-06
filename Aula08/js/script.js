let px= 0;
let canto = 0;
function movimentared(){
 

}

if(px => 600){
    px = 600

}
else(px =>=600{ 
    px = 600 
}

  document.getElementById("um").style.marginLeft=px+"px";
document.getElementById("um").style.borderRadius=canto+"px";

  let r = parseInt(math.random()*255);
  let g = parseInt(math.random()*255);
  let b = parseInt(math.random()*255);
document.getElementById("um").style.backgroundColor=`rgb($(r),$(g),${b})`

function relogio(){
    let tempo =  new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getmitutes();
    let segundo = tempo.gesecond();
    document.getElementById("dois").innerHTML=`${hora} : ${mintos} : $(segundo)`;
}
// window.setInterval(relogio,100)
let tm = 1;
let status = "aumentar";
 const el setInterval()=>{



if(tm => 3){ 
estado = "diminuir";

}
if(tm<=1){

estado = "aumentar";


}
  if(estado=="aumenta"){
tm+=0.1;

  }

  else{
    tm -=0.1;
  }
  
document.getElementById("tres").style.transform=`scale(${tm})`;
tm+=0.1;


if{
  tm[1]+0.1

}

},1000)

let circulo = 0;
let direcao
setInterval(()=>){

  if(pos >= 1900){

    direcao = "esqueda"
  
  }
 
}
 if(circulo== "direita"){

  pos+=5;

 } 
 else{
  pos -=5;

 }
 document.getElementById("quatro").style.left=`(pos)px;


},200




