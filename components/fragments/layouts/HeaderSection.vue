<template>
  <div class="flex flex-col-reverse md:flex-row relative">
    <div
      class="w-full md:w-1/3 h-60 bg-[#2AA2CA] bg-opacity-60 md:bg-opacity-100 absolute top-0 left-0 md:relative p-4 box-border flex flex-col items-center justify-center overflow-hidden"
    >
      <img src="/image/news/ornament-top.png" class="h-full absolute top-0 left-0 hidden md:block" alt="ornament" />
      <h1 class="main-36px-700 text-center text-white relative z-10 whitespace-pre-line uppercase">{{ title }}</h1>
    </div>
    <NuxtImg :src="imageUrl" class="w-full md:w-2/3 h-60 object-cover" :alt="title" format="webp" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  imageUrl: string
}
defineProps<Props>()
</script>
