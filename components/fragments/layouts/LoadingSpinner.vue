<template>
  <div
    v-if="isLoading"
    class="fixed left-0 top-0 z-40 h-screen w-screen flex flex-col items-center justify-center bg-grey-40/40"
  >
    <Icon name="svg-spinners:180-ring-with-bg" alt="loading" class="h-20 w-20 text-[#006F95]" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global'

const { getIsloading } = useGlobalStore()
const isLoading = computed(() => getIsloading())
</script>
