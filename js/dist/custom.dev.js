"use strict";

$(window).on('load', function () {
  $("#loader-ripple").fadeOut(1000);
  $('body').delay(1000).queue(function (next) {
    $(this).addClass('loaded');
  });
  openPage(1);
});