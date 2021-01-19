$(function() {
    $(document).on("click", ".vr_news_tab button", function() {
        var index = $(this).index();
        $(this).addClass('active').siblings('button').removeClass('active');
        $('.vr_news_content .row').eq(index).show().siblings('.row').hide();
    });
    $(window).resize(function(){
        $('.anli .col-md-6').css('min-height','0px')
    });
    $('.anli .col-md-6').hover(function(){
        $('.anli .col-md-6').css('min-height',Math.ceil($(this).height())+'px')
    })
    $(window).scroll(function(){
        $('.service .row img').stop(true,false).animate({top:'-15px'},500).animate({top:'0px'},500)
    })
    document.querySelectorAll('.xiananli').forEach((item)=>{
        item.onclick=function(){
            document.querySelector('html').style.height='5500px'
            location.href='#xiananli';
            setTimeout(function(){
                document.querySelector('html').style.height='auto'  
            },1000) 
        }
    })
});
window.onload=function(){
    if(localStorage.getItem('skip')){
        document.querySelector('html').style.height='5500px'
        let aa='#'+localStorage.getItem('skip')
        location.href=aa;
        localStorage.removeItem('skip')
        this.setTimeout(function(){
            document.querySelector('html').style.height='auto'  
        },1000)
    }
}