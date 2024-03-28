<template>
  <div>
    <div class="flex items-center border-b border-[#CACCCF] overflow-auto">
      <button
        v-for="item in consultabSelectorItem"
        :key="item.value"
        :class="[
          'p-2 md:w-1/4 min-w-[12rem] inter-16-700 md:inter-18-700',
          item.value === consulType.value
            ? 'text-[#0D80A0] border-b border-[#0D80A0]'
            : 'text-[#313336]/45 border-b border-transparent',
        ]"
        @click="consulType = item"
      >
        {{ item.label }}
      </button>
    </div>
    <ul class="flex flex-col list-disc mt-4 pl-4">
      <li
        v-for="item in actionItem"
        :key="item"
        class="inter-14-400-alt md:inter-16-400-alt !leading-[1.75] text-black"
      >
        {{ item }}
      </li>
    </ul>
    <div class="flex flex-col md:flex-row gap-4 md:justify-between md:items-center mt-4 md:mt-6">
      <NuxtLink :to="isWebsite ? '/' : '/'" target="_blank" class="w-full max-w-[17.5rem] relative">
        <PrimaryCTA :label="isWebsite ? 'Call via healing119.id' : 'Chat via Whatsapp'" :is-width-parent="true">
        </PrimaryCTA>
      </NuxtLink>
      <NuxtLink
        :to="isWebsite ? '/consul' : '/consul?helpType=whatsapp'"
        class="flex items-center gap-2 self-end md:self-auto"
      >
        <p class="text-[#03799A] inter-14-400-alt md:inter-18-400">Pelajari selengkapnya -></p>
      </NuxtLink>
    </div>
    <div class="p-2 md:p-5 rounded-md mt-8 md:rounded-xl bg-[#F6F6F4] flex flex-col items-center">
      <p class="text-center inter-14-400-alt md:inter-16-400-alt text-black">
        Jika belum dapat tersambung, coba hubungi
      </p>
      <ul class="flex flex-col items-center gap-2 md:gap-9 justify-center md:flex-row mt-2.5">
        <li v-for="item in fallbackAction" :key="item.label">
          <NuxtLink :to="item.href" target="_blank" class="flex items-center gap-2 md:gap-4">
            <img :src="item.icon" :alt="item.label" class="h-6" />
            <p class="underline inter-14-700 md:inter-16-700 text-[#03799A]">{{ item.label }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ConsulTabEnum } from '~/utils/global-type'
import PrimaryCTA from '../common/PrimaryCTA.vue'

interface ConsultabSelectorItemType {
  label: string
  value: ConsulTabEnum
}

interface FallbackActionItemType {
  label: string
  href: string
  icon: string
}

const consultabSelectorItem: ConsultabSelectorItemType[] = [
  {
    label: 'Call via Website',
    value: 'webiste',
  },
  {
    label: 'Chat via WhatsApp',
    value: 'whatsapp',
  },
]

const consulType = ref<ConsultabSelectorItemType>(consultabSelectorItem[0])

const websiteActionItem = [
  'Kamu tersambung dengan konselor di website healing119.com',
  'Semua keluh-kesahmu akan kami dengarkan dengan tulus',
  'Tempat bercerita yang aman dan nyaman',
  'Membantumu menemukan jalan keluar',
]

const whatsappActionItem = [
  'Kamu tersambung dengan konselor di Whatsapp',
  'Semua keluh-kesahmu akan kami dengarkan dengan tulus',
  'Tempat bercerita yang aman dan nyaman',
  'Membantumu menemukan jalan keluar',
]
const websiteFallbackActions: FallbackActionItemType[] = [
  {
    label: 'Chat via WhatsApp',
    href: '/',
    icon: '/icon/suicide/ic-wa.svg',
  },
  {
    label: 'Call via 119',
    href: '/',
    icon: '/icon/suicide/ic-phone.svg',
  },
]

const whatsappFallbackActions: FallbackActionItemType[] = [
  {
    label: 'Chat via WhatsApp',
    href: '/',
    icon: '/icon/suicide/ic-wa.svg',
  },
  {
    label: 'Krisis Bunuh Diri 119',
    href: '/',
    icon: '/icon/suicide/ic-phone.svg',
  },
]

const actionItem = computed(() => (consulType.value.value === 'webiste' ? websiteActionItem : whatsappActionItem))
const isWebsite = computed(() => consulType.value.value === 'webiste')

const fallbackAction = computed(() =>
  consulType.value.value === 'webiste' ? websiteFallbackActions : whatsappFallbackActions,
)
</script>
