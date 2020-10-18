$(document).ready(function() {

    //Display today's date in the jumbotron area of the page using moment.js
    const todayDate = document.querySelector("#currentDay");
    todayDate.textContent = moment().format("dddd, MMMM D, YYYY");

/*     let inputTextarea9 = document.querySelector(".entry-9");
    let clickButton9 = document.querySelector(".button9");

    //Retrieve local storage
    inputTextarea9.value = localStorage.getItem("text9");

    //when the Save button is clicked, store the input of the textarea
    clickButton9.addEventListener("click", updateText1);
    //sets the input of text area into local storage
    function updateText1() {
        localStorage.setItem("text9", inputTextarea9.value);
    }; */

    //Use jquery to save textarea input to local storage.  Using military time for numbers. 
    //Start with 9am to 5pm in military time.
    $(".button9").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-9").val();
        localStorage.setItem("text9", newText);
    });
    $(".entry-9").val(localStorage.getItem("text9"));

    $(".button10").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-10").val();
        localStorage.setItem("text10", newText);
    });
    $(".entry-10").val(localStorage.getItem("text10"));

    $(".button11").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-11").val();
        localStorage.setItem("text11", newText);
    });
    $(".entry-11").val(localStorage.getItem("text11"));
    
    $(".button12").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-12").val();
        localStorage.setItem("text12", newText);
    });
    $(".entry-12").val(localStorage.getItem("text12"));

    $(".button13").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-13").val();
        localStorage.setItem("text13", newText);
    });
    $(".entry-13").val(localStorage.getItem("text13"));

    $(".button14").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-14").val();
        localStorage.setItem("text14", newText);
    });
    $(".entry-14").val(localStorage.getItem("text14"));

    $(".button15").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-15").val();
        localStorage.setItem("text15", newText);
    });
    $(".entry-15").val(localStorage.getItem("text15"));
    
    $(".button16").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-16").val();
        localStorage.setItem("text16", newText);
    });
    $(".entry-16").val(localStorage.getItem("text16"));

    $(".button17").on("click", function () {
        event.preventDefault();
        let newText = $(".entry-17").val();
        localStorage.setItem("text17", newText);
    });
    $(".entry-17").val(localStorage.getItem("text17"));

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