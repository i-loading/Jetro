$(document).ready(function () {
  $('.post-item').prepend('<div class="square"></div>');
  $('.gallery .square').prepend('<img src="assets/img/blog/icon-one.png" alt="">');
  $('.text .square').prepend('<img src="assets/img/blog/icon-two.png" alt="">');
  $('.video .square').prepend('<img src="assets/img/blog/icon-three.png" alt="">');
  $('.quote-post .square').prepend('<i class="fa fa-quote-left" aria-hidden="true" ></i>');
  $('.link .square').prepend('<img src="assets/img/blog/icon-four.png" alt="">');
});