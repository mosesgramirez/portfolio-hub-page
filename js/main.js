// Ensures the header takes up the full height of the window
$(document).ready(function() {
    $('.header').height($(window).height());
})

$("a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)
})