let green = new Audio("soap-bubble.wav");
let red = new Audio("deep-bubble.wav");
let yellow = new Audio("liquid-bubble.wav");
let blue = new Audio("egg-bubble.wav");

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function(event) {
  flashGreen();
  //alert('You clicked the green button');
})

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  flashRed();
  //alert('You clicked the red button');
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  flashYellow();
  //alert('You clicked the yellow button');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  flashBlue();
  //alert('You clicked the blue button');
});

function flashGreen() {
  greenButton.classList.add('highlight1');
  setTimeout(function(){
      greenButton.classList.remove('highlight1');
  }, 300);
  let sound = green.cloneNode();
  sound.play();
}

function flashRed() {
  redButton.classList.add('highlight2');
  setTimeout(function(){
      redButton.classList.remove('highlight2');
  }, 300)
  let sound = red.cloneNode();
  sound.play();
}

function flashYellow() {
  yellowButton.classList.add('highlight3');
  setTimeout(function(){
      yellowButton.classList.remove('highlight3');
  }, 300)
  let sound = yellow.cloneNode();
  sound.play();
}

function flashBlue() {
  blueButton.classList.add('highlight4');
  setTimeout(function(){
      blueButton.classList.remove('highlight4');
  }, 300)
  let sound = blue.cloneNode();
  sound.play();
}
