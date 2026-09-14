$(function(){
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

  // visual section 스크롤 버튼(brand section으로 이동)
  $('.go-brand-btn').click(function(e){
    e.preventDefault()
    $('html, body').animate({
      scrollTop: $('.visual').height()
    },500)
  })

  // quick-menu go top 버튼
  $('.topBtn').click(function(e){
    e.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    },500)
  })

  // swiper-menu (tap-menu 구현)
  const menuTabBtns = $('.menu-tab-btns li')
  const menuTabContents = $('.menu-tab-contents > div') 
  
  // swiper 인스턴스를 저장하는 배열 - 각각의 슬라이드 초기화 코드 저장
  let swiperInstance = []
  
  // 초기상태: 첫번째 탭표시
  menuTabContents.stop().hide().eq(0).show();
  
  // 탭버튼 클릭 이벤트
  menuTabBtns.click(function(e){
    e.preventDefault()
    let targetIdx = $(this).index();
    menuTabBtns.find('a').removeClass('focus')
    $(this).find('a').addClass('focus')

    // 모든 컨텐츠 숨기기
    menuTabContents.stop().hide()
    menuTabContents.eq(targetIdx).stop().show()

    // 클릭된 탭컨텐츠(swiper-slider)에 클래스명 생성해서 할당
    const currentTabContent = menuTabContents.eq(targetIdx)
    const currentSwiper = currentTabContent.find('.sw-menu')
    const uniqueSwiperClass = `swiper-${targetIdx}`

    // 클릭된 탭컨텐츠에 해당하는 swiper에 클래스를 할당한다
    currentSwiper.addClass(uniqueSwiperClass)

    // 네비게이션 클래스명 할당
    currentTabContent.find('.btn-prev').addClass(`btn-prev-${targetIdx}`)
    currentTabContent.find('.btn-next').addClass(`btn-next-${targetIdx}`)

    // 기존 Swiper 제거 (중복방지)
    if(swiperInstance[targetIdx]){
      swiperInstance[targetIdx].destroy();
    }
    // 선택된 탭컨텐츠-swiper 초기화(instance생성)
    swiperInstance[targetIdx] = new Swiper(`.${uniqueSwiperClass}`,{
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      speed: 1000,
      slidesPerView: 4,
      navigation: {
        prevEl: `.btn-prev-${targetIdx}`,
        nextEl: `.btn-next-${targetIdx}`,
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
      }
    })
  })
  menuTabBtns.eq(0).trigger('click')

  // // menu-tab-btn 활성화
  // const menuTabBtn = $('.menu-tab-btns li a')
  // const menuTabContent = $('.menu-tab-contents > div')
  
  // menuTabBtn.click(function(e){
  //   e.preventDefault();
  //   menuTabBtn.removeClass('focus')
  //   $(this).addClass('focus')
  //   menuTabContent.stop().hide()
  //   let target = $(this).attr('href')
  //   $(target).show()
  // })
  // menuTabBtn.eq(0).trigger('click')


  // swiper-news (tap-menu 구현)
  const newsTabBtns = $('.news-tab-btns li')
  const newsTabContents = $('.news-tab-contents > div')

  // swiper instance를 저장하는 배열
  let newsSwiperInstance = []
  // 초기상태: 첫번째 탭표시
  newsTabContents.stop().hide().eq(0).show();

  // 탭버튼 클릭 이벤트
  newsTabBtns.click(function(e){
    e.preventDefault()
    let targetIdx = $(this).index();
    newsTabBtns.find('a').removeClass('focus')
    $(this).find('a').addClass('focus')

    // 모든 컨텐츠 숨기기
    newsTabContents.stop().hide()
    newsTabContents.eq(targetIdx).stop().show();

    // 클릭된 탭컨텐츠(swiper-slider)에 클래스명 생성해서 할당
    const newsCurrentTabContent = newsTabContents.eq(targetIdx)
    const newsCurrentSwiper = newsCurrentTabContent.find('.sw-news')
    const newsUniqueSwiperClass = `swiper-news-${targetIdx}`

    // 네비게이션 클래스명 생성해서 할당
    newsCurrentSwiper.addClass(newsUniqueSwiperClass)

    newsCurrentTabContent.find('.btn-prev').addClass(`btn-prev-news-${targetIdx}`)
    newsCurrentTabContent.find('.btn-next').addClass(`btn-next-news-${targetIdx}`)

    // 기존 Swiper 제거 (중복방지)
    if(newsSwiperInstance[targetIdx]){
      newsSwiperInstance[targetIdx].destroy();
    }

    // 선택된 탭컨텐츠-swiper 초기화(instance생성)    
    newsSwiperInstance[targetIdx] = new Swiper(`.${newsUniqueSwiperClass}`,{
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      speed: 1000,
      slidesPerView: 3,
      navigation: {
        prevEl: `.btn-prev-news-${targetIdx}`,
        nextEl: `.btn-next-news-${targetIdx}`,
      },
      breakpoints: {
        681: {
          slidesPerView: 3,
        },
        481: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }
    })
  })
  newsTabBtns.eq(0).trigger('click')

  // // news-tab-btn 활성화
  // const newsTabBtn = $('.news-tab-btns li a')
  // const newsTabContent = $('.news-tab-contents > div')

  // newsTabBtn.click(function(e){
  //   e.preventDefault();
  //   newsTabBtn.removeClass('focus')
  //   $(this).addClass('focus')
  //   newsTabContent.stop().hide()
  //   let target = $(this).attr('href')
  //   $(target).show()
  // })
  // newsTabBtn.eq(0).trigger('click')

  // js로
  // mobie-menu
  // 햄버거 버튼과 모바일 메뉴 가져오기
  // let mbMenu = document.querySelector('.mb-menu')
  // let mbBtn = document.querySelector('.menuBtn')
  // let closeBtn = document.querySelector('.mb-btn-close')


  // mbBtn.onclick = ()=>{
  //   mbMenu.classList.add('active')
  // }
  // closeBtn.onclick = ()=>{
  //   mbMenu.classList.remove('active')
  // }

  // mobile-menu
  $('.menuBtn').click((e)=>{
    e.preventDefault();
    $('.mb-menu').toggleClass('active')
  })

  // // 버튼이 하나밖에 없는 경우
  // $('.menuBtn').click((e)=>{
  //   e.preventDefault();
  //   let isOpen = $('.mb-menu').hasClass('active') // true냐 false냐
  //   if(isOpen){ // active가 있는 상태
  //     $('.mb-menu').removeClass('active')
  //   }else{ // active가 없는 상태
  //     $('.mb-menu').addClass('active')
  //   }
  // })

  $('.mb-btn-close').click(function(e){
    e.preventDefault();
    $('.mb-menu').removeClass('active')
  })

  // mobile-menu-accordian
  $('.mb-menu-list').click(function(e){
    let hasSubmenu = $(this).hasClass('mb-li-arrow')
    let isOpen = $(this).hasClass('active')
    $('.mb-menu-list').removeClass('active').siblings('ul').stop().slideUp()
    if(hasSubmenu) {
      e.preventDefault()
      if(isOpen) {
        $(this).removeClass('active').siblings('ul').stop().slideUp()
      }else {
        $(this).addClass('active').siblings('ul').stop().slideDown()
      }
    }else {}
  })

  // Sticky Header
  let didScroll = false;
  let lastScrollTop = 0;

  function hasScrolled() {
    let st = $(window).scrollTop()
    // console.log(`현재 스크롤의 위치: ${st}`)
    if(st > lastScrollTop) {
      // Scroll Down
      if(st < 100) return lastScrollTop = st
      $('.header').removeClass('fixed').addClass('nofixed')
    }else {
      // Scroll Up
      $('.header').removeClass('nofixed').addClass('fixed')
    }
    lastScrollTop = st
  }
  $(window).scroll(function(){
    didScroll = true
  })

  setInterval(function(){
    if(didScroll) {
      hasScrolled()
    }
    didScroll = false;
  },250)

  // js로
  // popup menu 닫기
  // let popupClose = document.querySelectorAll('.popup-close li')
  // let $popupZone = document.querySelector('.popup-zone')

  // popupClose.forEach((list, index)=>{
  //   list.addEventListener('click',()=>{
  //     $popupZone.style.display = 'none'
  //   })
  // })

  // popup menu 닫기
  let popupClose = $('.popup-close li')
  let $popupZone = $('.popup-zone')

  $('.popup-close li').click(function(){
    $('.popup-zone').stop().hide()
  })

  // forEach 안써도 알아서 구분해준다
  // $('.popup-close li').each(function(index,item){
  //   $(item).click(function(){
  //     $('.popup-zone').stop().hide()
  //   })
  // })


  // js로
  // submenu 열고 닫기
  // let $nav = document.querySelector('nav')
  // let $header = document.querySelector('.header')
  // $nav.onmouseenter = ()=>{
  //   $header.classList.add('down')
  // }
  // $nav.onmouseleave = ()=>{
  //   $header.classList.remove('down')
  // }


  // submenu 열고 닫기
  let $nav = $('nav')
  let $header = $('header')
  $nav.mouseenter(()=>{
    $header.addClass('down')
  })
  $nav.mouseleave(()=>{
    $header.removeClass('down')
  })

  // aos anitialize
  AOS.init();

})