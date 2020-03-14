$().ready(function(){

    console.log("jquery is ready!");

    $("body").html("<h2>Welcome to jQuery</h2>")
    .css("color", "chartreuse")
    .css("font-Family", "Impact")
    .css("fontSize", "2rem");

    $("div").click(function () {
        console.warn("The button was clicked")
    });



});