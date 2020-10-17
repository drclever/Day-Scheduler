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

});

