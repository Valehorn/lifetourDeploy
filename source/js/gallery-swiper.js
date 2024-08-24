import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const gallerySwiperContainer = document.querySelector('.gallery__swiper');
let gallerySwiper = null;

const initGallerySwiper = () => {
  gallerySwiper = new Swiper(gallerySwiperContainer, {
    slidesPerView: 2,
    spaceBetween: 5,
    speed: 800,
    loop: true,
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
};

const destroyGallerySwiper = () => {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
};

const checkBreakpoint = () => {
  if (window.innerWidth < 1440) {
    if (!gallerySwiper) {
      initGallerySwiper();
    }
  } else {
    destroyGallerySwiper();
  }
};

window.addEventListener('load', checkBreakpoint);
window.addEventListener('resize', checkBreakpoint);

export { initGallerySwiper };
