$(document).ready(function(){
  $(".gnb_wrap").hide();
  $(".depth2").hide();

  $(".gnb > li").mouseenter(function(){
    $(".gnb > li").addClass("open");
  });
  $(".gnb > li").mouseleave(function(){
    $(".gnb > li").removeClass("open");
  });
  /*
  $(".gnb > li").mouseenter(function(){
    $(".gnb > li").stop().animate({width : "200px"}, 1000, "swing");
    $(".gnb_wrap").show();
    $(".depth2").show();
  });
  $(".gnb > li").mouseleave(function(){
    $(".gnb > li").stop().animate({width : "130px"}, 1000, "swing");
    $(".gnb_wrap").hide();
    $(".depth2").hide();
  });
  */
});