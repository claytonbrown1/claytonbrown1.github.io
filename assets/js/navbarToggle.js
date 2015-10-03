$('#mobile-menu-button').click(function(){
		$('.menu').slideToggle();
	})

$(window).resize(function(){

  if ($(window).width() > 849){
      
    $('.menu').removeAttr('style');
    
    }
  })