const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable	: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


new WOW().init();

jQuery('.drawer_icon').on('click', function(e){
  e.preventDefault();
  jQuery(this).toggleClass('is-active');
  jQuery('.drawer_menu').toggleClass('is-active');
  jQuery('.drawer_background').toggleClass('is-active');
})

jQuery(window).on('scroll', event =>{
  const position = jQuery(event.currentTarget).scrollTop();
  const visibleFlg = 100 < position;
  console.log(visibleFlg)
  jQuery(".totop").toggleClass("is-show", visibleFlg);
})

jQuery(".js-header_menu__link").on('click', event =>{
  event.preventDefault();
  const target = jQuery(event.currentTarget);
  const targetLink = target.attr("href");
  if(targetLink === "") targetLink = "body";
  const headerHight = jQuery('.header').innerHeight();
  const targetPosition = jQuery(target).offset().top - headerHight;
  jQuery('html, body').animate({
    scrollTop: targetPosition
  }, 500);

  jQuery(".js-header_menu__link").removeClass("is-active");
  target.addClass("is-active");
})