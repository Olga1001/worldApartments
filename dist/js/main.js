"use strict";

$(document).ready(function () {
  var $body = $(window.document.body);

  function bodyFreezeScroll() {
    $body.css('overflow', 'hidden');
    $body.css('position', 'fixed');
  }

  function bodyUnfreezeScroll() {
    $body.css('overflow', 'auto');
    $body.css('position', 'relative');
  } // burder


  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmain").slideToggle(300);
    $(".header-main").toggleClass('shadow');
  }); // stopPropagation

  $(".stopPropagation").click(function (e) {
    e.stopPropagation();
  }); // select

  $(".select-item").click(function () {
    $(this).toggleClass('active').parents().siblings().find(".select-item").removeClass('active');
    $(this).siblings(".select-drop").slideToggle(300).parents().siblings().find(".select-drop").slideUp(300);
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
  }); // popups show

  $("[data-btn-popup]").click(function () {
    var data = $(this).data("btn-popup");
    $('[data-popup="' + data + '"]').addClass('active');

    if (window.matchMedia("(max-width: 991px)").matches) {
      $(".wrapper").hide();
    }
  }); // popups hide

  $(".btn-close, .popup").click(function () {
    $(".popup").removeClass('active');
    $(".wrapper").show();
  }); //change list or map

  $("#btn-change").click(function () {
    $(".ads-section_col").toggleClass('list');

    if (window.matchMedia("(max-width: 767px)").matches) {
      $(".modal-b").toggleClass('active');

      if ($(".modal-b").hasClass('active')) {// bodyFreezeScroll();
      } else {// bodyUnfreezeScroll();
        }
    }
  }); // page reload when width resize

  var before = $(this).width();
  $(window).resize(function () {
    var after = $(this).width();

    if (after != before) {
      location.reload();
    }
  });
});