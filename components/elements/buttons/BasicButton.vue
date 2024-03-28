<template>
  <button
    :class="basicButtonVariant({ intent, isFullWidth, size, isPill })"
    v-bind="$attrs"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
    <p>{{ label }}</p>
  </button>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

const basicButtonVariant = cva(
  'disabled:bg-grey-40 disabled:border-grey-40 disabled:text-[#B3B7B9] flex items-center justify-center cursor-pointer ',
  {
    variants: {
      intent: {
        primary: 'bg-[#0089B7] border-none text-white',
        secondary: 'bg-white border-[#0089B7] text-[#0089B7] border-px border-solid',
        tertiary: 'border-none bg-[#E2F8FF] text-[#0089B7]',
        'netral-primary': 'bg-white border-[#62626282]  border-px border-solid text-[#62626282]',
        fourtiary: 'bg-white border-[#0089B78C] text-[#0089B7] border-px border-solid',
      },
      isFullWidth: {
        true: 'w-full',
      },
      size: {
        medium: 'rounded-1 px-2.5 py-2.5 h-10 main-16px-600',
        small: 'rounded-1 h-9 py-2 px-2 main-13px-600',
      },
      isPill: {
        true: '!rounded-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      isFullWidth: false,
      size: 'medium',
      isPill: false,
    },
  },
)
interface Props {
  intent?: 'primary' | 'secondary' | 'tertiary' | 'netral-primary' | 'fourtiary'
  isFullWidth?: boolean
  size?: 'medium' | 'small'
  label?: string
  disabled?: boolean
  isPill?: boolean
}
withDefaults(defineProps<Props>(), {
  intent: 'primary',
  isFullWidth: false,
  size: 'medium',
  label: '',
  disabled: false,
  isPill: false,
})
defineEmits(['onClick'])
</script>
