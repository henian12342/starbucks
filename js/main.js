$(document).ready(function(){
  $("header .nav>li").hover(function() {
    $(this).children(".menuWrap").stop().slideToggle(200)
  })


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
});

