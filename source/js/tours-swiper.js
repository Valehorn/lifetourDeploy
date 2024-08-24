import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const toursSwiperContainer = document.querySelector('.tours__swiper');

const initSwiperTours = () => {
  const swiperTours = new Swiper(toursSwiperContainer, {
    navigation: {
      nextEl: '.tours__swiper-button-next',
      prevEl: '.tours__swiper-button-prev',
    },
    speed: 900,
    loop: false,
    slidesPerView: 1,
    allowTouchMove: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false
      }
    },
    on: {
      slideChange() {
        updateNavigationButtons(swiperTours);
      },
      slideNextTransitionStart() {
        updateNavigationButtons(swiperTours);
      }
    }
  });
  updateNavigationButtons(swiperTours);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.tours__swiper-button-prev');
    const nextButton = document.querySelector('.tours__swiper-button-next');

    if (swiper.isBeginning) {
      prevButton.classList.add('swiper-button--disabled');
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove('swiper-button--disabled');
      prevButton.disabled = false;
    }

    if (swiper.isEnd) {
      nextButton.classList.add('swiper-button--disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('swiper-button--disabled');
      nextButton.disabled = false;
    }
  }
};

export { initSwiperTours };
