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