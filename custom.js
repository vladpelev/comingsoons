/* For Home Page 8-9 */
function onePageLayout(){
	'use strict';
	
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});   
	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	}  // End if
  });
}

/* Timer JS */
    $(document).ready(function() {
      $('.countdown').countdown({date: '30 march 2018 23:5'}, function() {
        $('.countdown').text('we are live');
      });
    });
	function openNav() {
		if($(window).width() <= 800)
		{
			document.getElementById("mySidenav").style.left = "0";
			document.getElementById("main").style.marginLeft = "100%";
		}
		else
		{
			document.getElementById("mySidenav").style.left = "0px";
			document.getElementById("main").style.marginLeft = "800px";
		}
	}
	function closeNav() {
		document.getElementById("mySidenav").style.left = "-800px";
		document.getElementById("main").style.marginLeft= "0";
	}
/* Scroll JS */
	(function($){
		$(window).on("load",function(){
			/* all available option parameters with their default values */
			$(".content").mCustomScrollbar({
				setWidth:false,
				setHeight:false,
				axis:"y",
			});
		});
	})(jQuery);

/*################	End OF Function List ###################################*/
/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	
	onePageLayout();
	
});
/* Document.ready END */