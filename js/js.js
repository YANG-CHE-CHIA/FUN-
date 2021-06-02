$(function(){
    //按下三條線，item打開，三條線隱藏，X顯示
    $('.fas.fa-bars').click(function(){
        $('.fas.fa-bars').hide();
        $('.fas.fa-times').show();
        $('.item').slideDown(800);
    });
    //按下X，item收合，三條線顯示，X隱藏
    $('.fas.fa-times').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.item').slideUp(800);
    });
    //當導覽列點下去時，會對應到所屬的target
    $('.row').find('a').click(function(){
        let target = $(this).data('target');
        let t = $(target).offset().top;
        $('html,body').animate({
            scrollTop: t,
        })
        return false;
    })
    /////GOTOP特效/////
        $('#gotop').click(function(){
            $('html,body').animate({
                scrollTop:0
        })
        return false;
    });
        $(window).scroll(function(){
            let h = $(window).scrollTop();
            $('#gotop').addClass('animated');
            let _in = 'rollIn';
            let _out = 'rollOut';
            if(h > 300){
                $('#gotop').show().removeClass(_out).addClass(_in);
            }else{
                $('#gotop').removeClass(_in).addClass(_out);
            }
        });
     $(function(){
        $('.btn').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                let index = $(this).index()-1;
                console.log(index);
                $(this).parents('.container').find('.menu').hide().eq(index).show();
            })
      })
});
