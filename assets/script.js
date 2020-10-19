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

    for (var i = 0; i < 9; i++){
        var currentIndex = i + 9;
        if (currentHour > currentIndex) {
            $(".entry-" + currentIndex).addClass("past");
        }   
        else if (currentHour == currentIndex) {
            $(".entry-" + currentIndex).addClass("present");
        }   
        else {
            $(".entry-" + currentIndex).addClass("future");
        }
    };

});