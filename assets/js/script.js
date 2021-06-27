$(document).ready(function() {
  if ($(window).width() < 768) {
    $('.nav-bar__menu').hide();
    $( '.toggle-button' ).prop( "checked", false );
  }
});

$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.nav-bar__menu').hide();
    $( '.toggle-button' ).prop( "checked", false );
    $( '.toggle-button' ).change(function() {
        if( $(this).is(':checked') ){
            $('.nav-bar__menu').slideDown('slow');
        } else {
            $('.nav-bar__menu').slideUp('slow');
        }
    });
  } else {
    $('.nav-bar__menu').show();
  }
});
