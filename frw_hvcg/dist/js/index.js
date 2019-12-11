"use strict";

$('.icon').click(function () {
  $('ul.menu-btn').toggleClass('active');
});
$('.link-page').click(function () {
  if ($(this).parent().hasClass('active')) {
    $(this).parent().removeClass('active');
  } else {
    $(this).parent().parent().children('li').removeClass('active');
    $(this).parent().addClass('active');
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() < 500) {
    $('.nav').css('position', 'static');
  } else {
    $('.nav').css('position', 'fixed');
  }
});
$(document).ready(function () {
  $('.cards-team').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});