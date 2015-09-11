var setHeight = function() {
  //window, viewport, what's the right _name_ for it? also (research) http://www.matanich.com/2013/01/07/viewport-size/
  // var viewHeight = $(window).innerHeight();

  $(".page-wrapper").css("height", $(window).innerHeight());
  $(".md-modal").css("height", ($(window).innerHeight() - 80));
}

$(document).ready(function() {
  console.log('jQuery ' + $().jquery + ' is firing.');
  setHeight();
});

$(window).resize(function() {
    setHeight();
});


