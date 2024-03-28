<template>
  <div class="rounded-lg lg:rounded-2xl overflow-hidden max-w-[40rem] mx-auto shadow-story-card">
    <NuxtImg :src="image" class="w-full h-[12rem] lg:h-[16rem] object-cover leading-none" :alt="title" format="webp" />
    <div class="bg-white p-4 lg:p-6 relative z-10 -mt-6">
      <NuxtLink :to="href" target="_blank">
        <p class="inter-18-500 lg:inter-24-500 text-black">{{ title }}</p>
      </NuxtLink>
      <p class="inter-14-400 lg:inter-18-400 text-black mt-2 lg:mt-4">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InformationCardItemType } from '~/utils/global-type'

defineProps<InformationCardItemType>()
</script>
