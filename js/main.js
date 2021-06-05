$(document).ready(function() {

  $(document).on('init.slides', function() {
    $('#loading-container').fadeOut(function() {
      $(this).remove();
    });
  });

  // $('#slides').hammer().on('swipeleft', function() {
  //   $(this).superslides('animate', 'next');
  // });

  // $('#slides').hammer().on('swiperight', function() {
  //   $(this).superslides('animate', 'prev');
  // });


	function isElementInViewport(elem) {
	    var $elem = $(elem);

	    // Get the scroll position of the page.
	    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	    var viewportTop = $(scrollElem).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();

	    // Get the position of the element on the page.
	    var elemTop = Math.round( $elem.offset().top );
	    var elemBottom = elemTop + $elem.height();

	    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
	}
	
	var slides = $("#slides").superslides({
		play: 4000,
		animation_speed: 'slow'
	});


    var top = $('#to-top').click(function(e) {
        $('html, body').animate({
            scrollTop: slides.offset().top
        }, 1000);
        return false;
    });


	// Check if it's time to start the animation.
	function checkAnimation() {
	    var $elem = $('.slide-intro');

	    // If the animation has already been started

	    if (isElementInViewport($elem)) {
	        // Start the animation
			$('.easing').css('opacity', '1');
			$('.easing').css('transform', 'none');
	    }
	    if(isElementInViewport(slides)) {
	    	top.css('opacity', '0');
	    } else {
	    	top.css('opacity', '1');
	    }
	}


	// Capture scroll events
	$(window).scroll(function(){
	    checkAnimation();
	});


	// $('.tile-f').each(function(key, value) {
	// 	var item = $(value);
	// 	var image = item.find('.text');
	// 	var text = item.find('.image');
	// 	var textHeight = text.outerHeight();
	// 	var imagHeight = image.outerHeight();
	// 	console.log(textHeight + ',' + imagHeight)

	// 	item.css('height', textHeight > imagHeight ? textHeight : imagHeight);
	// 	if(imagHeight > textHeight) {
	// 		text.css('height', imagHeight);
	// 	} else {
	// 		image.css('height', textHeight);
	// 	}

	// });

});
