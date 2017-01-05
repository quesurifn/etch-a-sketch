

$(document).ready(function (){
  for (var x = 0; x < 20; x++) {
    for (var y = 0; y < 20; y++) {
      var unit = $("<div class='unit'></div>");
        unit.appendTo("#etch");
    }
  }

  $('.unit').mouseenter(function() {
    var $el = $(this);
    var opacity = $el.css('opacity');
    $el.css('opacity', + opacity + 0.2);
  });

  $('#shake').click(function() {
    $(".red-thing").effect("shake", {times:2}, 100);
      $('.unit').css('opacity', function() {
        var $el = $(this);
        var opacity = $el.css('opacity');
        return + opacity - 0.2;
      });
    });
}); // End of document ready
