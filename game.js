//Button effects
function greenPress() {
    $(".green").addClass("pressed");
    setTimeout(function() {
        $(".green").removeClass("pressed"); 
    }, 200);
    var audio = new Audio("sounds/green.mp3");
    audio.play();
}

function redPress() {
    $(".red").addClass("pressed");
    setTimeout(function() {
        $(".red").removeClass("pressed");
    }, 200);
    var audio = new Audio("sounds/red.mp3");
    audio.play();
}

function yellowPress() {
    $(".yellow").addClass("pressed");
    setTimeout(function() {
        $(".yellow").removeClass("pressed");
    }, 200);
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
}

function bluePress() {
    $(".blue").addClass("pressed");
    setTimeout(function() {
        $(".blue").removeClass("pressed");
    }, 200);
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
}

//Game over effect
function gameOver() {
    
    $("h1").text("🟥 Game Over, press any key to start 🟥");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    pressCount = [];
    buttonCount = [];
    playGame();
}

//Next level
function nextLevel() {
    pressCount = [];
    setTimeout(function() {
        randomElection();
    }, 1000);
}

//Actual Game
function gameParameters() {
    switch (buttonCount.length) {
        case 1:
            if (buttonCount[0] === pressCount[0]) {
                $("h1").text("Level 2");
                nextLevel();
            } else gameOver();
            break;
        
        case 2:
            if (buttonCount[0] === pressCount[0]) {
                if (buttonCount.length === pressCount.length) {
                    if (buttonCount[1] === pressCount[1]) {
                        $("h1").text("Level 3");
                        nextLevel();
                    } else gameOver();
                }
            } else gameOver();
            break;

        case 3:            
            if (pressCount.length === 1) {
                if (buttonCount[0] === pressCount[0]) {

                } else gameOver();
            }

            if (pressCount.length === 2) {
                if (buttonCount[1] === pressCount[1]) {
   
                } else gameOver();
            }

            if (pressCount.length === 3) { 
                if (buttonCount[2] === pressCount[2]) {
                    $("h1").text("Level 4");
                    nextLevel();
                } else gameOver();
            }
            break;
        
        case 4: 
            if (pressCount.length === 1) {
                if (buttonCount[0] === pressCount[0]) {
                } else gameOver();
            }

            if (pressCount.length === 2) {
                if (buttonCount[1] === pressCount[1]) {
                } else gameOver();
            }

            if (pressCount.length === 3) { 
                if (buttonCount[2] === pressCount[2]) {
                } else gameOver();
            }  
            
            if (pressCount.length === 4) { 
                if (buttonCount[3] === pressCount[3]) {
                    $("h1").text("Level 5");
                    nextLevel();
                } else gameOver();
            }  
            break;

        case 5:
            if (pressCount.length === 1) {
                if (buttonCount[0] === pressCount[0]) {
                } else gameOver();
            }

            if (pressCount.length === 2) {
                if (buttonCount[1] === pressCount[1]) {
                } else gameOver();
            }

            if (pressCount.length === 3) { 
                if (buttonCount[2] === pressCount[2]) {
                } else gameOver();
            }  
            
            if (pressCount.length === 4) { 
                if (buttonCount[3] === pressCount[3]) {
                } else gameOver();
            }  

            if (pressCount.length === 5) { 
                if (buttonCount[4] === pressCount[4]) {
                    $("h1").text("Level 6");
                    nextLevel();
                } else gameOver();
            }  
            break;

        case 6:
            if (pressCount.length === 1) {
                if (buttonCount[0] === pressCount[0]) {
                } else gameOver();
            }

            if (pressCount.length === 2) {
                if (buttonCount[1] === pressCount[1]) {
                } else gameOver();
            }

            if (pressCount.length === 3) { 
                if (buttonCount[2] === pressCount[2]) {
                } else gameOver();
            }  
            
            if (pressCount.length === 4) { 
                if (buttonCount[3] === pressCount[3]) {
                } else gameOver();
            }  

            if (pressCount.length === 5) { 
                if (buttonCount[4] === pressCount[4]) {
                } else gameOver();
            }  

            if (pressCount.length === 6) { 
                if (buttonCount[5] === pressCount[5]) {
                    $("h1").text("Level 7");
                    nextLevel();
                } else gameOver();
            }  
            break;

        case 7:
            if (pressCount.length === 1) {
                if (buttonCount[0] === pressCount[0]) {
                } else gameOver();
            }

            if (pressCount.length === 2) {
                if (buttonCount[1] === pressCount[1]) {
                } else gameOver();
            }

            if (pressCount.length === 3) { 
                if (buttonCount[2] === pressCount[2]) {
                } else gameOver();
            }  
            
            if (pressCount.length === 4) { 
                if (buttonCount[3] === pressCount[3]) {
                } else gameOver();
            }  

            if (pressCount.length === 5) { 
                if (buttonCount[4] === pressCount[4]) {
                } else gameOver();
            } 
            
            if (pressCount.length === 6) { 
                if (buttonCount[5] === pressCount[5]) {
                } else gameOver();
            } 

            if (pressCount.length === 7) { 
                if (buttonCount[6] === pressCount[6]) {
                    $("h1").text("Level 8");
                    nextLevel();
                } else gameOver();
            } 
            break;

        case 8:
            if (pressCount.length === 1) {
                if (buttonCount[0] === pressCount[0]) {
                } else gameOver();
            }

            if (pressCount.length === 2) {
                if (buttonCount[1] === pressCount[1]) {
                } else gameOver();
            }

            if (pressCount.length === 3) { 
                if (buttonCount[2] === pressCount[2]) {
                } else gameOver();
            }  
            
            if (pressCount.length === 4) { 
                if (buttonCount[3] === pressCount[3]) {
                } else gameOver();
            }  

            if (pressCount.length === 5) { 
                if (buttonCount[4] === pressCount[4]) {
                } else gameOver();
            } 
            
            if (pressCount.length === 6) { 
                if (buttonCount[5] === pressCount[5]) {
                } else gameOver();
            } 

            if (pressCount.length === 7) { 
                if (buttonCount[6] === pressCount[6]) {
                } else gameOver();
            } 

            if (pressCount.length === 8) { 
                if (buttonCount[7] === pressCount[7]) {
                    $("h1").text("🟩 You've won! :) 🟩");
                    var audio = new Audio("sounds/win.mp3");
                    audio.play();
                    pressCount = [];
                    playGame();
                } else gameOver();
            } 
            break;
    }
}

//Button functionality
$(".green").click(function(){
    greenPress();
    pressCount.push(1);
});

$(".red").click(function(){
    redPress();
    pressCount.push(2);
});

$(".yellow").click(function(){
    yellowPress();
    pressCount.push(3);
});

$(".blue").click(function(){
    bluePress();
    pressCount.push(4);
});

$(".btn").click(function() {
    gameParameters();
})

//Play the game (Level 1)
playGame();
function playGame() {
    $(document).one("keypress", function() {
        $("h1").text("Level 1");
        randomElection();  
    });
}

//1-4 Random election
function randomElection() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    if (randomNumber === 1) {
        greenPress();
        buttonCount.push(1);
    }

    if (randomNumber === 2) {
        redPress();
        buttonCount.push(2);
    }

    if (randomNumber === 3) {
        yellowPress();
        buttonCount.push(3);
    }

    if (randomNumber === 4) {
        bluePress();
        buttonCount.push(4);
    }
}

//Generated and pressed buttons count
var buttonCount = [];
var pressCount = [];