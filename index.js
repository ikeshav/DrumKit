
for(var n=0; n<=6; n++)
{
  document.querySelectorAll("button")[n].addEventListener("click",clicka);

}
function clicka(){

  var btnsound=this.innerHTML;
   switch(btnsound){
     case "a":
     var gana= new Audio("tom-1.mp3");
     gana.play();
     break;
     case "w":
     var gana1= new Audio("crash.mp3");
     gana1.play();
     break;
     case "s":
     var gana2= new Audio("tom-2.mp3");
     gana2.play();
     break;
     case "d":
     var gana3= new Audio("tom-3.mp3");
     gana3.play();
     break;
     case "j":
     var gana4= new Audio("tom-4.mp3");
     gana4.play();
     break;
     case "k":
     var gana5= new Audio("snare.mp3");
     gana5.play();
     break;
     case "l":
     var gana6= new Audio("kick-bass.mp3");
     gana6.play();
     break;
     default:
     var gana= new Audio("tom-1.mp3");
   }
   buttonAnimation(btnsound);

}

document.addEventListener("keypress", function(event){

  var keysound= event.key;
  switch (keysound) {
    case "a":
    var gana= new Audio("tom-1.mp3");
    gana.play();
    break;
    case "w":
    var gana1= new Audio("crash.mp3");
    gana1.play();
    break;
    case "s":
    var gana2= new Audio("tom-2.mp3");
    gana2.play();
    break;
    case "d":
    var gana3= new Audio("tom-3.mp3");
    gana3.play();
    break;
    case "j":
    var gana4= new Audio("tom-4.mp3");
    gana4.play();
    break;
    case "k":
    var gana5= new Audio("snare.mp3");
    gana5.play();
    break;
    case "l":
    var gana6= new Audio("kick-bass.mp3");
    gana6.play();
    break;
    default:
    var gana= new Audio("tom-1.mp3");
  }

  buttonAnimation(keysound);
})

function buttonAnimation(bott)
{
 document.querySelector("."+ bott).classList.add("pressed");

 setTimeout(function(){document.querySelector("."+bott).classList.remove("pressed");}, 100 )


}
