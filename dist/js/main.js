"use strict";

$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmain").slideToggle(300);
    $(".header-main").toggleClass('shadow');
  }); // stopPropagation

  $(".stopPropagation").click(function (e) {
    e.stopPropagation();
  }); // select

  $(".select-item").click(function () {
    $(this).toggleClass('active');
    $(this).siblings(".select-drop").slideToggle(300);
  });
  $("html, body").click(function () {
    $(".select-item").removeClass('active');
    $(".select-drop").slideUp(300);
  });
  $(".select-option").click(function () {
    var optionText = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest(".select").find(".select-item span").text(optionText);
    $(".select-item").removeClass('active');
    $(".select-drop").slideUp(300);
  });
});