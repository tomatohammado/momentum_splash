var frameWidth = 40;

var resizer = function() {
  $(".landing").css("height", $(window).innerHeight());
  $(".md-modal").css("height", ($(window).innerHeight() - frameWidth*2));
  $(".md-modal").css("width", ($(window).innerWidth() - frameWidth*2));
}

$(document).ready(function() {
  console.log('jQuery ' + $().jquery + ' is firing.');

  // http://johnpolacek.com/2012/10/03/help-prevent-fouc/
  $('.no-fouc').removeClass('no-fouc');

  resizer();

  $('html').flowtype({
     minimum   : 768,
     maximum   : 1200,
     fontRatio : 60
  });

});

$(window).resize(function() {
    resizer();
});


