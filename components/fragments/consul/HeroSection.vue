<template>
  <div class="pl-4 lg:pl-12 xl:pl-[6.625rem] flex flex-col gap-20 lg:gap-10 md:flex-row md:justify-between">
    <div class="relative pr-4 md:pr-0">
      <div class="mt-32">
        <Breadcrumb :links="links" />
      </div>
      <h1 class="text-[#007474] mt-8 merri-32-700 lg:merri-52-700">Saya butuh teman bercerita</h1>
      <p class="mt-6 text-black inter-14-400-alt !leading-[1.5] lg:inter-20-400">
        Ceritakan semua masalahmu dengan konselor yang selalu siaga selama 24 jam. Jika butuh penanganan lebih lanjut,
        kamu bisa mendapatkan rujukan kepada psikolog, psikiater atau perawat spesialis jiwa secara offline.
      </p>
    </div>
    <NuxtImg src="/image/consul-hero.png" class="w-[31.25rem] mt-[-4rem] self-end" alt="background" format="webp" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '../layouts/Breadcrumb.vue'

const links = [
  {
    label: 'Beranda',
    href: '/',
  },
  {
    label: 'Saya butuh teman bercerita',
    href: '/consul',
  },
]
</script>
