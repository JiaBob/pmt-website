<template>
  <div class="min-h-sceen overflow-auto">
    <!-- Header -->
    <TheHeader :banner-is-visible="bannerIsVisible" />
    <!-- Banner -->
    <div class="min-h-screen relative flex justify-center items-start bg-white text-black transition-all duration-300" :class="bannerIsVisible ? 'pt-20' : 'pt-20'">
      <div class="absolute inset-0 w-full h-[85vh] overflow-hidden bg-black"></div>
      <div ref="bannerContainer" class="relative container mx-auto mt-8 md:mt-16 flex-1 flex flex-col justify-center items-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Pricing Plans</h1>
        <div ref="bannerInCheckTarget">
          <p class="px-4 mt-4 text-lg sm:text-xl text-gray-300">Our subscription plans unlock powerful experiences on top of the standard experience you've come to love. Choose from...</p>
        </div>
        <ul class="flex flex-wrap container max-w-screen-lg mx-auto mt-6">
          <li class="w-full md:w-1/3 p-4">
            <div class="h-full px-7 py-8 flex flex-col bg-white border border-gray-300 rounded-md sm:rounded-lg">
              <div class="flex items-center font-bold text-lg text-gray-500">
                <span>Standard</span>
              </div>
              <div class="text-3xl md:text-4xl font-bold mt-1">
                Free
              </div>
              <div class="-my-1">
                <button class="w-full mt-5 px-3 py-2 font-semibold text-sm text-black bg-white border border-gray-500 rounded uppercase">Go Free</button>
              </div>
              <div class="text-sm mt-5 font-medium text-gray-900">You will have</div>
              <ul class="text-sm mt-3 space-y-2">
                <li v-for="n in 9" :key="n" class="flex items-center">
                  <span class="bg-gray-100 rounded-full p-1 mr-2"><CheckIcon class="h-5 w-5 text-gray-600"/></span>
                  <span>Feature {{ n }}</span>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-full md:w-1/3 p-4">
            <div class="h-full px-7 py-8 flex flex-col bg-white border border-gray-300 rounded-md sm:rounded-lg">
              <div class="flex items-center font-bold text-lg text-gray-500">
                <span>Productivity</span>
              </div>
              <div class="text-3xl md:text-4xl font-bold mt-1">
                $50 <span class="text-sm font-normal text-gray-500">/ year</span>
              </div>
              <div class="-my-1">
                <button class="w-full mt-5 px-3 py-2 font-semibold text-sm text-black bg-white border border-gray-500 rounded uppercase">Go Productivity</button>
              </div>
              <div class="text-sm mt-5 font-medium text-gray-900">Everything in Standard plus</div>
              <ul class="text-sm mt-3 space-y-2">
                <li v-for="n in 12" :key="n" class="flex items-center">
                  <span class="bg-gray-100 rounded-full p-1 mr-2"><CheckIcon class="h-5 w-5 text-gray-600"/></span>
                  <span>Feature {{ n }}</span>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-full md:w-1/3 p-4">
            <div class="h-full px-7 py-8 flex flex-col bg-white border border-gray-300 rounded-md sm:rounded-lg">
              <div class="flex items-center font-bold text-lg text-gray-500">
                <span class="bg-gray-200 rounded-full p-1 mr-2"><StarIcon class="h-5 w-5 text-gray-700" /></span>
                <span>Professional</span>
              </div>
              <div class="text-3xl md:text-4xl font-bold mt-1">
                $80 <span class="text-sm font-normal text-gray-500">/ year</span>
              </div>
              <div class="-my-1">
                <button class="w-full mt-5 px-3 py-2 font-semibold text-sm text-white bg-black border border-gray-500 rounded uppercase">Go Professional</button>
              </div>
              <div class="text-sm mt-5 font-medium text-gray-900">Everything in Productivity plus</div>
              <ul class="text-sm mt-3 space-y-2">
                <li v-for="n in 10" :key="n" class="flex items-center">
                  <span class="bg-gray-100 rounded-full p-1 mr-2"><CheckIcon class="h-5 w-5 text-gray-600"/></span>
                  <span>Feature {{ n }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="my-5">
      <hr />
    </div>
    <div class="container max-w-screen-lg mx-auto">
      <div class="px-4 py-3 w-full overflow-auto">
        <table class="table-auto bg-gray-50">
          <thead class="bg-black text-white text-base sm:text-lg md:text-xl">
            <tr>
              <th class="w-full px-4 py-3 text-left text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                <span>Compare features</span>
              </th>
              <th class="px-4 py-3 text-center whitespace-nowrap">
                <span>Standard</span>
              </th>
              <th class="px-4 py-3 text-center whitespace-nowrap">
                <span>Productivity</span>
              </th>
              <th class="px-4 py-3 text-center whitespace-nowrap">
                <span>Professional</span>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm sm:text-base">
            <tr v-for="n in 12" :key="n" class="bg-gray-50 bg-opacity-100 hover:bg-gray-200 hover:bg-opacity-90 transition">
              <td class="w-full px-4 py-2 sm:py-3 md:py-4 text-left whitespace-nowrap">
                <span>Feature ...</span>
              </td>
              <td class="px-4 py-2 sm:py-3 md:py-4 text-center whitespace-nowrap">
                <template v-if="n <= 3">
                  <span class="inline-block p-1 bg-black text-white rounded-full"><CheckIcon class="h-4 w-4 sm:h-5 sm:w-5" /></span>
                </template>
                <template v-else>
                  <span class="inline-block p-1 bg-gray-400 text-white rounded-full"><XMarkIcon class="h-4 w-4 sm:h-5 sm:w-5" /></span>
                </template>
              </td>
              <td class="px-4 py-2 sm:py-3 md:py-4 text-center whitespace-nowrap">
                <template v-if="n <= 7">
                  <span class="inline-block p-1 bg-black text-white rounded-full"><CheckIcon class="h-4 w-4 sm:h-5 sm:w-5" /></span>
                </template>
                <template v-else>
                  <span class="inline-block p-1 bg-gray-400 text-white rounded-full"><XMarkIcon class="h-4 w-4 sm:h-5 sm:w-5" /></span>
                </template>
              </td>
              <td class="px-4 py-2 sm:py-3 md:py-4 text-center whitespace-nowrap">
                <template v-if="true">
                  <span class="inline-block p-1 bg-black text-white rounded-full"><CheckIcon class="h-4 w-4 sm:h-5 sm:w-5" /></span>
                </template>
                <template v-else>
                  <span class="inline-block p-1 bg-gray-400 text-white rounded-full"><XMarkIcon class="h-4 w-4 sm:h-5 sm:w-5" /></span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="my-5">
      <br />
    </div>

    <div class="sticky top-full">
      <div class="p-4 text-center bg-black text-white">
        <TheFooter class="mt-4 mb-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/20/solid';

const bannerContainer = ref(null);

const bannerInCheckTarget = ref(null);
const bannerIsVisible = ref(true);
const { stop } = useIntersectionObserver(bannerInCheckTarget, ([{ isIntersecting }], observerElement) => {
  bannerIsVisible.value = isIntersecting;
});
</script>
