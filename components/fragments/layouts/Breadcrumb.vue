<template>
  <div class="flex items-center gap-2">
    <div v-for="(item, index) in links" :key="item.label" class="flex items-center gap-2">
      <NuxtLink
        :to="item.href"
        :class="[
          index + 1 < links.length
            ? 'text-[#00000073] inter-14-400-alt lg:inter-20-400'
            : 'text-[#03799A] inter-14-400-alt lg:inter-20-400',
          'no-underline',
        ]"
      >
        {{ item.label }}
      </NuxtLink>
      <p v-if="index + 1 < links.length" class="my-0 text-[#00000073] inter-14-400-alt lg:inter-20-400">/</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LinkType {
  label: string
  href: string
}

interface Props {
  links: LinkType[]
}
defineProps<Props>()
// const links = [
//   {
//     label: 'News',
//     href: '//news',
//   },
//   {
//     label: 'Infraco',
//     href: '//news/infraco',
//   },
// ]
</script>
