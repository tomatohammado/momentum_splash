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

  // http://johnpolacek.com/2012/10/03/help-prevent-fouc/
  $('.no-fouc').removeClass('no-fouc');

  resizer();

  $('html').flowtype({ // not 'body' so rem font sizes carry through
     minimum   : 500,
     maximum   : 1200,
     fontRatio : 60
  });

});

$(window).resize(function() {
    resizer();
});


