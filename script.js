function controller(event) {

    if (event.key == "Enter") {
        if (runWorkerNumber == 0) {
        run();
        runSound.play();
        updateScore();
        background();
        falmelocations.forEach(generateflames);     
        }
    }

    if (event.key == " ") {
        if (jumpWorkerNumber == 0){
            if (runWorkerNumber != 0){
            clearInterval(runWorkerNumber);
            runSound.pause();
            jump();
            jumpSound.play();
    }
}
    }
}
var runImageNumber = 1;
var runWorkerNumber = 0;
var runSound = new Audio("run.mp3");
runSound.loop = true;

//run animation

function run() {
   runWorkerNumber = setInterval(() => {

        runImageNumber = runImageNumber + 1;
        if (runImageNumber == 9) {
            runImageNumber = 1;
        }
        document.getElementById("boy").src = "run" + runImageNumber + ".png";

    }, 100);
}

var jumpImageNumber =1;
var jumpWorkerNumber =0;
var boyMarginTop = 502;
var jumpSound = new Audio("jump.mp3");


function jump() {

   jumpWorkerNumber = setInterval(() =>{

        jumpImageNumber = jumpImageNumber +1;

    if (jumpImageNumber < 8){
        boyMarginTop = boyMarginTop - 20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber > 7){
        boyMarginTop = boyMarginTop + 20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
    }

        if(jumpImageNumber == 13) {
            jumpImageNumber = 1;
            clearInterval(jumpWorkerNumber);
            jumpWorkerNumber = 0;
            run();
            runSound.play();
        }

        document.getElementById("boy").src="jump" + jumpImageNumber + ".png";
    }, 100);

}

//score section

var score = 0;
var scoreWorkerNumber = 0;

function updateScore() {

    scoreWorkerNumber = setInterval(() => {
        if (score == 1500) {
            alert("You Won!");
            runSound.pause();
            window.location.reload();
        }

    score = score + 10;

    document.getElementById("score").innerHTML = score;

}, 100);
}


//background animation

var backgroundX = 0;
var backgroundWorkerNumber = 0;


function background() {

    backgroundWorkerNumber = setInterval(() => {

    backgroundX = backgroundX - 10;

    document.getElementById("background").style.backgroundPositionX = backgroundX + "px";

        }, 50);

    }

//dead animation

    var deadImageNumber = 1;
    var deadWorkerNumber = 0;
    var deadSound = new Audio("dead.mp3");
    
    function dead() {

    deadWorkerNumber = setInterval(() => {

        deadImageNumber = deadImageNumber + 1; 
        
        if(deadImageNumber == 11) {
            deadImageNumber = 1;
            clearInterval(deadWorkerNumber);
            alert("Game Over!");
            window.location.reload();
        }
        document.getElementById("boy").src = "dead" + deadImageNumber + ".png";

    }, 100);

    }

//flames generate

    var falmelocations = [400,800,1200,1600,2000,2400,2800];
    var flameWorkerNumber = 0;

    function generateflames(x){

        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "flame";
        i.style.marginLeft = x + "px";
        document.getElementById("background").appendChild(i);

        flameWorkerNumber = setInterval(() => {

        x = x -10;
        i.style.marginLeft = x +"px";

        if (x == 80) {
            if (jumpWorkerNumber == 0){
            clearInterval(runWorkerNumber);
            runSound.pause();
            clearInterval(backgroundWorkerNumber);
            clearInterval(scoreWorkerNumber);
            dead();
            deadSound.play();
        }
    }
}, 50);

 }
