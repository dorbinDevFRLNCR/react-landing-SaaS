
const swiper = new Swiper('.testimonial-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: true,
  keyboard: {
    enabled: true,
  }
});