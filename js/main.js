$(document).ready(function(){
  AOS.init();

  // 메뉴 호버
  $("header .nav>li").hover(function() {
    $(this).children(".menuWrap").stop().slideToggle(200)
  })

  // a태그 기본기능 제거
  $("a").click(function(e){
    e.preventDefault();
  })

  // swiper 슬라이더
	var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination : false,
    breakpoints: {
      370:{
        slidesPerView: 2,
        spaceBetween: 10
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200:{
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  // footer 탭메뉴
  $("footer .topAreaMobile>li>ul>li").click(function(e) {
    $(this).children("ul").stop().slideToggle(200)
    e.preventDefault();
  })

  // top 버튼
  $("#scrollTop").on("click",function(){
    $('html, body').animate({
    scrollTop : 0
    },400)
    return false;
    });


    // 스크롤한 값에 따라 top버튼 활성화&비활성화
    $(window).scroll(function(){
      var sch = $(document).scrollTop();        
        if(sch > 200) {
          $("#scrollTop").css("opacity","1");
        } else {
          $("#scrollTop").css("opacity","0");
        }
    });


});

