import { Swiper, Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      Swiper,
    },
  };
});
