$(function(){
    $('.slider').slick({
        arrows:false,
        fade: true,
        autoplay: 1000,        ////slider
        dots: true
    });

    $('.header-btn').on('click', function(){ ///відкриття меню
        $('.menu').addClass('active');
    })

    $('.close_btn').on('click', function(){//закритття меню
        $('.menu').removeClass('active');
    })


});


