<template>
  <div class="p-4 bg-white rounded-xl lg:rounded-3xl text-left max-w-[24rem] mx-auto w-full shadow-story-card">
    <NuxtLink :to="href" target="_blank" class="relative block">
      <NuxtImg
        :src="image"
        class="w-full h-[8rem] lg:h-[11rem] object-cover leading-none rounded-xl lg:rounded-3xl"
        :alt="title"
        format="webp"
      />
      <NuxtImg
        src="/image/play-button.png"
        class="w-[5.313] h-[5.313rem] object-contain absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        :alt="title"
        format="webp"
      />
    </NuxtLink>
    <p class="inter-14-700 lg:inter-18-700 text-black mt-5 max-w-[18rem]">{{ title }}</p>
    <p class="inter-14-400 lg:inter-18-400 text-black mt-2 lg:mt-4">{{ subtitle }}</p>
    <NuxtLink :to="href" target="_blank" class="mt-6 block mb-6">
      <img src="/icon/suicide/ic-youtube.svg" class="h-5" alt="youtube" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { InformationCardItemType } from '~/utils/global-type'

defineProps<InformationCardItemType>()
</script>
