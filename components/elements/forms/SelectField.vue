<template>
  <div class="relative text-left">
    <Listbox
      :id="name"
      :model-value="modelValue"
      by="value"
      :disabled="disabled"
      :name="name"
      @update:model-value="(value) => emit('update:modelValue', value)"
    >
      <div class="relative">
        <label v-if="label">
          <p class="mb-2.5 mt-0 text-black main-14px-400">{{ displayLabel }}</p>
        </label>
        <ListboxButton
          :class="
            selectFieldVariant({
              isError: Boolean(errorMessage),
              isLoading,
              isPlaceholder: Boolean(!modelValue?.label),
            })
          "
        >
          <span class="block truncate pr-6">{{ modelValue?.label ?? placeholder }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <IcArrowDown />
          </span>
        </ListboxButton>
        <p
          v-if="displayhelperText"
          :class="`main-12px-400 ${errorMessage ? 'text-danger-60' : 'text-black'} absolute mb-0 mt-0`"
        >
          {{ displayhelperText }}
        </p>
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-20 mt-1 max-h-60 w-full list-none overflow-auto rounded-md bg-white p-0 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ListboxOption
              v-for="option in options"
              v-slot="{ active }"
              :key="option.value"
              :value="option"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-[#EEF5FF]' : 'bg-white',
                  'relative cursor-default select-none m-0 main-14px-400 h-8 text-black',
                ]"
              >
                <span class="m-0 block truncate px-2.5 py-3">{{ option.label }}</span>
                <span
                  v-if="modelValue?.value === option.value"
                  class="absolute inset-y-0 right-0 flex items-center pr-2.5 text-#0089B7"
                >
                  <Icon name="heroicons-outline:check" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { cva } from 'class-variance-authority'
import IcArrowDown from '../icons/IcArrowDown.vue'

const selectFieldVariant = cva(
  'relative  main-14px-400 h-9 focus:border-[#0089B7] inline w-full flex border-px rounded-1.5 border-solid bg-white px-3  py-2 no-underline outline-0 disabled:bg-grey-60 disabled:border-grey-40',
  {
    variants: {
      isError: {
        true: 'border-danger-60',
        false: 'border-[#DBDADE]',
      },
      isLoading: {
        true: 'animate-pulse',
      },
      isPlaceholder: {
        true: 'text-black/60',
        false: 'text-black',
      },
    },
    defaultVariants: {
      isError: false,
      isLoading: false,
      isPlaceholder: true,
    },
  },
)

interface LabelValuePair {
  label: string
  value: string
}
interface Props {
  options: LabelValuePair[]
  modelValue?: LabelValuePair
  errorMessage?: string
  isLoading?: boolean
  name?: string
  label?: string
  disabled?: boolean
  helperText?: string
  placeholder?: string
  isOptional?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  errorMessage: undefined,
  modelValue: undefined,
  isLoading: false,
  name: undefined,
  label: undefined,
  disabled: false,
  helperText: undefined,
  placeholder: undefined,
  isOptional: false,
})
const emit = defineEmits(['update:modelValue'])

const displayhelperText = computed(() => (props.errorMessage ? props.errorMessage : props.helperText))

const displayLabel = computed(() => (props.isOptional ? `${[props.label]} (Opsional)` : props.label))
</script>
