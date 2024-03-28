<template>
  <NuxtLink class="no-underline flex items-center gap-6 main-16px-400 text-[#0089B7] w-fit" :href="href">
    <div class="rotate-180 -mt-1">
      <IcNextPage />
    </div>
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import IcNextPage from '~/components/elements/icons/IcNextPage.vue'

interface Props {
  label?: string
  href: string
}
withDefaults(defineProps<Props>(), {
  label: 'Back',
})
defineEmits(['onClick'])
</script>
