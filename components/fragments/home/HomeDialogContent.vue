<template>
  <div class="px-6 py-4 md:px-12 md:py-8 text-left">
    <p class="inter-14-400-alt md:inter-16-400-alt text-black">Layanan Darurat <span class="font-bold">24 jam</span></p>
    <h3 class="inter-18-700 md:inter-30-700 text-black mt-4">
      {{
        isSuicide
          ? 'Anda akan terhubung dengan layanan darurat bunuh diri'
          : 'Anda akan terhubung dengan layanan konseling'
      }}
      <span v-if="isSuicide" class="text-[#03799A]">
        <NuxtLink to="tel:119" target="_blank" class="no-underline"> 119 ext. 8 </NuxtLink>
      </span>
      <span v-else class="text-[#03799A]">
        <NuxtLink to="https://www.healing119.id/" target="_blank" class="no-underline"> Website </NuxtLink>
        <span class="text-black"> atau </span>
        <NuxtLink
          to="https://api.whatsapp.com/send/?phone=6281380073120&text=halo%20kak%2C%20saya%20ingin%20bercerita%20mengenai...&type=phone_number&app_absent=0"
          target="_blank"
          class="no-underline"
        >
          WhatsApp
        </NuxtLink>
      </span>
    </h3>
    <p class="mt-4 inter-16-400-alt !leading-[1.5] md:inter-20-400 text-black mb-9">
      {{
        isSuicide
          ? 'Bantuan darurat jika kamu atau orang di sekitarmu merasa ingin mengakhiri hidup'
          : 'Konseling jika Anda mengalami gejala kecemasan, putus asa, rendah diri, hampa, dan tidak berharga secara berlebih'
      }}
    </p>
    <div v-if="isSuicide">
      <p class="text-black inter-16-500 md:inter-20-500">Apa yang terjadi saat menghubungi 119?</p>
      <ul class="flex flex-col list-disc mt-4 pl-4">
        <li
          v-for="item in suicideActionItem"
          :key="item"
          class="inter-14-400-alt md:inter-16-400-alt !leading-[1.75] text-black"
        >
          {{ item }}
        </li>
      </ul>
      <div class="flex flex-col md:flex-row gap-4 md:justify-between md:items-center mt-4 md:mt-6">
        <NuxtLink
          to="https://vcall-chat.mala-widiyanto.workers.dev/set-username"
          target="_blank"
          class="w-full max-w-[17.5rem] relative"
        >
          <PrimaryCTA label="Hubungi 119 ext. 8" :is-width-parent="true">
            <template #left-icon>
              <IcPhoneWhite />
            </template>
          </PrimaryCTA>
        </NuxtLink>
        <NuxtLink to="/suicide" class="flex items-center gap-2 self-end md:self-auto">
          <p class="text-[#03799A] inter-14-400-alt md:inter-18-400">Pelajari selengkapnya -></p>
        </NuxtLink>
      </div>
      <div class="p-2 md:p-5 rounded-md mt-8 md:rounded-xl bg-[#F6F6F4] flex flex-col items-center">
        <p class="text-center inter-14-400-alt md:inter-16-400-alt text-black">
          Jika belum dapat tersambung, coba hubungi
        </p>
        <ul class="flex flex-col items-center gap-2 md:gap-9 justify-center md:flex-row mt-2.5">
          <li v-for="item in suicideFallbackActions" :key="item.label">
            <NuxtLink :to="item.href" target="_blank" class="flex items-center gap-2 md:gap-4">
              <img :src="item.icon" :alt="item.label" class="h-6" />
              <p class="underline inter-14-700 md:inter-16-700 text-[#03799A]">{{ item.label }}</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ConsulInnerDialog v-else />
  </div>
</template>

<script setup lang="ts">
import type { DialogTypeEnum } from '~/utils/global-type'
import IcPhoneWhite from '~/components/elements/icons/IcPhoneWhite.vue'
import ConsulInnerDialog from './ConsulInnerDialog.vue'
import PrimaryCTA from '../common/PrimaryCTA.vue'

interface Props {
  dialogType?: DialogTypeEnum
}

interface FallbackActionItemType {
  label: string
  href: string
  icon: string
}

const props = defineProps<Props>()
const suicideActionItem = [
  '119 adalah nomor cepat tanggap darurat dan situasi kritis',
  'Layanan ini tidak dipungut biaya',
  'Kamu perlu menjelaskan detail informasi lokasi dan situasi terkait',
]

// const consulActionItem = [
//   'Kamu tersambung dengan konselor di website healing119.com',
//   'Semua keluh-kesahmu akan kami dengarkan dengan tulus',
//   'Tempat bercerita yang aman dan nyaman',
//   'Membantumu menemukan jalan keluar',
// ]
const suicideFallbackActions: FallbackActionItemType[] = [
  {
    label: 'Chat WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=6281380073120&text=halo%20kak%2C%20saya%20ingin%20bercerita%20mengenai...&type=phone_number&app_absent=0',
    icon: '/icon/suicide/ic-wa.svg',
  },
  {
    label: 'Chat healing119.id',
    href: 'https://vcall-chat.mala-widiyanto.workers.dev/set-username',
    icon: '/icon/suicide/ic-chat.svg',
  },
]

// const actionItem = computed(() => (props.dialogType === 'suicide' ? suicideActionItem : consulActionItem))
const isSuicide = computed(() => props.dialogType === 'suicide')
</script>
