alert ('hello');
// (function(){
//   "use strict";
//
//   //Declaring all variables
//
var background = document.getElementById('#container');
var clock = document.querySelector('.clock');
var hoursContainer = document.querySelector('.hours');
var minutesContainer = document.querySelector('.minutes');
var secondsContainer = document.querySelector('.seconds');
var progressBar = document.querySelector('#progress');
var isHovering = false;
//
//
//
// //Declaring all functions
//
//
//
// //RUN clock
function displayTime() {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes= currentTime.getMinutes();
var seconds = currentTime.getSeconds();
// // progressBar.style.width = (seconds / 60 * 100) + '%';
// // hexcode();
// }
//
//
// // function hexcode() {
// //   var Red =('0' + hours.toString(16)).slice(-2);
// //   var Green =('0' + minutes.toString(16)).slice(-2);
// //   var Blue = ('0' + seconds.toString(16)).slice(-2);
// //   var colorCode = "#" + Red + Green + Blue;
// // //
// //   background.style.backgroundColor = colorCode;
// // //
// // }
// //
// // function mouseOverHandler (){
// //   isHovering = true;
// // }
// //
// // function mouseOutHandler () {
// //   isHovering = true;
// // }
// //
// // if (isHovering) {
// //   hoursContainer.textContent = Red;
// //   minutesContainer.textContent = Green;
// //   secondsContainer.textContent = Blue;
// // }
// // else{
// //   hoursContainer.textContent = ("0" + currentTime.getHours()).slice(-2);
// //   minutesContainer.textContent = ("0" + currentTime.getMinutes()).slice(-2);
// //   secondsContainer.textContent = ("0" + currentTime.getSeconds()).slice(-2);
// // }
//
//
//
window.setInterval(displayTime, 1000);
//
// clock.addEventListener('mouseover', mouseOverHandler);
// clock.addEventListener('mouseout' , mouseOutHandler);
//
//
//
//
//
//
//   } ());
