var frameWidth = 40;

var resizer = function() {
  //window, viewport, what's the right _name_ for it? also (research) http://www.matanich.com/2013/01/07/viewport-size/
  // var viewHeight = $(window).innerHeight();

  $(".page-wrapper").css("height", $(window).innerHeight());
  $(".md-modal").css("height", ($(window).innerHeight() - frameWidth*2));
  $(".md-modal").css("width", ($(window).innerWidth() - frameWidth*2));
}

$(document).ready(function() {
  console.log('jQuery ' + $().jquery + ' is firing.');
  resizer();
});

$(window).resize(function() {
    resizer();
});


