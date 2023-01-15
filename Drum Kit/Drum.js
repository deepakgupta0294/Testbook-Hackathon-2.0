// Accessing all the buttons for different Drum sounds

var numberofDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Mouse Click Activation function for Drum

document.addEventListener('click', function (event) {
    if (event.target.matches(".drum")) {
        var buttonInnerHTML = event.target.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
})

// Keyboard Key Press Activation function for Drum


document.addEventListener("keypress", function (e) {
    makesound(e.key);
    buttonAnimation(e.key);
})

// Making sound function for different sounds 

function makesound(key) {
    switch (key) {

        case "w":
            var voice_1 = new Audio("/Sounds/tom 1.wav");
            voice_1.play();
            break;

        case "a":
            var voice_2 = new Audio("/Sounds/tom 2.wav");
            voice_2.play();
            break;

        case "s":
            var voice_3 = new Audio("/Sounds/tom 3.wav");
            voice_3.play();
            break;

        case "d":
            var voice_4 = new Audio("/Sounds/tom 4.wav");
            voice_4.play();
            break;

        case "j":
            var voice_5 = new Audio("/Sounds/Snare.wav");
            voice_5.play();
            break;

        case "k":
            var voice_6 = new Audio("/Sounds/Cymbale.wav");
            voice_6.play();
            break;

        case "l":
            var voice_7 = new Audio("/Sounds/kicked.wav");
            voice_7.play();
            break;
    }
}
// Animation for buttons
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}