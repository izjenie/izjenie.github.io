<template>
  <main class="mx-auto max-w-[125rem]">
    <div class="min-h-screen">
      <slot />
    </div>
    <ClientOnly>
      <LoadingSpinner />
    </ClientOnly>
    <ClientOnly>
      <Toaster />
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import LoadingSpinner from '~/components/fragments/layouts/LoadingSpinner.vue'
import Toaster from '~/components/fragments/layouts/Toaster.vue'
</script>
