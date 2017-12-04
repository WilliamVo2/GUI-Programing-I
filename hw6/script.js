/* This script is modified example by Earle Castledine who wrote
JQuery Novice to Ninja book.
*/
 $(document).ready(function(){
  showCelebs();

  var container = $('#price-range');
  var max = $('#max').val();
  var min = $('#min').val();

  var rangeSlider = $('<div></div>')
    .slider({
      min: 1000,
      max: 100000,
      step: 100,
      values: [min, max],
      range: true,
      animate: true,
      slide: function(e,ui) {
        $(this)
          .parent()
          .find('#min')
          .val(ui.values[0]);
        $(this)
          .parent()
          .find('#max')
          .val(ui.values[1]);
        showCelebs();
      }
    })
    .before('<h3>Drag the slider to filter by price:</h3>');

  $('#price-range').after(rangeSlider).hide();
});

function showCelebs() {
  min = $('#min').val();
  max = $('#max').val();
  $('.data tr').each(function() {
    var price = parseInt($(this).find('td:last').text().substring(1));
    if(price >= min && price <= max) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
}
