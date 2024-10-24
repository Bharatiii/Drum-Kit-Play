alert ("Welcome!");

//Selecting only one or 1st BUTTON -------------

//document.querySelector("button").addEventListener("click", handleClick); //handleClick = Function name

//function handleClick(){
   // alert("I got clicked");

//}

//document.querySelector("button").addEventListener("click", function(){ //annonymous funtion = function with no name
   // alert("I got clicked!")
//});


//SELECTINg ALL the buttons having Drum class ------------- 

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      //  alert("I got clicked");

      //ADDING sound to the event Listener ---------
     // var audio = new Audio ('sounds/tom-1.mp3');
     // audio.play();

     //console.log(this.innerHTML);

    // this.style.color = "Yellow"; //Changing color to yellow when the drums gets clicked





    //Writing Switch case statement for applying different sounds when different drum buttons are clicked

    buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML){
        case "w":
            var audio1 = new Audio ('sounds/tom-1.mp3');
            audio1.play();
            break;


        case "a":
            var audio2 = new Audio ('sounds/tom-2.mp3');
            audio2.play();
            break;


        case "s":
            var audio3 = new Audio ('sounds/tom-3.mp3');
            audio3.play();
            break;


        case "d":
            var audio4 = new Audio ('sounds/tom-4.mp3');
            audio4.play();
            break;


        case "j":
            var audio5 = new Audio ('sounds/crash.mp3');
            audio5.play();
            break;


        case "k":
            var audio6 = new Audio ('sounds/kick-bass.mp3');
            audio6.play();
            break;


        case "l":
            var audio7 = new Audio ('sounds/snare.mp3');
            audio7.play();
            break;



        default: console.log(buttonInnerHTML);
    }


    });
}

