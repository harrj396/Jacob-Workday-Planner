// dom elements
var container = document.querySelector('.container');

// var for time during work day
var eightAM = $('#8');
var nineAM = $('#9');
var tenAM = $('#10');
var elevenAM = $('#11');
var twelvePM = $('#12');
var onePM = $('#1');
var twoPM = $('#2');
var threePM = $('#3');
var fourPM = $('#4');
var fivePM = $('#5')

// shows current time on screen
var date = moment();
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

container.innerHTML += `
<div class="row>
    <div class="col-`