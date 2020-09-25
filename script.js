//date at top
var time = moment().format("dddd, MMM Do");
console.log(time)
$("#currentDay").append("<p>" + time + "<p>")

//current hour variable
var currentHour = moment().format("h");
currentHour = parseInt(currentHour)
console.log(currentHour)


//color change function
function currentTime(){
    
}