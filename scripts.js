$(function() {
  $('.trigger').click(function() {
    $(this).addClass('open');
    $('.pseudo-circle').addClass('open');
  });
  $('.close').click(function() {
    $('.trigger').removeClass('open');
    $('.pseudo-circle').removeClass('open');
  })
})