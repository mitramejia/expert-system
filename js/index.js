// =============================================================
//
// Name: index
// -> Description: 
//
// Author: mitramejia 
// Created at: 12/7/16
//
// =============================================================

Reveal.initialize({
    transition: 'fade',
    overview: false,
    slideNumber: true,
    progress: false,
    controls: false,
});

$(document).on("ready", function () {

    $(".se-transition").on("click", function () {
        let nextSlide = $(this).attr("data-to");
        let currentSlide = Reveal.getCurrentSlide().id;
        console.log('Going from '+ currentSlide +' click to: ' + nextSlide);
        Reveal.slide(nextSlide);
    });

    $("#btn-no").on("click", function () {
        Reveal.down();
    });

    $("#btn-yes").on("click", function () {
        Reveal.next();
    });

});
