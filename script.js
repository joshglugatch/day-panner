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
    } else if(currentHour < 9){
        $("#9").addClass("future")
    }

    if(currentHour == 10){
        $("#10").addClass("present")
    } else if(currentHour < 10){
        $("#10").addClass("future")
    }

    if(currentHour == 11){
        $("#11").addClass("present")
    } else if(currentHour < 11){
        $("#11").addClass("future")
    }

    if(currentHour == 12){
        $("#12").addClass("present")
    } else if(currentHour < 12){
        $("#12").addClass("future")
    }

    if(currentHour == 13){
        $("#1").addClass("present")
    } else if(currentHour < 13){
        $("#1").addClass("future")
    }

    if(currentHour == 14){
        $("#2").addClass("present")
    } else if(currentHour < 14){
        $("#2").addClass("future")
    }

    if(currentHour == 15){
        $("#3").addClass("present")
    } else if(currentHour < 15){
        $("#3").addClass("future")
    }

    if(currentHour == 16){
        $("#4").addClass("present")
    } else if(currentHour < 16){
        $("#4").addClass("future")
    }

    if(currentHour == 17){
        $("#5").addClass("present")
    } else if(currentHour < 17){
        $("#5").addClass("future")
    }

    
    // textarea to local storage
    //button clicks
   $(".t9").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("9am", $("#9").val())
    
   })
    
   $(".t10").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("10am", $("#10").val())
   })
    
   $(".t11").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("11am", $("#11").val())
   })
    
   $(".t12").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("12pm", $("#12").val())
   })
    
   $(".t1").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("1pm", $("#1").val())
   })
    
   $(".t2").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("2pm", $("#2").val())
   })
    
   $(".t3").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("3pm", $("#3").val())
   })
    
   $(".t4").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("4pm", $("#4").val())
   })
    
   $(".t5").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("5pm", $("#5").val())
   })

   //retrive local storage
   $("#9").text(localStorage.getItem("9am"));
   $("#10").text(localStorage.getItem("10am"));
   $("#11").text(localStorage.getItem("11am"));
   $("#12").text(localStorage.getItem("12pm"));
   $("#1").text(localStorage.getItem("1pm"));
   $("#2").text(localStorage.getItem("2pm"));
   $("#3").text(localStorage.getItem("3pm"));
   $("#4").text(localStorage.getItem("4pm"));
   $("#5").text(localStorage.getItem("5pm"));