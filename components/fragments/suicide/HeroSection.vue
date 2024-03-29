<template>
  <div class="pl-4 lg:pl-12 xl:pl-[6.625rem] flex flex-col gap-10 md:flex-row md:justify-between">
    <div class="relative pr-4 md:pr-0">
      <div class="mt-32">
        <Breadcrumb :links="links" />
      </div>
      <h1 class="text-[#007474] mt-8 merri-32-700 lg:merri-52-700">
        Kamu berharga,
        <span class="block"> untukmu kami ada </span>
      </h1>
      <p class="mt-6 text-black inter-14-400-alt !leading-[1.5] lg:inter-20-400 max-w-[40rem]">
        Akan selalu ada secercah cahaya dan harapan dalam ceritamu. Jangan menyerah
      </p>
    </div>
    <NuxtImg src="/image/suicide-hero.png" class="w-[31.25rem] self-end" alt="background" format="webp" />
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
    label: 'Saya merasa ingin mengakhiri hidup',
    href: '/suicide',
  },
]
</script>
