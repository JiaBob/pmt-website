<template>
  <header class="flex items-center w-full px-4 py-2 sm:px-4 sm:py-4 fixed top-0 z-10 bg-white bg-opacity-90 text-black transition-all duration-300" :class="bannerIsVisible ? 'h-20 sm:h-24' : 'h-16 sm:h-20 text-sm'">
    <a :href="isHome ? '#' : '/'" class="transform sm:scale-110 flex justify-center items-center transition-all" :class="bannerIsVisible ? 'h-16 w-auto sm:h-16 sm:w-16' : 'h-12 w-auto sm:h-12 sm:w-12'">
      <img class="block sm:hidden w-72 h-auto -ml-1" width="1929" height="320" :src="$t('logo')" alt="Logo" />
      <img class="hidden sm:block w-full h-full -mr-1" width="2100" height="600" :src="$t('logo')" alt="Logo" />
    </a>
    <div class="ml-auto hidden md:flex flex-col items-end">
      <button class="relative flex items-center py-1 mb-3 bg-white text-black hover:text-gray-600 transition-all" :class="bannerIsVisible ? 'px-3' : 'px-2 -mr-1 text-xs'">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16 w-4 h-4 mr-2" role="img" viewBox="0 0 496 512">
          <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
        </svg>
        {{ currentLocale ? currentLocale.name : 'Lang' }}
        <select class="absolute inset-0 opacity-0 cursor-pointer" @change="setLocale($event.target.value)">
          <option v-for="({ code, name }, i) in availableLocales" :key="code" :value="code" :selected="code === locale">{{ name }}</option>
        </select>
      </button>
      <nav class="mt-auto space-x-2 font-medium leading-none" :class="bannerIsVisible ? '' : '-mb-px'">
        <NuxtLink class="capitalize hover:underline hover:text-gray-700 transition" :to="isHome ? '#intro' : '/#intro'">{{ $t('nav.intro') }}</NuxtLink>
        <span class="font-light opacity-50">|</span>
        <NuxtLink class="capitalize hover:underline hover:text-gray-700 transition" :to="isHome ? '#product' : '/#product'">{{ $t('nav.product') }}</NuxtLink>
        <span class="font-light opacity-50">|</span>
        <a class="capitalize hover:underline hover:text-gray-700 transition" :href="'/try'">{{ $t('nav.try') }}</a>
        <span class="font-light opacity-50">|</span>
        <NuxtLink class="capitalize hover:underline hover:text-gray-700 transition" :to="isHome ? '#about-us' : '/#about-us'">{{ $t('nav.about') }}</NuxtLink>
        <span class="font-light opacity-50">|</span>
        <NuxtLink class="capitalize hover:underline hover:text-gray-700 transition" :to="isHome ? '#contact' : '/#contact'">{{ $t('nav.contact') }}</NuxtLink>
      </nav>
    </div>
    <div class="ml-auto my-auto flex flex-col md:hidden">
      <button @click="menuOpened = true">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 w-8 h-8" role="img" viewBox="0 0 448 512">
          <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </button>
      <Transition enter-active-class="transition ease-out duration-200" leave-active-class="transition ease-in duration-100" enter-class="transform opacity-0" enter-to-class="transform opacity-100" leave-class="transform opacity-100" leave-to-class="transform opacity-0">
        <nav v-if="menuOpened" class="fixed inset-0 bg-black text-white flex flex-col overflow-y-auto">
          <div class="absolute w-full px-4 py-2 sm:px-4 sm:py-4 flex justify-end items-center" :class="bannerIsVisible ? 'h-20 sm:h-24' : 'h-16 sm:h-20 text-sm'">
            <button class="relative z-50" @click="menuOpened = false">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 w-8 h-8" role="img" viewBox="0 0 352 512">
                <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </button>
          </div>
          <ul class="relative flex-auto flex-grow p-4 flex flex-col justify-center items-center">
            <li class="p-4" @click="menuOpened = false"><NuxtLink class="text-xl font-semibold uppercase hover:underline" :to="isHome ? '#intro' : '/#intro'">{{ $t('nav.intro') }}</NuxtLink></li>
            <li class="p-4" @click="menuOpened = false"><NuxtLink class="text-xl font-semibold uppercase hover:underline" :to="isHome ? '#product' : '/#product'">{{ $t('nav.product') }}</NuxtLink></li>
            <li class="p-4" @click="menuOpened = false"><a class="text-xl font-semibold uppercase hover:underline" :href="'/try'">{{ $t('nav.try') }}</a></li>
            <li class="p-4" @click="menuOpened = false"><NuxtLink class="text-xl font-semibold uppercase hover:underline" :to="isHome ? '#about-us' : '/#about-us'">{{ $t('nav.about') }}</NuxtLink></li>
            <li class="p-4" @click="menuOpened = false"><NuxtLink class="text-xl font-semibold uppercase hover:underline" :to="isHome ? '#contact' : '/#contact'">{{ $t('nav.contact') }}</NuxtLink></li>
          </ul>
          <div class="relative flex-auto flex-grow-0 flex-shrink p-4 mt-auto mb-4 flex justify-center items-center">
            <template v-for="({ code, name }, i) in availableLocales" :key="code">
              <span v-if="i > 0" class="font-light opacity-50 mx-2">|</span>
              <a href="#" class="uppercase" :class="code === locale ? 'underline' : ''" @click.prevent="setLocale(code)">{{ name }}</a>
            </template>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  isHome: {
    type: Boolean,
    required: false,
  },
  bannerIsVisible: {
    type: Boolean,
    required: true,
  },
});

const menuOpened = ref(false);
watch(menuOpened, () => {
  if (menuOpened.value) {
    document.body.style.setProperty('overflow', 'hidden');
  } else {
    document.body.style.removeProperty('overflow');
  }
});

const isLargeScreen = useMediaQuery('(min-width: 768px)');
watch(isLargeScreen, () => {
  if (isLargeScreen.value) {
    menuOpened.value = false;
  }
});

const { t, locale, locales, getBrowserLocale, setLocale } = useI18n();
const browserLocale = getBrowserLocale();
const currentLocale = computed(() => availableLocales.value.find(({ code }) => code === locale.value));
const availableLocales = computed(() => {
  return [
    ...locales.value.filter(({ code }) => code === browserLocale),
    ...locales.value.filter(({ code }) => code !== browserLocale),
  ];
});
watch(locale, (newLocale, oldLocale) => {
  menuOpened.value = false;
  console.log('language switched', 'from', oldLocale, 'to', newLocale);
});
</script>
