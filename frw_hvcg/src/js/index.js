$(document).ready(function(){
    $('.icon').click(function(){
        $('ul.menu-btn').toggleClass('active');
        $(this).children('i').toggleClass('fa-times');
    });
    
    $('.link-page').click(function(){
        // $(this).children('i:first-child').toggleClass('fa-caret-up');
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this).children('i:first-child').removeClass('fa-caret-up');
        } else {
            $(this).parent().parent().children('li').removeClass('active');
            $(this).children('i:first-child').addClass('fa-caret-up');
            $(this).parent().addClass('active');
        }
    });

    
    
    $(window).scroll(function() {
       if($(window).scrollTop() < 500){
            $('.nav').css('position', 'static');
       }
       else {
        $('.nav').css('position', 'fixed');
       }
    });

    $('.cards-team').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.cards-recent').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
})
