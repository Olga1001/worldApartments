$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmain").slideToggle(300);
    $(".header-main").toggleClass('shadow');
  });


});