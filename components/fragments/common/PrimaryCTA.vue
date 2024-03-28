<template>
  <button
    :class="[
      'py-2.5 rounded-full bg-[#2F9EBD] text-white px-3 inter-16-400 md:inter-20-400 !leading-[1.5] flex items-center justify-center gap-2.5',
      isWidthParent ? 'w-full' : '',
    ]"
    @click="$emit('onClick')"
  >
    <slot name="left-icon" />
    {{ label }}
    <slot name="right-icon" />
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
  isWidthParent?: boolean
}
defineProps<Props>()
defineEmits(['onClick'])
</script>
