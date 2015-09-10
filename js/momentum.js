
// var viewportHeight = $(window).innerHeight()
// var setHeight = $(".page-wrapper").height(viewportHeight);
var setHeight = $(".page-wrapper").css("height", $(window).innerHeight());

$(document).ready(function() {

  console.log('jQuery ' + $().jquery + ' is firing.');
  setHeight;

});

// $(window).resize(function() {
//     // console.log(viewportHeight);
//     setHeight;
// });

