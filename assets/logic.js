// dom elements
var container = document.querySelector('.container');

// var for time during work day
var nineAMJS = $('#nineAM');
var tenAMJS = $('#tenAM');
var elevenAMJS = $('#elevenAM');
var twelvePMJS = $('#twelvePM');
var onePMJS = $('#onePM');
var twoPMJS = $('#twoPM');
var threePMJS = $('#threePM');
var fourPMJS = $('#fourPM');
var fivePMJS = $('#fivePM')

// shows current time on screen
var date = moment();
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

container.innerHTML += `
<div class="row>
    <div class="col-`