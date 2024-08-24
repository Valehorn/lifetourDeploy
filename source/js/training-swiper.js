import { Swiper } from 'swiper/bundle';
import 'swiper/scss';

const trainingSwiperContainer = document.querySelector('.training__swiper');

const initSwiperTraining = () => {
  const swiperTraining = new Swiper(trainingSwiperContainer, {
    navigation: {
      nextEl: '.training__swiper-button-next',
      prevEl: '.training__swiper-button-prev',
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
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false
      }
    },
    on: {
      slideChange() {
        updateNavigationButtons(swiperTraining);
      },
      slideNextTransitionStart() {
        updateNavigationButtons(swiperTraining);
      }
    }
  });

  if (window.innerWidth < 768) {
    swiperTraining.slideTo(2, 0, false);
  } else {
    swiperTraining.slideTo(0, 0, false);
  }

  updateNavigationButtons(swiperTraining);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.training__swiper-button-prev');
    const nextButton = document.querySelector('.training__swiper-button-next');

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

export { initSwiperTraining };
