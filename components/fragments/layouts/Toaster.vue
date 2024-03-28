<template>
  <div
    v-if="toaster"
    class="snackbar fixed left-1/2 top-10 z-[60] max-w-80 min-w-[17.5rem] w-full md:max-w-lg md:w-auto -translate-x-1/2"
  >
    <div :class="`${alertStyle} flex items-center justify-between space-x-3 rounded p-4`">
      <div class="flex items-center gap-3">
        <IcSuccess v-if="toaster.type === 'success'" />
        <IcWarning v-else-if="toaster.type === 'warning'" />
        <IcDanger v-else-if="toaster.type === 'danger'" />
        <IcInfo v-else />
        <div>
          <p class="m-0 whitespace-pre-line main-14px-400">{{ toaster.message }}</p>
        </div>
      </div>
      <button
        ref="buttonRef"
        class="h-5 w-5 cursor-pointer rounded border-none bg-transparent outline-none"
        @blur="onClose"
        @click="onClose"
      >
        <IcClose />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global'
import IcInfo from '~/components/elements/icons/IcInfo.vue'
import IcDanger from '~/components/elements/icons/IcDanger.vue'
import IcWarning from '~/components/elements/icons/IcWarning.vue'
import IcSuccess from '~/components/elements/icons/IcSuccess.vue'
import IcClose from '~/components/elements/icons/IcClose.vue'

const buttonRef = ref<HTMLButtonElement | null>(null)

const { getToaster, setToaster } = useGlobalStore()
const toaster = computed(() => getToaster())
const onClose = () => setToaster(undefined)
const alertStyle = computed(() => {
  switch (getToaster()?.type) {
    case 'danger':
      return 'text-[#C81E1E] bg-[#FFF4F2] border border-[#FFC5C5]'
    case 'success':
      return 'text-[#00C064] bg-[#EDF7ED] border border-[#B8DBCA]'
    case 'warning':
      return 'text-[#FB8C00] bg-[#FFF9F2] border border-[#EECEB0]'

    default:
      return 'text-[#1A56DB] bg-[#F0F3FF] border border-[#B1C5F6]'
  }
})

watch(toaster, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      buttonRef.value?.focus()
    }, 300)
  }
})
</script>
