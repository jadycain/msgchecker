$(document).ready(function(){
    // faq
	$('.item_box .item .item_inner').on('click',function(){
		if($(this).hasClass('active')!=true){
			$('.item_box .item .item_inner.active').parent().find('.answer').slideUp(500);
			$('.item_box .item .item_inner.active').removeClass('active');
			$(this).addClass('active')
			$(this).parent().find('.answer').slideDown(500);
		}
		else{
			$(this).removeClass('active');
			$(this).parent().find('.answer').slideUp(500);
		}
	});
});
