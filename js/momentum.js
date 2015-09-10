var setHeight = function() {
  $(".page-wrapper").css("height", $(window).innerHeight());
}

$(document).ready(function() {
  console.log('jQuery ' + $().jquery + ' is firing.');
  setHeight();
});

$(window).resize(function() {
    setHeight();
});


