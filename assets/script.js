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

    //Use jquery to save textarea input to local storage
    $(".button9").on("click", function () {
        let newText = $(".entry-9").val();
        localStorage.setItem("text9", newText);
    })
    $(".entry-9").val(localStorage.getItem("text9"));

});

