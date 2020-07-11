$(function(){
    new WOW().init();
    $('.course').click(function (e) {
        e.preventDefault();
        // var offset = $('.manyCourse').offset().top;
        $('html').animate({ scrollTop: 571 }, 1400, "easeInOutElastic");
    });
    $('.about').click(function (e) {
        e.preventDefault();
        // var offset = $('.rate').offset().top;
        $('html').animate({ scrollTop: 1618 }, 1400, "easeInOutElastic");
    });
   
    $('.Teacher').click(function (e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 3066 }, 1400, "easeOutBounce");
    });
    $('.end').click(function (e) {
        e.preventDefault();
        var offset = $('.footer').offset().top;
        $('html').animate({ scrollTop: offset }, 1400, "easeInOutBounce");
    });
    $('.top').click(function (e) {
        e.preventDefault();
        var offset = $('.header').offset().top;
        $('html').animate({ scrollTop: offset }, 1400, "easeOutBounce");
    });
    $('.timkiemmm').click(function (e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 571 }, 1400, "easeInBounce");
    });
    // $('.home').click(function (e) {
    //     e.preventDefault();
    //     var offset = $('.header').offset().top;
    //     $('html').animate({ scrollTop: offset }, 1400, "easeOutBounce");
    // });
    $(window).scroll(function () { 
        var vitri = $('html').scrollTop()
        console.log(vitri)
        if(vitri >= 180){
            $('.menu').addClass('scrollFunction');
            $('.menu-left ul li a').addClass('scroll');
        }else if(vitri < 180){
            $('.menu').removeClass('scrollFunction');
            $('.menu-left ul li a').removeClass('scroll');
        }
    });

})  
