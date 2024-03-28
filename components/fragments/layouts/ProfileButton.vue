<template>
  <div>
    <Menu v-slot="{ close }" as="div" class="relative inline-block text-left w-full lg:w-auto">
      <div class="w-full flex justify-center">
        <MenuButton class="outline-none focus:outline-none">
          <NuxtImg :src="imageUrl" class="w-14 h-14 rounded-full" :alt="name" />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="lg:transform  lg:scale-95 opacity-0"
        enter-to-class="lg:transform   lg:scale-100 opacity-100"
        leave-active-class="lg:transition duration-75 ease-in"
        leave-from-class="lg:transform  lg:scale-100 opacity-100"
        leave-to-class="lg:transform  lg:scale-95 opacity-0"
      >
        <MenuItems
          class="lg:absolute right-0 w-full lg:w-auto lg:min-w-[18rem] lg:origin-top-right lg:rounded-2.5 bg-white overflow-hidden lg:shadow-[0px_12px_32px_0px_rgba(0,0,0,0.08)]"
        >
          <div class="relative">
            <div class="px-5 py-6 lg:border-[#E4E4E4] lg:border-b-solid">
              <p class="main-18px-500 lg:main-22px-500 text-[#5D596C]">{{ name }}</p>
              <p class="lg:mt-3 main-14px-300 lg:main-18px-300 text-[#5D596C]">{{ position }}</p>
            </div>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-[#EDEEF1]' : 'bg-white',
                  'flex w-full items-center p-5 main-14px-600 lg:main-18px-600 gap-2 lg:gap-5 text-[#DE3636]',
                ]"
                @click="
                  () => {
                    onLogout()
                    $emit('onClick')
                  }
                "
              >
                <img src="/icon/ic-logout.svg" class="w-4 h-3 lg:w-6 lg:h-5" alt="logout" />
                Logout
              </button>
            </MenuItem>
            <div class="absolute top-4 right-4 z-30 hidden lg:block">
              <IconButton intent="content" size="content" @on-click="close">
                <template #icon>
                  <IcClose />
                </template>
              </IconButton>
            </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import IconButton from '~/components/elements/buttons/IconButton.vue'
import IcClose from '~/components/elements/icons/IcClose.vue'
import { useProfileButton } from './ProfileButton-setup'

defineEmits(['onClick'])

const { name, position, imageUrl } = await useProfileButton()

const { onLogout } = useLogout()
</script>
