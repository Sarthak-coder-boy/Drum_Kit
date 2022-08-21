// travesing to all the keys which is to be pressed
for(var i=0;i< document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
    
//     Make sound on clicking the images
}
function handleClick(){
  var alphabet = this.innerHTML;
  makesound(alphabet);
  buttonAnimation(alphabet);

    
//     Make sound on pressing the keyboard keys
}
document.addEventListener("keypress",function(letter){
    makesound(letter.key);
    buttonAnimation(letter.key);
})


// Gives the sound on a particular keys or clicks
function makesound(char){
    switch(char){
        case "w":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 =new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash =new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick =new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            default:
                console.log(char);
            }
}

// Adding Animation
function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){ document.querySelector("."+currentkey).classList.remove("pressed");},200)
}
       
  



