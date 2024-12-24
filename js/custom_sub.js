$(function () {


    const sub01_content_slide = new Swiper('.sub01_content_slide_box', {
        // loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 1000,
    });

    $('.sub01_content_slide ul li').on('click', function () {
        let idx = $(this).index();

        sub01_content_slide.slideToLoop(idx, 400);
    });

    const sub01_banner_slide = new Swiper('.sub01_banner_slide', {
        loop: true,
        autoplay: { delay: 2000, },
        spaceBetween: 30,
        slidesPerView: 3,
        speed: 1000,
    });


})