var frameWidth = 40;

var resizer = function() {
  //window, viewport, what's the right _name_ for it? also (research) http://www.matanich.com/2013/01/07/viewport-size/
  // var viewHeight = $(window).innerHeight();

  $(".landing").css("height", $(window).innerHeight());
  $(".md-modal").css("height", ($(window).innerHeight() - frameWidth*2));
  $(".md-modal").css("width", ($(window).innerWidth() - frameWidth*2));
}

$(document).ready(function() {
  console.log('jQuery ' + $().jquery + ' is firing.');
  resizer();
  // $('body').flowtype({
     // minimum   : 500,
     // maximum   : 1200,
     // minFont   : 12,
     // maxFont   : 40,
     // fontRatio : 30
  // });

  // $('body').flowtype({
  $('html').flowtype({
     minimum   : 500,
     maximum   : 1200,
     fontRatio : 60
  });

});

$(window).resize(function() {
    resizer();
});


