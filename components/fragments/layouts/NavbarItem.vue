<template>
  <NuxtLink :href="href" class="p-0 no-underline">
    <div class="relative">
      <p
        :class="['m-0 inter-16-400 xl:inter-18-400', isActive ? ' text-[#007474]' : 'text-black']"
        @click="$emit('onClick')"
      >
        {{ label }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  label: string
  href: string
}
const props = defineProps<Props>()
defineEmits(['onClick'])

const route = useRoute()

const isActive = computed(() => {
  const rootUrl = '/'
  if (route.path === rootUrl && props.href === rootUrl) {
    return true
  }
  if (route.path !== rootUrl && props.href !== rootUrl) {
    return route.path.includes(props.href)
  }
})
</script>
