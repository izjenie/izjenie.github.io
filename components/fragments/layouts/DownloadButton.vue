<template>
  <button
    class="no-underline flex items-center gap-4 main-16px-600 md:main-18px-600 text-[#C85656] py-4 px-10 download-button rounded-full"
    @click="$emit('onClick')"
  >
    <IcDownload />

    {{ label }}
  </button>
</template>

<script setup lang="ts">
import IcDownload from '~/components/elements/icons/IcDownload.vue'

interface Props {
  label?: string
}
withDefaults(defineProps<Props>(), {
  label: 'Download',
})
defineEmits(['onClick'])
</script>

<style scoped>
.download-button {
  border: 1px solid #c85656a1;
}
</style>
