<template>
  <div class="w-full min-h-screen p-4 lg:p-12 flex flex-col items-center justify-center relative">
    <NuxtImg
      src="/image/home/background.png"
      class="absolute top-0 left-0 mx-auto w-full h-full"
      alt="background"
      format="webp"
    />
    <div class="w-full max-w-[55rem] flex flex-col items-center relative z-10">
      <h1 class="merri-32-400 lg:merri-52-400 text-center text-[#003B4B]">Apa yang bisa kami bantu hari ini?</h1>
      <div class="flex flex-col gap-6 mt-16 lg:mt-[4.875rem]">
        <CTAHome
          title="Saya merasa ingin mengakhiri hidup ->"
          subtitle="Hubungi 119 ext. 8 untuk darurat bunuh diri"
          @on-click="() => handleOpenDialog('suicide')"
        />
        <CTAHome
          title="Saya butuh cerita dengan seseorang ->"
          subtitle="Konseling via healing119.id atau WhatsApp"
          @on-click="() => handleOpenDialog('consul')"
        />
      </div>
      <p class="inter-14-400-alt md:inter-16-400-alt mt-20 max-w-[25rem] text-center text-white">
        Layanan Hotline Kesehatan Mental dan Bunuh Diri Kementerian Kesehatan
      </p>
      <NuxtImg src="/image/home/logo-kemkes-white.png" class="w-[8.5rem] mt-7" alt="kemkes" />
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative z-50" @close="handleCloseModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center text-center">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogPanel
                class="w-full max-w-[90vw] md:max-w-[50rem] rounded-xl transform md:rounded-[1.5rem] overflow-hidden bg-white transition-all"
              >
                <HomeDialogContent :dialog-type="dialogType" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import type { DialogTypeEnum } from '~/utils/global-type'
import HomeDialogContent from './HomeDialogContent.vue'
import CTAHome from './CTAHome.vue'

const { isOpen, closeModal, openModal } = useModal()
const dialogType = ref<DialogTypeEnum>()

const handleOpenDialog = (val: DialogTypeEnum) => {
  dialogType.value = val
  openModal()
}

const handleCloseModal = () => {
  closeModal()
  setTimeout(() => {
    dialogType.value = undefined
  }, 300)
}
</script>
