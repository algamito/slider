jQuery(document).ready(function() {

	$(document).on("click", ".page", function() {
		$('.pages').addClass('page_selected');
		$(this).addClass('active_page');
		
		$('.page_selected .page:not(.active_page) .img_wrp').each(function(e) {
			var self = this
			setTimeout(function () {
				$(self).animate({
					opacity:'0',
					top:'50%',
					left:"50%",
					height:'0',
					width:'0'
				})
				$(self).next('.p_inner').hide();
			}, e*40);
		})
	})
	$(document).on("click", ".close_page", function(e) {
		$('.page:not(.active_page) .img_wrp').each(function(e) {
			var self = this
			setTimeout(function () {
				$(self).animate({
					opacity:'1',
					top:'0',
					left:"0",
					height:'100%',
					width:'100%'
				})
				$(self).next('.p_inner').delay(800).fadeIn(600);
			}, e*40);
		})
		$('.pages').removeClass('page_selected');
		$('.active_page').removeClass('active_page');


		e.stopImmediatePropagation();
	})

	unready_page();

	function unready_page() {
		$('.page').each(function(e) {
			var self = this
			setTimeout(function () {
			     $(self).removeClass('page_unready');
			     $(self).find('.p_inner').delay(800).fadeIn(600);
			}, e*80);
			
		})
	}

})