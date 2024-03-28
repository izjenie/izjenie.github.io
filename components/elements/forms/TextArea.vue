<template>
  <div class="relative text-left">
    <label :for="name">
      <p class="mb-2.5 mt-0 text-black main-14px-400">{{ displayLabel }}</p>
    </label>
    <div class="relative min-h-9 flex justify-center">
      <textarea
        :id="name"
        :class="
          textFieldVariant({
            isError: Boolean(errorMessage),
            isPassword: Boolean(type === 'password'),
            isLoading,
          })
        "
        :name="name"
        v-bind="$attrs"
        :value="modelValue"
        :type="type"
        :rows="3"
        @input="handleChange"
      />
    </div>

    <p
      v-if="displayhelperText"
      :class="`main-12px-400 ${errorMessage ? 'text-danger-60' : 'text-black'} absolute mb-0 mt-0`"
    >
      {{ displayhelperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

const textFieldVariant = cva(
  'text-black main-14px-400 focus:border-[#0089B7] inline w-full w-full flex border-px rounded-1.5 border-solid bg-white px-3 py-2 no-underline outline-0',
  {
    variants: {
      isError: {
        true: 'border-danger-60',
        false: 'border-[#DBDADE]',
      },
      isPassword: {
        true: 'pr-12',
      },
      isLoading: {
        true: 'animate-pulse',
      },
    },
    defaultVariants: {
      isError: false,
      isLoading: false,
    },
  },
)

interface Props {
  modelValue?: string | number
  errorMessage?: string
  isLoading?: boolean
  helperText?: string
  type?: 'text' | 'number' | 'password' | 'file'
  name?: string
  label?: string
  isOptional?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  errorMessage: undefined,
  modelValue: undefined,
  helperText: undefined,
  isLoading: false,
  type: 'text',
  name: undefined,
  label: undefined,
  isOptional: false,
})

const displayhelperText = computed(() => (props.errorMessage ? props.errorMessage : props.helperText))

const displayLabel = computed(() => (props.isOptional ? `${[props.label]} (Opsional)` : props.label))

const emit = defineEmits(['update:modelValue'])
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
