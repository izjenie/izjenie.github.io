<template>
  <div :class="['w-full  flex flex-col items-center justify-center text-center', isSmall ? 'h-40' : 'h-[25rem]']">
    <img
      src="/icon/ic-folder-open.svg"
      :class="[isSmall ? 'w-20 h-20 md:w-28 md:h-28' : 'w-32 h-32 md:w-40 md:h-40']"
      alt="no data"
    />
    <h3 class="mt-4 md:mt-8 main-18px-500 md:main-22px-500 text-black flex-shrink-0">Tidak ada data</h3>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isSmall?: boolean
}
defineProps<Props>()
</script>
