$(document).ready(function() {

    //Display today's date in the jumbotron area of the page using moment.js
    const todayDate = document.querySelector("#currentDay");
    todayDate.textContent = moment().format("dddd, MMMM D, YYYY");

    //Define current hour.
    currentHour = moment().format("H");

    //Load what has been saved in LocalStorage onto the screen in the textarea.
    // Get the Keys of the localStorage; For all the keys (number will be dynamic); get the value associated with they key and display in textarea.
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
        event.preventDefault();
        let value = $(this).parent().attr("id");
        let text =  $(this).siblings(".entry").val();
        localStorage.setItem(value, text);
    });

    //Use jQuery to clear local storage and refresh the page
    $("#clear").click(function() {
        localStorage.clear();
        location.reload()
    });


    // Determine Styling of each textarea box (past = gray, present = red, future = green)

    $(".time-block").each(function () {
        let hourId = $(this).attr("id");
        let hourArray = hourId.split("-");
        let ScheduleHour = hourArray[1];
        let intScheduleHour = parseInt(ScheduleHour);
        let intcurrentHour = parseInt(currentHour);
        if (parseInt(intScheduleHour) < parseInt(intcurrentHour)) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        }
        else if (parseInt(intScheduleHour) > parseInt(intcurrentHour)) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
        else if (parseInt(intScheduleHour) === parseInt(intcurrentHour)) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    })

});