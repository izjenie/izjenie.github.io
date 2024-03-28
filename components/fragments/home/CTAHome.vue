<template>
  <div class="relative w-full">
    <button
      class="px-4 py-4 rounded-xl lg:py-8 lg:px-14 bg-white w-full lg:rounded-[1.5rem] relative z-10 shadow-card-large"
      @click="$emit('onClick')"
    >
      <div class="flex items-center">
        <p class="inter-16-400 lg:inter-32-400 text-[#076C87]">{{ title }}</p>
      </div>
      <p class="inter-14-400 lg:inter-20-400 text-[#0000008F] italic lg:mt-3">{{ subtitle }}</p>
    </button>
    <div class="absolute -bottom-1.5 -right-1.5 w-full h-full bg-[#80D0E2] rounded-xl lg:rounded-[1.5rem]"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
}
defineProps<Props>()
defineEmits(['onClick'])
</script>
