$(function () {
    // 背景音乐播放和关闭
    $('.header a.aki-music').click(function () {
        $(this).toggleClass('active')
        if ($(this).hasClass("active")) {
            $('#body-bgm')[0].play();
        } else {
            $('#body-bgm')[0].pause();
        }
        let that = $(this);
        let xunhuan = setInterval(function () {
            if ($('#body-bgm')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan);
            }
        }, 500)
    })


    // 显示隐藏视频弹窗层
    $('.video-hidden').click(function () {
        $('.video-alert').removeClass('active')
        $('html').removeClass('active')
        $('.video-alert video')[0].pause();
    })

    $('.video-show').click(function () {
        $('.video-alert').addClass('active')
        $('html').addClass('active')
        $('.video-alert video')[0].play();
    })


    // 新闻轮播图
    var mySwiper1 = new Swiper('.news .swiper', {
        autoplay: {
            delay: 3500,
        },
        speed: 500,
        autoHeight: true,
        loop: true,
        effect: "fade",
        pagination: {
            el: '.news .swiper-pagination',
            clickable: true
        }
    });


    // 角色小图轮播
    var swiper_small = new Swiper(".character .swiper_small", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 3,
        watchSlidesProgress: true,
        direction: "vertical",
        centeredSlides: true,
    });

    // 角色大图轮播
    var swiper_big = new Swiper(".character .swiper_big", {
        loop: true,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small,
        },
        navigation: {
            nextEl: '.character .swiper-button-next',
            prevEl: '.character .swiper-button-prev',
        },
    });


    // 插画轮播图
    var mySwiper1 = new Swiper('.illustration .swiper', {
        autoplay: {
            delay: 3500,
        },
        speed: 500,
        autoHeight: true,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: '.illustration .swiper-button-next',
            prevEl: '.illustration .swiper-button-prev',
        },
    });
})