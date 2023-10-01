$(document).ready(function () {
  let hamburger = $(".hamburger");
  let line_one = $(".line-one");
  let line_two = $(".line-two");
  let line_tree = $(".line-tree");
  let sub_menu = $(".sub-menu");
  let slider_menu = $(".slider-sub-menu");
  let ul_sub_menu = $(".ul-sub-menu");

  var isOpen = false;
  hamburger.click(function () {
    if (!isOpen) {
      isOpen = true;
      line_one.addClass("line-one-click").removeClass("line-one");
      line_two.addClass("line-two-click").removeClass("line-two");
      line_tree.addClass("line-tree-click").removeClass("line-tree");
      sub_menu.css({
        position: "fixed",
        right: "0",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "70%",
        transition: ".4s",
      });
      ul_sub_menu.css({
        position: "absolute",
        left: "0%",
        transition: ".2s",
      });
    } else {
      isOpen = false;
      line_one.addClass("line-one").removeClass("line-one-click");
      line_two.addClass("line-two").removeClass("line-two-click");
      line_tree.addClass("line-tree").removeClass("line-tree-click");
      sub_menu.css({
        position: "fixed",
        right: "-70%",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "-30%",
        transition: ".4s",
      });
      ul_sub_menu.css({
        position: "absolute",
        left: "-70%",
        transition: ".2s",
      });
    }
  });

  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 20) {
      $("nav").css({
        transition: ".4s",
        "box-shadow": "0px 0px 10px var(--black)",
      });
    }
  });
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop < 20) {
      $("nav").css({
        transition: ".4s",
        "box-shadow": "0px 0px 0px var(--black)",
      });
    }
  });
});
