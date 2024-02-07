let burgerMenu = document.querySelector(".burger_menu");
let mobileNavigation = document.querySelector(".mobile_navigation");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.querySelector(".burger__").classList.toggle("burg_act");
  mobileNavigation.classList.toggle("nav_act");
  document.body.classList.toggle("overflow_hidden");
});

var swiper = new Swiper(".s1", {
  navigation: {
    nextEl: ".arrow_block .swiper-button-next",
    prevEl: ".arrow_block .swiper-button-prev",
  },
  pagination: {
    el: ".arrow_block .swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".s3", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".s2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".s2 .swiper-button-next",
    prevEl: ".s2 .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".s6", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".thumbs_block .swiper-button-next",
    prevEl: ".thumbs_block .swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper2 = new Swiper(".s5", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
