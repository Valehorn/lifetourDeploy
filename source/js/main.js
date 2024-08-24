import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import { initSwiperTours } from './tours-swiper';
import { initSwiperTraining } from './training-swiper';
import { initSwiperReviews } from './reviews-swiper';
import { initAdvSwiper } from './adv-swiper';
import { initGallerySwiper } from './gallery-swiper';
import './form-validate';

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperTours();
  initSwiperTraining();
  initSwiperReviews();
  initAdvSwiper();
  initGallerySwiper();
};

bootStrap();
