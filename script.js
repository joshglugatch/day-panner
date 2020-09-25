//date at top
var time = moment().format("dddd, MMMM Do");
console.log(time)
$("#currentDay").append("<p>" + time + "<p>")

// current hour variable in 24 hour time
var currentHour = moment().format("H");
currentHour = parseInt(currentHour)
console.log(currentHour)



//color change statements

    if(currentHour == 9){
        $("#9").addClass("present")
    } else if(currentHour > 9){
        $("#9").addClass("past")
    }else{
        $("#9").addClass("future")
    }

    if(currentHour == 10){
        $("#10").addClass("present")
    } else if(currentHour > 10){
        $("#10").addClass("past")
    }else{
        $("#10").addClass("future")
    }

    if(currentHour == 11){
        $("#11").addClass("present")
    } else if(currentHour > 11){
        $("#11").addClass("past")
    }else{
        $("#11").addClass("future")
    }

    if(currentHour == 12){
        $("#10").addClass("present")
    } else if(currentHour > 12){
        $("#12").addClass("past")
    }else{
        $("#12").addClass("future")
    }

    if(currentHour == 13){
        $("#1").addClass("present")
    } else if(currentHour > 13){
        $("#1").addClass("past")
    }else{
        $("#1").addClass("future")
    }

    if(currentHour == 14){
        $("#2").addClass("present")
    } else if(currentHour > 14){
        $("#2").addClass("past")
    }else{
        $("#2").addClass("future")
    }

    if(currentHour == 15){
        $("#3").addClass("present")
    } else if(currentHour > 15){
        $("#3").addClass("past")
    }else{
        $("#3").addClass("future")
    }

    if(currentHour == 16){
        $("#4").addClass("present")
    } else if(currentHour > 16){
        $("#4").addClass("past")
    }else{
        $("#4").addClass("future")
    }

    if(currentHour == 17){
        $("#5").addClass("present")
    } else if(currentHour > 17){
        $("#5").addClass("past")
    }else{
        $("#5").addClass("future")
    }


    //textarea to local storage