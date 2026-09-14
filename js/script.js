$(function(){
  $('nav').mouseenter(function(){
    $('.header').addClass('down')
  })
  $('nav').mouseleave(function(){
    $('.header').removeClass('down')
  })

  //swiper-popup
  new Swiper ('.sw-popup',{
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    pagination: {
      el: '.sw-paging',
      clickable: true,
    },
    navigation: {
      prevEl: '.popup-btn-prev',
      nextEl: '.popup-btn-next',
    }
  })

  //swiper-visual
  new Swiper ('.sw-visual',{
    loop: true,
    speed: 2000,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  //swiper-menu
  new Swiper ('.sw-menu',{
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 4,
    navigation: {
      prevEl: '.btn-prev',
      nextEl: '.btn-next',
    },
    breakpoints: {
      1281: { //1281px 이상
        slidesPerView: 4,
      },
      681: { //681px 이상
        slidesPerView: 3,
      },
      361: { //361px 이상
        slidesPerView: 2,
      },
      0: { //0 이상
        slidesPerView: 1,
      }
    },
  })

  //swiper-news
  new Swiper ('.sw-news', {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 3,
    navigation: {
      prevEl: '.btn-prev',
      nextEl: '.btn-next',
    },
    breakpoints: {
      681: { //1281px 이상
        slidesPerView: 3,
      },
      481: { //481px 이상
        slidesPerView: 2,
      },
      0: { //361px 이상
        slidesPerView: 1,
      },
    },
  })

})

