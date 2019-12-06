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