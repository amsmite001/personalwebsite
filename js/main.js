$(document).ready(function() {
    $('.progress .progress-bar').css("width",
              function() {
                  return $(this).attr("aria-valuenow") + "%";
              }
      )

      $(window).scroll( function(){
              $('.anime').each( function(i){
            let objectz = $(this).position().top + $(this).outerHeight();
            let windowz = $(window).scrollTop() + $(window).height();
            if( windowz > objectz ) $(this).animate({'opacity':'1'},1500);
        }); 
    
    });
    
  });
  
(function($) {
    $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

})(jQuery);

