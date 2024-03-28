<template>
  <div class="fixed top-0 z-40 w-full mx-auto max-w-[125rem]">
    <div class="relative z-10 flex items-center justify-between px-4 py-5 md:px-7 bg-white">
      <NuxtLink to="/" class="no-underline">
        <NuxtImg src="/image/home/logo-kemkes-color.png" class="w-[13.875rem]" alt="kemkes" />
      </NuxtLink>
      <ul class="hidden items-center gap-8 lg:flex xl:gap-16 list-none p-0">
        <li v-for="item in navbarItems" :key="item.href" class="relative list-none p-0">
          <NavbarItem :href="item.href" :label="item.label" />
        </li>
      </ul>
      <div class="lg:flex items-center gap-10 xl:pr-10 hidden">
        <NuxtImg src="/image/home/logo-rsmj.png" class="w-[5.125rem]" alt="rsmj" />
        <NuxtImg src="/image/home/logo-germas.png" class="w-[5.125rem]" alt="germas" />
      </div>
      <div class="lg:hidden">
        <IconButton intent="content" size="content" @on-click="setToggle">
          <template #icon>
            <div class="text-black">
              <IcHamburger />
            </div>
          </template>
        </IconButton>
      </div>
    </div>
    <div
      :class="[
        `absolute duration-150 left-0 top-0 h-screen overflow-scroll flex  flex-col justify-between gap-6
    w-screen bg-white transition-transform lg:hidden mx-auto max-w-[125rem]`,
        isOpen ? 'translate-y-0' : '-translate-y-full',
      ]"
    >
      <div class="w-full mt-[5rem]">
        <ul class="mt-8 flex flex-col gap-4 px-4 p-0">
          <li v-for="item in navbarItems" :key="item.href" class="relative list-none p-0">
            <NavbarItem :key="item.label" :label="item.label" :href="item.href" @on-click="setToggle" />
          </li>
        </ul>
      </div>
      <div class="flex justify-center mb-10 mt-36">
        <div class="flex items-center gap-10">
          <NuxtImg src="/image/home/logo-rsmj.png" class="w-[5.125rem]" alt="rsmj" />
          <NuxtImg src="/image/home/logo-germas.png" class="w-[5.125rem]" alt="germas" />
        </div>
      </div>
    </div>
    <BannerNotif />
  </div>
</template>

<script setup lang="ts">
import { navbarItems } from '~/data/dashboard-layout'
import IconButton from '~/components/elements/buttons/IconButton.vue'
import IcHamburger from '~/components/elements/icons/IcHamburger.vue'
import BannerNotif from './BannerNotif.vue'

import NavbarItem from './NavbarItem.vue'

const { isOpen, setToggle } = useToggle()
</script>
