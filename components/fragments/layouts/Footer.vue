<template>
  <div class="bg-white border-t-solid border-[#DADADA]">
    <div
      class="bg-[#006F95] py-4 px-4 flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 lg:px-10"
    >
      <a href="/" target="_blank" class="no-underline text-white main-16px-500 cursor-pointer"> Footer </a>

      <p class="text-white main-16px-500">© copyright {{ currentYear }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const currentYear = dayjs().year()
</script>
