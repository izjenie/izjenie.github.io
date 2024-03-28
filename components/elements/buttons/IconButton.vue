<template>
  <button :class="iconButtonVariant({ intent, fullWidth, size })" :disabled="disabled" @click="$emit('onClick')">
    <slot name="icon" />
  </button>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

const iconButtonVariant = cva(
  'disabled:bg-grey-40 disabled:border-grey-40 disabled:text-[#B3B7B9] outline-none disabled:cursor-not-allowed flex items-center justify-center cursor-pointer',
  {
    variants: {
      intent: {
        primary: 'bg-[#0089B7] border-none',
        secondary: 'bg-white border-[#0089B7] text-[#0089B7] border-px border-solid',
        content: 'border-none !bg-transparent disabled:opacity-60',
        danger: 'bg-white border-[#E87474] text-[#C85656] border-px border-solid',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        medium: 'rounded-1 px-2.5 py-2.5 h-10 main-16px-600',
        small: 'rounded-1 h-9 py-2 px-2 main-13px-600',
        content: 'h-auto p-0',
      },
    },
    defaultVariants: {
      intent: 'primary',
      fullWidth: false,
      size: 'medium',
    },
  },
)
interface Props {
  intent?: 'primary' | 'secondary' | 'content' | 'danger'
  fullWidth?: boolean
  size?: 'medium' | 'content' | 'small'
  disabled?: boolean
}
withDefaults(defineProps<Props>(), {
  intent: 'primary',
  fullWidth: false,
  size: 'medium',
  disabled: false,
})
defineEmits(['onClick'])
</script>
