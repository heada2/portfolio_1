$(document).ready(function(){
    var ontab = $(".infor-btn ul li.on").index();
    $(".infor-con").eq(ontab).addClass("on")

    $(".infor-btn ul li").click(function(){
        var idx = $(this).index();

        $(".infor-btn ul li").removeClass("on");
        $(this).addClass("on")

        $(".infor-con").removeClass("on");
        $(".infor-con").eq(idx).addClass("on");
    });
    var days = new Swiper(".days", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop : true
      });
      var rel = new Swiper(".rel", {
        slidesPerView: 5,
        centeredSlides: true,
        loop : true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
      $(".relics-con ul .relics-con-li").hide();

      $(".relics-btn-2 ul li").eq(0).addClass("active");
      $(".relics-con ul .relics-con-li").eq(0).show();

      $(".relics-btn-2 li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        var Num = $(this).index();
        $(".relics-con ul .relics-con-li").eq(Num).show().siblings().hide();
      });
});