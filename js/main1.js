/*banner图片自动滚动*/
$('.carousel').carousel('cycle');
/*导航跟随*/
$(window).scroll( function() {
	if($(document).scrollTop() != 0)
  	{
  		$("#page-content-wrapper").addClass("fixed");		
  	}
  	else{
  		$("#page-content-wrapper").removeClass("fixed");
  	}
});	
/*导航侧滑*/
$(document).ready(function () {
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;
	trigger.click(function () {
		hamburger_cross();      
	});
	function hamburger_cross() {
		if (isClosed == true) {          
		    overlay.hide();
		    trigger.removeClass('is-open');
		    trigger.addClass('is-closed');
		    isClosed = false;
		    } else {   
		    overlay.show();
		    trigger.removeClass('is-closed');
		    trigger.addClass('is-open');
		    isClosed = true;
		    }
		}
	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});  
});
const index=1;
$(".paging ul .pages a").on('click',function () {
	$(this).addClass('previous_s').siblings('a').removeClass('previous_s')
	const a=$(this).index();
	$('.mainnew>div').eq(a).addClass('mainnews').siblings('div').removeClass('mainnews')
})
$(".paging ul li").on('click',function(){
	const a=$('.paging ul li a[class=previous_s]').index();
	if(this.className=='reduce'&& $('.paging ul li a[class=previous_s]').prev().length){
		$('.paging ul li a[class=previous_s]').prev().addClass('previous_s').siblings('a').removeClass('previous_s')
		$('.mainnew>div').eq(a-1).addClass('mainnews').siblings('div').removeClass('mainnews')
	}else
	if(this.className=='add'&& $('.paging ul li a[class=previous_s]').next().length){
		$('.paging ul li a[class=previous_s]').next().addClass('previous_s').siblings('a').removeClass('previous_s')
		$('.mainnew>div').eq(a+1).addClass('mainnews').siblings('div').removeClass('mainnews')
	}
})