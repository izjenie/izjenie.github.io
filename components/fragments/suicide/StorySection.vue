<template>
  <div class="relative py-14 xl:py-16 px-4 lg:px-12 xl:px-[6.625rem] overflow-hidden">
    <NuxtImg
      src="/image/story-section-bg.svg"
      class="w-full absolute top-0 left-0 object-cover leading-none"
      alt="story bg"
    />

    <div class="relative z-10 flex flex-col items-center text-center">
      <h3 class="merri-24-700 lg:merri-36-700 text-black">Cerita tentang harapan</h3>
      <p class="inter-18-400 lg:inter-24-400 mt-4">
        Berbicara tentang perasaan Anda akan selalu membantu.
        <span class="block">Lihat cerita orang lain membuka diri tentang perjuangan mereka.</span>
      </p>
      <div class="w-[12.5rem] mt-6 mb-9">
        <!-- <PrimaryCTA label="Lihat Semua" :is-width-parent="true" /> -->
      </div>
      <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 w-full">
        <VideoCard
          v-for="item in informationCardItems"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
          :image="item.image"
          :href="item.href"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InformationCardItemType } from '~/utils/global-type'
// import PrimaryCTA from '../common/PrimaryCTA.vue'
import VideoCard from './VideoCard.vue'

const informationCardItems: InformationCardItemType[] = [
  {
    title: 'Cerita Sidney Mohede',
    subtitle: 'Dengarkan bagaimana Sidney Mohede menghadapi depresi di kehidupannya',
    image: '/image/sidney-thumbnail.png',
    href: 'https://www.youtube.com/watch?v=YDfveDILG_A',
  },
  {
    title: 'Cerita Mora',
    subtitle: 'Dengarkan bagaimana Mora menghadapi keinginannya untuk mengakhiri hidup',
    image: '/image/mora-thumbnail.png',
    href: 'https://www.youtube.com/watch?v=WLQrsHrZyFY',
  },
  {
    title: 'Cerita Mas Adjie',
    subtitle: 'Dengarkan bagaimana mas Adjie menghadapi masa berat dihidupnya',
    image: '/image/adjie-thumbnail.png',
    href: 'https://www.youtube.com/watch?v=eNt5qjuCJP4',
  },
]
</script>
