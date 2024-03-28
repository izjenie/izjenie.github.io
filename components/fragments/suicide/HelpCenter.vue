<template>
  <div class="relative px-4 lg:px-12 xl:px-[6.625rem] flex flex-col gap-4 lg:flex-row lg:gap-[5.5rem]">
    <ul class="flex flex-row gap-4 lg:flex-col lg:gap-6 overflow-auto lg:flex-shrink-0">
      <li v-for="item in helpCenterSelectorItem" :key="item.title" class="relative min-w-[16rem] w-full lg:w-[22rem]">
        <button
          :class="[
            'w-full items-center p-4 lg:p-6 text-left flex gap-4 lg:gap-7 rounded-lg lg:rounded-xl border',
            item.value === helpCenterType ? 'bg-[#EEF9F9] border-transparent' : 'bg-white  border-[#00000026]',
          ]"
          @click="helpCenterType = item.value"
        >
          <img :src="item.icon" :alt="item.title" class="w-6" />
          <div>
            <p
              :class="['inter-18-700 lg:inter-24-700', item.value === helpCenterType ? 'text-[#017D9F]' : 'text-black']"
            >
              {{ item.title }}
            </p>
            <p class="inter-16-400-alt lg:inter-20-400 text-black mt-2">
              {{ item.subtitle }}
            </p>
          </div>
        </button>
      </li>
    </ul>
    <div class="relative">
      <HelpcenterContentWeb v-if="helpCenterType === 'website'" />
      <HelpcenterContentWhatsapp v-else-if="helpCenterType === 'whatsapp'" />
      <HelpcenterContentPhone v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import HelpcenterContentPhone from './HelpCenterContentPhone.vue'
import HelpcenterContentWeb from './HelpCenterContentWeb.vue'
import HelpcenterContentWhatsapp from './HelpCenterContentWhatsapp.vue'

type HelpCenterTabEnum = 'phone' | 'website' | 'whatsapp'

interface HelpCenterSelectorItemType {
  title: string
  value: HelpCenterTabEnum
  icon: string
  subtitle: string
}

interface Props {
  initialActiveType?: HelpCenterTabEnum
  isConsul?: boolean
}
const props = defineProps<Props>()

const suicideHelpCenterSelectorItem: HelpCenterSelectorItemType[] = [
  {
    title: 'Hubungi 119',
    value: 'phone',
    subtitle: 'Layanan darurat 24 jam',
    icon: '/icon/suicide/ic-phone-alt.svg',
  },
  {
    title: 'Hubungi healing.id',
    value: 'website',
    subtitle: 'Konseling via Website',
    icon: '/icon/suicide/ic-smartphone.svg',
  },
  {
    title: 'Chat WhatsApp',
    value: 'whatsapp',
    subtitle: 'Konseling via WhatsApp',
    icon: '/icon/suicide/ic-chat-alt.svg',
  },
]
const consulHelpCenterSelectorItem: HelpCenterSelectorItemType[] = [
  {
    title: 'Hubungi healing.id',
    value: 'website',
    subtitle: 'Konseling via Website',
    icon: '/icon/suicide/ic-smartphone.svg',
  },
  {
    title: 'Chat WhatsApp',
    value: 'whatsapp',
    subtitle: 'Konseling via WhatsApp',
    icon: '/icon/suicide/ic-chat-alt.svg',
  },
]

const helpCenterType = ref<HelpCenterTabEnum>(props.initialActiveType ?? 'phone')
const helpCenterSelectorItem = computed(() =>
  props.isConsul ? consulHelpCenterSelectorItem : suicideHelpCenterSelectorItem,
)
</script>
