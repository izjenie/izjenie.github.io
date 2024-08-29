<template>
  <div class="relative">
    <p class="inter-14-400-alt md:inter-16-400-alt text-black">Layanan Darurat <span class="font-bold">24 jam</span></p>
    <h3 class="mt-4 merri-20-700 lg:merri-30-700 max-w-[36.25rem] text-black mb-4">
      Hubungi 119 dalam keadaan <span class="text-red-600">darurat</span> bunuh diri
    </h3>
    <p v-for="item in helpPoint" :key="item" class="text-black inter-14-400 lg:inter-18-400">{{ item }}</p>
    <p class="text-black inter-16-500 md:inter-20-500 mt-8">Apa yang terjadi saat menghubungi 119?</p>
    <ul class="flex flex-col list-disc mt-4 pl-4">
      <li v-for="item in actionItem" :key="item" class="inter-14-400 lg:inter-18-400 text-black">
        {{ item }}
      </li>
    </ul>
    <NuxtLink
      to="https://vcall-chat.mala-widiyanto.workers.dev/set-username"
      target="_blank"
      class="w-full max-w-[17.5rem] relative mt-4 block mx-auto md:mx-0"
    >
      <PrimaryCTA label="Hubungi 119 ext. 8" :is-width-parent="true">
        <template #left-icon>
          <IcPhoneWhite />
        </template>
      </PrimaryCTA>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import IcPhoneWhite from '~/components/elements/icons/IcPhoneWhite.vue'
import PrimaryCTA from '../common/PrimaryCTA.vue'

const helpPoint = [
  '✔️ Bantuan darurat jika kamu atau orang di sekitarmu ingin mengakhiri hidup',
  '✔️ Saat ada situasi yang mengancam nyawamu atau orang lain',
]

const actionItem = [
  '119 adalah nomor cepat tanggap darurat dan situasi kritis',
  'Layanan ini tidak dipungut biaya',
  'Kamu perlu menjelaskan detail informasi lokasi dan situasi terkait',
  'Jika tidak dapat tersambung, coba hubungi healing119.id atau WhatsApp kami',
]
</script>
