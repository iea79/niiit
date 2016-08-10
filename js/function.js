$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('body').css({
	        minHeight: $(window).height() + 'px'
	    });
	    $('.baron').css({
	        height: $(window).height()*0.4 + 'px' 
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});


	// Mobile menu
	var touch = $('#touchmenu');
    var menu = $('.navbar');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    // Scroller
	baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
	}).controls({
        // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
        track: '.baron__track',
    });

    // Open modal window
    $('.preload_after').hide();

    setTimeout(function() {
    	$('.modal__window').addClass('open');
    	$('.preload_befor').hide();
    }, 3000);
    
    $('.modal__window').on('click', '.close', function(event) {
    	event.preventDefault();

		$('.modal__window').removeClass('open');
		$('.preload_after').show();
    	setTimeout(function() {
			$('.preload_after').hide();
    	}, 3000);
    });


});