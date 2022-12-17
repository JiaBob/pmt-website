<template>
  <div class="min-h-sceen overflow-auto">
    <!-- Header -->
    <TheHeader is-home :banner-is-visible="bannerIsVisible" />
    <!-- Banner -->
    <div class="min-h-screen relative flex justify-center items-center bg-black text-white transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div ref="bannerContainer" class="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center bg-black text-black">
        <video ref="bannerVideoPlayer" width="1920" height="1080" class="absolute m-auto" preload="auto" muted loop autoplay playsinline webkit-playsinline x5-playsinline :controls="false">
          <!-- <source src="/PMT-intro-v.mp4" type="video/mp4" /> -->
        </video>
      </div>
      <div class="absolute block w-px h-px opacity-0 invisible" ref="bannerInCheckTarget"></div>
      <div class="absolute inset-0 overflow-hidden flex text-white bg-black transition duration-1000 delay-1000" :class="bannerVideoPlayerReady ? 'opacity-0' : ''">
        <div class="absolute inset-0 bg-black bg-bottom bg-cover sm:bg-contain bg-no-repeat filter blur-sm" :style="`background-image: url('/PMT-banner-Head.png')`"></div>
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-50"></div>
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-50"></div>
        <h1 class="relative m-auto flex flex-col items-center text-center font-semibold italic filter drop-shadow-sm transition transform xl:scale-110">
          <span class="inline-block my-4 sm:my-8 text-3xl sm:text-4xl px-4">{{ '"Make medical images as safe and simple as general images"' }}</span>
          <span class="inline-block mt-6 sm:mt-8 text-3xl sm:text-4xl px-4">{{ '“打破數據共享的障礙”' }}</span>
        </h1>
      </div>
    </div>
    <!-- Video -->
    <div class="relative transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div class="relative inset-0 w-full h-full flex flex-col justify-center items-center text-center">
        <p id="intro" class="font-bold uppercase text-2xl md:text-3xl mb-8 scroll-mt-32">{{ $t('Comprehensive De-identification Technology') }}</p>
        <div class="flex-shrink-0 flex-1 px-4 md:px-8 lg:px-14 container max-w-screen-lg mx-auto">
          <div class="relative w-full pb-[56.25%] bg-black">
            <div class="absolute inset-0">
              <iframe class="w-full h-full" title="vimeo-player" src="https://player.vimeo.com/video/779102538?h=849d46f23f" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Product Functions -->
    <div class="relative transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div class="relative inset-0 w-full h-full flex flex-col justify-center items-center text-center">
        <p id="product" class="font-bold uppercase text-2xl md:text-3xl scroll-mt-20">{{ $t('Product Functions') }}</p>
        <swiper
          id="swiperProductFunctions"
          class="bg-white w-full h-full"
          style="--swiper-theme-color: #000"
          :modules="[Navigation, Pagination, Autoplay, Mousewheel, A11y]"
          :autoplay="{ delay: 3600, disableOnInteraction: false }"
          loop
          allow-touch-move
          :mousewheel="{ forceToAxis: true }"
          :simulate-touch="false"
          :pagination="{ clickable: true }"
          navigation
        >
          <swiper-slide class="lg:px-24 pb-14 flex flex-col lg:flex-row justify-center items-center">
            <img class="w-9/12 lg:w-1/2" src="/product/003_Head.png" />
            <div class="w-full lg:w-1/2 px-14 mt-8 lg:mt-0 flex flex-col items-center">
              <span class="text-xl lg:text-3xl">{{ $t('Facial De-identification') }}</span>
              <ul class="list-disc list-inside italic text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('Revealed by 3D reconstruction of the face or body surface from CT and MRI') }}</li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="lg:px-24 pb-14 flex flex-col lg:flex-row-reverse justify-center items-center">
            <img class="w-9/12 lg:w-4/12 mt-8 lg:mt-12" src="/product/002_Txt.png" />
            <div class="w-full lg:w-7/12 px-14 mt-8 lg:mt-0 flex flex-col items-center">
              <span class="text-xl lg:text-3xl">{{ $t('Text De-identification') }}</span>
              <ul class="list-disc list-inside italic text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('Medical privacy information is directly inserted in medical images') }}</li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="lg:px-24 pb-14 flex flex-col lg:flex-row justify-center items-center">
            <img class="w-9/12 lg:w-1/2 mt-8 lg:mt-0" src="/product/001_Dicom.png" />
            <div class="w-full lg:w-1/2 px-14 mt-8 lg:mt-0 flex flex-col items-center">
              <span class="text-xl lg:text-3xl">{{ $t('DICOM Header De-identification') }}</span>
              <ul class="list-disc list-inside italic text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('Most medical images are stored in standard DICOM format') }}</li>
                <li>{{ $t('Patient identities are always saved in DICOM header') }}</li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Product Features -->
    <div class="relative transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div class="relative inset-0 w-full h-full flex flex-col justify-center items-center text-center">
        <p class="font-bold uppercase text-2xl md:text-3xl -mt-4">{{ $t('Product Features') }}</p>
        <div class="container mx-auto bg-white w-full h-full overflow-x-auto">
          <div class="h-full p-6 flex flex-row flex-wrap">
            <div class="w-1/2 sm:w-3/12 flex-shrink-0 p-3 md:p-6 flex">
              <div class="py-1 px-2 sm:px-3 flex-1 flex flex-col justify-center items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition duration-300">
                <img src="/product/Automation.png" class="w-9/12 h-auto" width="365" height="365" alt="Automation" />
                <span class="text-xl md:text-2xl text-center">{{ $t('Automation') }}</span>
                <p class="sm:px-4 text-sm md:text-base text-center text-gray-700 italic mt-1 hidden xl:block">
                  {{ $t('Our product will provide a standardized process to help AI developers efficiently manage raw medical data to build high quality de-identified datasets.') }}
                </p>
              </div>
            </div>
            <div class="w-1/2 sm:w-3/12 flex-shrink-0 p-3 md:p-6 flex">
              <div class="py-1 px-2 sm:px-3 flex-1 flex flex-col justify-center items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition duration-300">
                <img src="/product/Telemedical.webp" class="w-8/12 h-auto mb-4" width="365" height="365" alt="Telemedical" />
                <span class="text-xl md:text-2xl text-center">{{ $t('Telemedicine') }}</span>
                <p class="sm:px-4 text-sm md:text-base text-center text-gray-700 italic mt-1 hidden xl:block">
                  {{ $t('We will provide our de-identification solution to customers for clinical and research use, including secure data storage and secure data sharing for telemedicine.') }}
                </p>
              </div>
            </div>
            <div class="w-1/2 sm:w-3/12 flex-shrink-0 p-3 md:p-6 flex">
              <div class="py-1 px-2 sm:px-3 flex-1 flex flex-col justify-center items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition duration-300">
                <img src="/product/Security.png" class="w-7/12 h-auto mb-3" width="365" height="365" alt="Security" />
                <span class="text-xl md:text-2xl text-center">{{ $t('Privacy Protection') }}</span>
                <p class="sm:px-4 text-sm md:text-base text-center text-gray-700 italic mt-1 hidden xl:block">
                  {{ $t('Through our de-identification technology, including medical image DICOM header de-identification, text de-identification and facial de-identification, patient privacy information can be comprehensively protected.') }}
                </p>
              </div>
            </div>
            <div class="w-1/2 sm:w-3/12 flex-shrink-0 p-3 md:p-6 flex">
              <div class="py-1 px-2 sm:px-3 flex-1 flex flex-col justify-center items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition duration-300">
                <img src="/product/Preservation.png" class="w-8/12 h-auto mb-3" width="365" height="365" alt="Preservation" />
                <p class="text-xl md:text-2xl text-center">{{ $t('Anatomical Preservation') }}</p>
                <p class="sm:px-4 text-sm md:text-base text-center text-gray-700 italic mt-1 hidden xl:block">
                  {{ $t('De-identification techniques are often accompanied by the destruction of internal anatomical information, while our de-identification keeps anatomical information intact.') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Our Team -->
    <div class="relative transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div class="relative inset-0 w-full h-full flex flex-col justify-center items-center text-center">
        <p id="about-us" class="font-bold uppercase text-2xl md:text-3xl -mt-8 mb-12 scroll-mt-20">{{ $t('Our Team') }}</p>
        <div class="container mx-auto bg-white w-full h-full px-4 md:px-14 flex flex-col md:flex-row justify-center items-center">
          <div class="w-full md:w-6/12">
            <img src="/team/Team.webp" width="600" height="300" alt="Team" />
          </div>
          <div class="w-full md:w-6/12 mt-6 md:mt-0 md:ml-14 text-gray-700 md:text-xl space-y-3 text-center sm:text-left">
            <p>{{ $t('PMT is an early-stage startup company from Hong Kong that focuses on medical image privacy protection.') }}</p>
            <p>{{ $t('The team includes both clinical and technical experts who have worked in the field of medical imaging for decades.') }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Our Core Members -->
    <div class="relative transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div class="relative inset-0 w-full h-full flex flex-col justify-center items-center">
        <p class="font-bold uppercase text-2xl md:text-3xl -mt-4 mb-2">{{ $t('Our Core Members') }}</p>
        <p class="px-6 text-center text-xl md:text-2xl mb-12 text-gray-700">{{ $t('We are a versatile team in technical, academic, and the clinical fields.') }}</p>
        <swiper
          id="swiperTeamMembers"
          class="bg-white w-full h-full"
          style="--swiper-theme-color: #000"
          :modules="[Navigation, Pagination, Autoplay, Mousewheel, A11y]"
          :autoplay="{ delay: 7000, disableOnInteraction: false }"
          loop
          allow-touch-move
          :mousewheel="{ forceToAxis: true }"
          :simulate-touch="false"
          :pagination="{ clickable: true }"
          navigation
        >
          <swiper-slide class="md:px-24 pb-14 flex flex-col md:flex-row justify-center items-center">
            <div class="w-full md:w-4/12">
              <img class="w-1/2 h-auto mx-auto rounded-full overflow-hidden" width="302" height="396" src="/team/CHEN_Weitian.png" />
            </div>
            <div class="w-full px-12 sm:px-0 md:w-5/12 mt-8 md:mt-0 lg:-ml-12 flex flex-col items-center md:items-start">
              <span class="text-xl lg:text-3xl">{{ $t('Prof. Weitian CHEN') }}</span>
              <ul class="list-disc list-inside text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('Co-founder') }}</li>
                <li>{{ $t('18 years experience in medical imnaging technology') }}</li>
                <li>{{ $t('7 years experience in medical imaging industry') }}<span class="inline-block">{{ $t(' (GE Healthcare, USA)') }}</span></li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="md:px-24 pb-14 flex flex-col md:flex-row justify-center items-center">
            <div class="w-full md:w-4/12">
              <img class="w-1/2 h-auto mx-auto rounded-full overflow-hidden" width="304" height="396" src="/team/Dr_YU.png" />
            </div>
            <div class="w-full px-12 sm:px-0 md:w-5/12 mt-8 md:mt-0 lg:-ml-12 flex flex-col items-center md:items-start">
              <span class="text-xl lg:text-3xl">{{ $t('Prof. Simon YU') }}</span>
              <ul class="list-disc list-inside text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('MBBS, MD, FRCR') }}</li>
                <li>{{ $t('Co-founder') }}</li>
                <li>{{ $t('Medical advisor') }}</li>
                <li>{{ $t('Senior clinical radiologiest') }}</li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="md:px-24 pb-14 flex flex-col md:flex-row justify-center items-center">
            <div class="w-full md:w-4/12">
              <img class="w-1/2 h-auto mx-auto rounded-full overflow-hidden" width="212" height="274" src="/team/Dr_CHU-6.png" />
            </div>
            <div class="w-full px-12 sm:px-0 md:w-5/12 mt-8 md:mt-0 lg:-ml-12 flex flex-col items-center md:items-start">
              <span class="text-xl lg:text-3xl">{{ $t('Prof. Winne CHU') }}</span>
              <ul class="list-disc list-inside text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('MBChB, FRCR, MD') }}</li>
                <li>{{ $t('Co-founder') }}</li>
                <li>{{ $t('Medical advisor') }}</li>
                <li>{{ $t('Senior clinical radiologiest') }}</li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="md:px-24 pb-14 flex flex-col md:flex-row justify-center items-center">
            <div class="w-full md:w-4/12">
              <img class="w-1/2 h-auto mx-auto rounded-full overflow-hidden" width="199" height="267" src="/team/Catherine.png" />
            </div>
            <div class="w-full px-12 sm:px-0 md:w-5/12 mt-8 md:mt-0 lg:-ml-12 flex flex-col items-center md:items-start">
              <span class="text-xl lg:text-3xl">{{ $t('Ms Catherine GUO') }}</span>
              <ul class="list-disc list-inside text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('LL.B / LL.M') }}</li>
                <li>{{ $t('Legal advisor') }}</li>
                <li>{{ $t('Head of Shenzhen Office of AnJie Broad Law Firm') }}</li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="md:px-24 pb-14 flex flex-col md:flex-row justify-center items-center">
            <div class="w-full md:w-4/12">
              <img class="w-1/2 h-auto mx-auto rounded-full overflow-hidden" width="200" height="267" src="/team/Frankie.png" />
            </div>
            <div class="w-full px-12 sm:px-0 md:w-5/12 mt-8 md:mt-0 lg:-ml-12 flex flex-col items-center md:items-start">
              <span class="text-xl lg:text-3xl">{{ $t('Mr. Frankie YAN') }}</span>
              <ul class="list-disc list-inside text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('CPA') }}</li>
                <li>{{ $t('Bussiness advsior') }}</li>
                <li>{{ $t('Manger Director of an Investment Bank') }}</li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="md:px-24 pb-14 flex flex-col md:flex-row justify-center items-center">
            <div class="w-full md:w-4/12">
              <img class="w-1/2 h-auto mx-auto rounded-full overflow-hidden" width="200" height="267" src="/team/Jiabo.png" />
            </div>
            <div class="w-full px-12 sm:px-0 md:w-5/12 mt-8 md:mt-0 lg:-ml-12 flex flex-col items-center md:items-start">
              <span class="text-xl lg:text-3xl">{{ $t('Mr Jiabo XU') }}</span>
              <ul class="list-disc list-inside text-base lg:text-lg mt-2 text-gray-700">
                <li>{{ $t('Research Scientist') }}</li>
                <li>{{ $t('Worked in CSIRO, Data 61 Australia') }}</li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
        <hr class="w-1/2 my-8 border-transparent" />
      </div>
    </div>
    <div class="my-4">
      <br />
    </div>
    <!-- Contact -->
    <div class="sticky top-full">
      <!-- Map -->
      <div class="w-full">
        <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.839525399046!2d114.15548349999999!3d22.2840679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007cb1ddff95%3A0x10263cb611def1fe!2sCentral%20Market!5e0!3m2!1sen!2ssg!4v1670863228298!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="p-4 text-center bg-black text-white">
        <p id="contact" class="font-bold uppercase text-2xl md:text-3xl mt-8 mb-2">{{ $t('Contact Us') }}</p>
        <form class="flex flex-col w-72 md:w-full md:max-w-md mx-auto scroll-mt-20">
          <label class="mt-4">
            <input class="w-full h-10 px-3 py-2 border border-white bg-black placeholder-gray-500 outline-none focus:ring-1 focus:ring-white" name="name" :placeholder="$t('Name')" type="text" />
          </label>
          <label class="mt-4">
            <input class="w-full h-10 px-3 py-2 border border-white bg-black placeholder-gray-500 outline-none focus:ring-1 focus:ring-white" name="email" :placeholder="$t('Email*')" type="text" />
          </label>
          <label class="mt-4">
            <textarea class="w-full px-3 py-2 border border-white bg-black placeholder-gray-500 resize-none outline-none focus:ring-1 focus:ring-white" name="message" :placeholder="$t('Message')" rows="8"></textarea>
          </label>
          <button class="mt-4 w-full md:w-36 mx-auto px-3 py-2 h-10 bg-white text-black uppercase text-sm font-medium" type="submit">{{ $t('Submit') }}</button>
        </form>
        <TheFooter class="mt-8 mb-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Mousewheel, A11y } from 'swiper';

// import videojs from 'video.js';

const bannerVideoPlayer = ref(null);
const bannerVideoPlayerReady = ref(false);

const bannerContainer = ref(null);
// const { width: bannerContainerWidth, height: bannerContainerHeight } = useElementSize(bannerContainer);
// const bannerVideoFillHeight = computed(() => bannerContainerWidth.value / bannerContainerHeight.value < 1920 / 1080);

const bannerInCheckTarget = ref(null);
const bannerIsVisible = ref(true);
const { stop } = useIntersectionObserver(bannerInCheckTarget, ([{ isIntersecting }], observerElement) => {
  bannerIsVisible.value = isIntersecting;
});

const { $THREE: THREE } = useNuxtApp();
onMounted(() => {
  console.log(THREE);

  // window._player = videojs(bannerVideoPlayer.value, {
  //   fill: true,
  //   sources: [
  //     { src: '/PMT-intro-v.mp4', type: 'video/mp4' },
  //   ],
  // }, () => {
  //   bannerVideoPlayerReady.value = true;
  // });
});

onUnmounted(() => {
  if (window._player) {
    window._player.dispose();
  }
  stop();
});
</script>

<style scoped>
.scroll-snap-y-start {
  scroll-snap-type: y mandatory;
}
.scroll-snap-y-start > * {
  scroll-snap-align: start;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<style>
.swiper .swiper-pagination .swiper-pagination-bullet {
  @apply opacity-20 hover:opacity-30 transition;
}
.swiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply opacity-70 hover:opacity-90 transition;
}
.swiper .swiper-button-prev,
.swiper .swiper-button-next {
  @apply opacity-30 hover:opacity-50 transition;
}

.vjs-controls-disabled > * {
  display: none;
}
.vjs-controls-disabled > video {
  display: block;
}
</style>
