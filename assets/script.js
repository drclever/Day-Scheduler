$(document).ready(function() {

    //Display today's date in the jumbotron area of the page using moment.js
    const todayDate = document.querySelector("#currentDay");
    todayDate.textContent = moment().format("dddd, MMMM D, YYYY");
    currentHour = moment().format("H");

    //Load LocalStorage
    let keys = Object.keys(localStorage);

    for (let i =0; i < localStorage.length; i++) {
        let value = localStorage.getItem(keys[i]);
        $("#" + keys[i] + " .entry").val(value);
    }

    //Use jquery to save textarea input to local storage.  Using military time for numbers. 
    //Start with 9am to 5pm in military time.
    //When the class of saveBtn notices a click, the code determines the id by looking at the parent (div).  Example: hour-9.  
    //From the class of entry, the code knows that the textarea is what we are looking at (the button is a sibiling of the textarea.)
    $(".saveBtn").on("click", function (event) {
        let value = $(this).parent().attr("id");
        let text =  $(this).siblings(".entry").val();
        localStorage.setItem(value, text);
    });


    // Determine Styling of each textarea box

    $(".time-block").each(function () {
        let hourId = $(this).attr("id");
        let hourArray = hourId.split("-");
        let hourOfDay = hourArray[1];
        let intHourDay = parseInt(hourOfDay);
        let intcurrentHour = parseInt(currentHour);
        if (parseInt(intHourDay) < parseInt(intcurrentHour)) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        }
        else if (parseInt(intHourDay) > parseInt(intcurrentHour)) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
        else if (parseInt(intHourDay) === parseInt(intcurrentHour)) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    })

});