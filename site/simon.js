// This file contains the game logic.
// All the event-listening should happen in buttons.js

bigBox = document.querySelector('.simon-container');
start = document.querySelector('.start');
orderSentence = document.querySelector('.order');
startAgain = document.querySelector('.restart');
playerPlay = document.querySelector('.playerturn');

let listOriginal = ['green','red','yellow','blue'];
let listPlayer = [];
let listColor = [];
let level = 1;

function playerTurn(){
    bigBox.classList.remove('unclickable');
}

function noClick(){
    bigBox.classList.add('unclickable');
}
noClick();

function showPlayerTurn(){
    playerPlay.innerHTML = `Your turn!`;

}

function createColor(){   //v7
    randomColor = listOriginal[Math.floor(Math.random()* listOriginal.length)]
    return randomColor;
}
function remainClicks(){
    remaining = listColor.length - listPlayer.length;
    document.querySelector('.clicks').innerHTML = `Remaining clicks: ${remaining}`;
}

function startGame(){
    start.classList.add('hidden');
    orderSentence.classList.remove('hidden');
    listColor.push(createColor());
    document.querySelector('#colors').innerHTML = level;
    bigBox.classList.remove('unclickable');
    remainClicks();
}

function resetGame(){
    listColor = [];
    listPlayer = [];
    start.classList.remove('hidden');
    orderSentence.classList.add('hidden');
    startAgain.classList.add('hidden');
    document.querySelector('.result').innerHTML = "";
    document.querySelector('.clicks').innerHTML = "";
}

function pressOneColor(color){
    if(color === "green"){
        flashGreen();
    }
    else if(color === "red"){
        flashRed();
    }
    else if(color === "yellow"){
        flashYellow();
    }
    else{
        flashBlue();
    }
}

let j = 0;
function pressColor(){
    pressOneColor(listColor[j]);
    if(++j < listColor.length){
        setTimeout(pressColor, 1500);
    }
}

function pushAndPress(){
    j=0;
    setTimeout(pressColor, 3500);
    setTimeout(function(){playerPlay.innerHTML = `Computer's Turn`},1500);
}


function bigCompare(tile){
    listPlayer.push(tile);

    for(i=0; i<listPlayer.length; i++) {
        if(listPlayer[i] === listColor[i]){
            document.querySelector('.result').innerHTML = 'Yes!';
            remainClicks();
            if(listPlayer.length === listColor.length){
                if(listPlayer[listPlayer.length - 1] === listColor[listColor.length - 1]){
                    level = level + 1;
                    setTimeout(function(){document.querySelector('#colors').innerHTML = level}, 1500);
                    listPlayer = []
                    document.querySelector('.result').innerHTML = `Congrats! Next round!`;
                    listColor.push(createColor());
                    remainClicks();
                    pushAndPress();
                    setTimeout(showPlayerTurn, level*2000 + 2000);
                }
                else{
                    document.querySelector('.result').innerHTML = 'Wrong tile!';
                    startAgain.classList.remove('hidden');
                    bigBox.classList.add('unclickable');
                    return;
                }

            }
        }
        else{
            document.querySelector('.result').innerHTML = 'Wrong tile!';
            startAgain.classList.remove('hidden');
            bigBox.classList.add('unclickable');
            return;
        }
    }
}

start.addEventListener('click', function(){
    startGame();
    setTimeout(pressColor, 3000);
    playerPlay.innerHTML = `Computer's Turn`
    setTimeout(showPlayerTurn, level*2000 + 3000);
})

bigBox.addEventListener('click', function(event){
    tile = event.target.id;
    bigCompare(tile);
});

startAgain.addEventListener('click', function(){
    resetGame();
})
