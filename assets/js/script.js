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
  } else {
    $('.nav-bar__menu').show();
  }
});

$( '.toggle-button' ).change(function() {
  if ($(window).width() < 768) {
    if( $(this).is(':checked') ) {
        $('.nav-bar__menu').slideDown('slow');
    } else {
        $('.nav-bar__menu').slideUp('slow');
    }
  }
});

$(window).scroll(function() {
  if ($(window).width() < 768) {
    if($(window).scrollTop()>=($( ".header__contact" ).offset().top - 114.4)) {
      $( ".nav-bar" ).css( "border-bottom", "1px solid #CCC" );
    } else {
      $( ".nav-bar" ).css( "border-bottom", "none" );
  } else {
    if($(window).scrollTop()>=($( ".header__contact" ).offset().top - 88.9667)) {
      $( ".nav-bar" ).css( "border-bottom", "1px solid #CCC" );
    } else {
      $( ".nav-bar" ).css( "border-bottom", "none" );
    }
  }
});
