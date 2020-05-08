$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 80) {
				$('#top-btn').fadeIn();
			} else {
				$('#top-btn').fadeOut();
			}
		});
		
	$('#top-btn').click(function () {
			$("html,body").animate({ scrollTop: 0 }, "slow");
		});
		
	 $(".index a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
    });
});