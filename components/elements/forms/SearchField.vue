<template>
  <div class="relative w-full">
    <input
      class="h-10 border w-full border-solid border-[#ECECEC] rounded-full no-underline outline-0 pl-12 pr-5 box-border text-black main-16px-400 searchfield-container"
      :placeholder="placeholder"
      v-bind="$attrs"
      :value="modelValue"
      @input="handleChange"
    />
    <div class="absolute left-5 top-0 flex h-full flex-col items-center justify-center z-10">
      <img src="/icon/ic-magnify.svg" class="w-4 h-4" alt="search" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number
  placeholder?: string
}
defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
<style scoped>
.searchfield-container {
  box-shadow: 1px 3px 8px 0px #00000014;
}
</style>
