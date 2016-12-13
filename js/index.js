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
    slideNumber: true
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


/*
 class Rule {

 input;
 message;
 success;

 constructor() {
 this.input = $('#input');
 this.message = $('#message');
 this.success = false
 }

 writeMessage(message) {
 this.message.text(message)
 }

 setStatus(status) {
 this.success = status
 }

 resolve(success, failure) {
 if (this.success == true) {
 success();
 } else {
 failure();
 }
 }

 }

 */
