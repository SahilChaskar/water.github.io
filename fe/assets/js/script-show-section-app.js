$(document).ready(function() {
    $("#minimized").hide();
    $("#Quiz").hide();
    $("#Puzzle").hide();
    $("#Animation").hide();
});

$("#Quiz-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#Puzzle").fadeOut();
    $("#Animation").fadeOut();
    $("#main-nav").fadeOut();
    $("#Quiz").fadeIn();
    $("#minimized").fadeIn();
});

$("#Puzzle-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#Quiz").fadeOut();
    $("#Animation").fadeOut();
    $("#main-nav").fadeOut();
    $("#Puzzle").fadeIn();
    $("#minimized").fadeIn();
});

$("#Animation-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#Puzzle").fadeOut();
    $("#Quiz").fadeOut();
    $("#main-nav").fadeOut();
    $("#Animation").fadeIn();
    $("#minimized").fadeIn();
});

$("#back-to-overlay").click(function(e) {
    $("#minimized").fadeOut();
    $("#main-nav").fadeOut();
    $("#Quiz").fadeOut();
    $("#Animation").fadeOut();
    $("#Puzzle").fadeOut();
    $("#app-overlay").slideDown();
    $("#main-nav").fadeIn();
});