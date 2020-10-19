$(document).ready(function() {

    //Display today's date in the jumbotron area of the page using moment.js
    const todayDate = document.querySelector("#currentDay");
    todayDate.textContent = moment().format("dddd, MMMM D, YYYY");
    currentH = moment().format("H");

    //Load LocalStorage
    var keys = Object.keys(localStorage);
    for (let i =0; i < localStorage.length; i++) {
        let value = localStorage.getItem(keys[i]);
        let extractNum = keys[i].slice(4);
        $(".entry-" + extractNum).text(value);
    }

    //Use jquery to save textarea input to local storage.  Using military time for numbers. 
    //Start with 9am to 5pm in military time.
    $(".saveBtn").on("click", function (event) {
        var value1 = this.id;
        var extractNum1 = value1.slice(6)
        let newText = $(".entry-" + extractNum1).val();
        localStorage.setItem("text" + extractNum1, newText);
    });


    // Determine Styling of each textarea box
    var currentHour= new Date().getHours();

    if (currentHour > 9) {
        $(".entry-9").addClass("past");
        }	
        else if (currentHour == 9) {
            $(".entry-9").addClass("present");
        }
        else if (currentHour < 9) {
            $(".entry-9").addClass("future");
        }

    if (currentHour > 10) {
        $(".entry-10").addClass("past");
        }
        else if (currentHour == 10) {
            $(".entry-10").addClass("present");
        }
        else if (currentHour < 10) {
            $(".entry-10").addClass("future");
        }

    if (currentHour > 11) {
        $(".entry-11").addClass("past");
        }
        else if (currentHour == 11) {
            $(".entry-11").addClass("present");
        }
        else if (currentHour < 11) {
            $(".entry-11").addClass("future");
        }

    if (currentHour > 12) {
        $(".entry-12").addClass("past");
        }
        else if (currentHour == 12) {
            $(".entry-12").addClass("present");
        }
        else if (currentHour < 12) {
            $(".entry-12").addClass("future");
        }

    if (currentHour > 13) {
        $(".entry-13").addClass("past");
        }
        else if (currentHour == 13) {
            $(".entry-13").addClass("present");
        }
        else if (currentHour < 13) {
            $(".entry-13").addClass("future");
        }

    if (currentHour > 14) {
        $(".entry-14").addClass("past");
        }
        else if (currentHour == 14) {
            $(".entry-14").addClass("present");
        }
        else if (currentHour < 14) {
            $(".entry-14").addClass("future");
        }

    if (currentHour > 15) {
        $(".entry-15").addClass("past");
        }
        else if (currentHour == 15) {
            $(".entry-15").addClass("present");
        }
        else if (currentHour < 15) {
            $(".entry-15").addClass("future");
        }

    if (currentHour > 16) {
        $(".entry-16").addClass("past");
        }
        else if (currentHour == 16) {
            $(".entry-16").addClass("present");
        }
        else if (currentHour < 16) {
            $(".entry-16").addClass("future");
        }

    if (currentHour > 17) {
        $(".entry-17").addClass("past");
        }
        else if (currentHour == 17) {
            $(".entry-17").addClass("present");
        }
        else if (currentHour < 17) {
            $(".entry-17").addClass("future");
        }

});