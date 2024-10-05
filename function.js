const swiper = new Swiper(".mySwiper", {
    slidesPerView: 0,
    spaceBetween: 20,
    
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        1440:{
            slidesPerView: 0,
        }
    }
  });
