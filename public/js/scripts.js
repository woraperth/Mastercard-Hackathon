$(document).ready(function() {
  // Driver Page
  $('input[type=radio][name=question]').change(function() {
    if (this.value == 'yes') {
      $('.taxi-info').slideDown();
    }
    else if (this.value == 'no') {
      $('.taxi-info').slideUp();
    }
  });

$('.open-dropdown').on('click', function() {
    $('.dropdown').hide();
    $(this).find('.dropdown').fadeToggle();
  });
});
