<template>
  <div class="relative px-4 lg:px-12 xl:px-[6.625rem] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
    <InformationCard
      v-for="item in informationCardItems"
      :key="item.title"
      :title="item.title"
      :subtitle="item.subtitle"
      :image="item.image"
      :href="item.href"
    />
  </div>
</template>

<script setup lang="ts">
import type { InformationCardItemType } from '~/utils/global-type'
import InformationCard from './InformationCard.vue'

const informationCardItems: InformationCardItemType[] = [
  {
    title: 'Baca Artikel ->',
    subtitle: 'Cari artikel dan berita terkini terkait kesehatan mental',
    image: '/image/story-card-1.png',
    href: 'https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/kesehatan-jiwa',
  },
  {
    title: 'Alat bantu dan sumber informasi ->',
    subtitle: 'Temukan sumber informasi terkait dengan kesehatan mental',
    image: '/image/story-card-2.png',
    href: 'https://www.therapistaid.com/therapy-worksheets',
  },
]
</script>
