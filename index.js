//filepaths to the different sound files...
var crash = './sounds/crash.mp3';
var kick  = './sounds/kick-bass.mp3';
var snare = './sounds/snare.mp3';
var tom1  = './sounds/tom-1.mp3';
var tom2  = './sounds/tom-2.mp3';
var tom3  = './sounds/tom-3.mp3';
// var tom4  = './sounds/tom-4.mp3';
var tom4  = './sounds/086424_small-realpoot106wav-37403.mp3'

var numOfBtns = document.querySelectorAll('.drum').length;

for (var i = 0; i < numOfBtns; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        // this.style.color = 'white';

        var btnInnerHTML = this.innerHTML;

        selectSound(btnInnerHTML);

        buttonAnimation(btnInnerHTML);

    });

}

//use keydown instead of 'keypress'
document.addEventListener('keydown', function (event) {
    // alert('key was pressed...');
    console.log(event);

    selectSound(event.key);

    buttonAnimation(event.key);

});


//function to be reused to play sounds...
function playSound(path) {
    
    var a = new Audio(path);
    a.play();

}

//function to select sound to use with the previous function...
function selectSound(key) {

    switch (key) {
        
        case 'w':
            playSound(crash)
            break;

        case 'a':
            playSound(kick);
            break;

        case 's':
            playSound(snare);
            break;
        
        case 'd':
            playSound(tom1);
            break;
        
        case 'j':
            playSound(tom2);
            break;
        
        case 'k':
            playSound(tom3);
            break;
        
        case 'l':
            playSound(tom4);
            break;

        default: 
            console.log(key);

    }

}

function buttonAnimation(currentKey) {

    var activeBtn = document.querySelector('.' + currentKey);

    activeBtn.classList.add('pressed');

    setTimeout( function() {
        
        activeBtn.classList.remove('pressed');

    }, 100);
    
}