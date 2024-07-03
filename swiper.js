var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  speed: 3000,  // Increase speed for a smooth transition
  autoplay: {
      delay: 0,  // Set delay to 0 to have a continuous transition
      disableOnInteraction: false,
    },
  });