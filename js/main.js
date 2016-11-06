(function(){
  "use strict";

  //Declaring all variables


  var background = document.getElementById('container');
  var body = document.querySelector('.body');
  var progressBar = document.getElementById('progress');
  var hoursContainer = document.querySelector('.hours');
  var minutesContainer = document.querySelector('.minutes');
  var secondsContainer = document.querySelector('.seconds');
  var clock = document.querySelector('.clock');
  var isHovering = false;


//Declaring all functions
//RUN clock


function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()
  // console.log(currentTime);
  hoursContainer.textContent = ("0" + hours).slice(-2);
  minutesContainer.textContent = ("0" + minutes).slice(-2);
  secondsContainer.textContent = ("0" + seconds).slice(-2);

  var Red =('0' + hours.toString(16)).slice(-2);
  var Green =('0' + minutes.toString(16)).slice(-2);
  var Blue = ('0' + seconds.toString(16)).slice(-2);
  var colorCode = "#" + Red + Green + Blue;
  body.style.backgroundColor = colorCode;
  progressBar.style.width = (seconds / 60 * 100) + '%';


  if(isHovering){
    hoursContainer.textContent = Red;
    minutesContainer.textContent = Green;
    secondsContainer.textContent = Blue;
  }
}

function mouseOverHandler (){
  isHovering = true;
}

function mouseOutHandler () {
  isHovering = false;
}

displayTime();
window.setInterval(displayTime, 1000);

clock.addEventListener('mouseover', mouseOverHandler);
clock.addEventListener('mouseout' , mouseOutHandler);


  } ());
