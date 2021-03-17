// Get all the button tags.
var buttonTags = document.querySelectorAll(".drum");

// Attach click event listeners to the buttons.
for (var idx = 0; idx < buttonTags.length; idx++) {
    buttonTags[idx].addEventListener("click", handleClick);
}

// Handle the button click events.
function handleClick() {
    var drumText = this.innerHTML;
    makeSound(drumText);
    buttonAnimation(drumText);
}

// Detect KeyBoard key press.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Make sound based on the button is clicked or a key is pressed.
function makeSound(key) {
    
        switch (key){
        
        case "w" :
            playSound("sounds/tom-1.mp3");
            break;
            
        case "a" :
            playSound("sounds/tom-2.mp3");
            break;    
        
        case "s" :
            playSound("sounds/tom-3.mp3");
            break;
        
        case "d" :
            playSound("sounds/tom-4.mp3");
            break;
            
        case "j" :
            playSound("sounds/snare.mp3");
            break;
            
        case "k" :
            playSound("sounds/crash.mp3");
            break;
            
        case "l" :
            playSound("sounds/kick-bass.mp3");
            break;
            
    }
}

// Play a given sound.
function playSound(soundFile) {
    var sound = new Audio(soundFile);
    sound.play();
}

// Add Button Animation when the button is clicked or the key is pressed.

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}
