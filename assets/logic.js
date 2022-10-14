// dom elements
var container = document.querySelector('.container');

$("saveBtn").on("click"), function () {

}

// var for text blocks
var nineJsBlock = $('9amBlock')

// var for text area of blocks
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


// function to save text
function saveEvent (nineJsBlock) {
    if (nineAMJS.value !== "") {
        localStorage.setItem(nineAMJS.id, nineAMJS.value);
    
    } else if (nineAMJS.value === "" && localStorage.getItem(nineAMJS.id) !==null) {
        localStorage.removeItem(nineJSBlock.id);
    }
}

function buttonTest(event) {
if (event.target.tagname === 'saveBtn') {
    var textBox = event.target.parentNode.querySelector(".description");
    saveEvent(textBox) }
else if (event.target.target === 'I') {
    var textBox = event.target.parentNode.parentNode.querySelector(".description");
    saveEvent(textBox);
    }
}
