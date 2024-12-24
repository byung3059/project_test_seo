$(function () {

    $(window).on('scroll', function () {

        let sct = $(window).scrollTop()
        if (sct > 1) {
            $('.header').addClass('on')
        } else (
            $('.header').removeClass('on')
        )

    })
    $(window).on('scroll', function () {

        let sct = $(window).scrollTop()
        if (sct > 500) {
            $('.to_top').addClass('on')
        } else (
            $('.to_top').removeClass('on')
        )

    })

    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });


    $('.util_white, .util_black').on('click', function (e) {

        e.preventDefault();
        $('.stiemap').toggleClass('on')
        $('.header').toggleClass('sitemap')

    })
    $('.stiemap .top .btn button').on('click', function () {


        $('.stiemap').removeClass('on')

    })

    $('.stiemap_gnb>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.stiemap_menu').stop().slideUp();

        if ($('.stiemap').hasClass('on')) {
            e.preventDefault();

            $(this).next().stop().slideToggle();
        }
    })
    $('.stiemap_menu>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.stiemap_menu02').stop().slideUp();

        if ($('.stiemap').hasClass('on')) {
            e.preventDefault();

            $(this).next().stop().slideToggle();
        }
    })


});

$(function () {


    const main_news_slide = new Swiper('.main_news_slide', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 1000,

        // autoplay: { delay: 2000, },

        breakpoints: {
            1600: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });


})


