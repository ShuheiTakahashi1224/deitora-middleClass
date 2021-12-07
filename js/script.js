const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const smoothScroll = (position) => {
  jQuery('html, body').animate({
    scrollTop: position
  }, 500)
}

new WOW().init();

jQuery('.drawer_icon').on('click', (event) => {
  event.preventDefault();
  jQuery(event.currentTarget).toggleClass('is-active');
  jQuery('.drawer_menu').toggleClass('is-active');
  jQuery('.drawer_background').toggleClass('is-active');
})

jQuery(window).on('scroll', event => {
  const position = jQuery(event.currentTarget).scrollTop();
  const visibleFlg = 100 < position;
  jQuery(".totop").toggleClass("is-show", visibleFlg);
})

jQuery(".js-header_menu__link").on('click', event => {
  event.preventDefault();
  const eventTarget = jQuery(event.currentTarget);
  const targetLink = eventTarget.attr("href");
  if (targetLink === "") targetLink = "body";
  const headerHight = jQuery('.header').innerHeight();
  const targetPosition = jQuery(targetLink).offset().top - headerHight;
  smoothScroll(targetPosition);
  jQuery(".js-header_menu__link").removeClass("is-active");
  eventTarget.addClass("is-active");
})
jQuery(".js-toTop").on('click', event => {
  event.preventDefault();
  smoothScroll(0);
})

jQuery(".js-accordion__header").on("click", (event) => {
  const $targetContent = jQuery(event.currentTarget).next();
  if($targetContent.is(":visible")){
    jQuery(event.currentTarget).removeClass("accordion__header--open");
    $targetContent.stop().slideUp();
  } else {
    jQuery(event.currentTarget).addClass("accordion__header--open");
    $targetContent.stop().slideDown();
  }
})

jQuery(".js-contact__privacyLink").on("click", (event) => {
  event.preventDefault();
  jQuery(".js-privacy_modal").show();
});

jQuery(".js-privacy_modal__closeButton").on("click", (event) => {
  event.preventDefault();
  jQuery(".js-privacy_modal").hide();
});