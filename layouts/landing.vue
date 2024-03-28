<template>
  <main class="mx-auto max-w-[125rem]">
    <Navbar />
    <div class="h-[5.5rem] md:h-24"></div>
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/fragments/layouts/Navbar.vue'
import Footer from '~/components/fragments/layouts/Footer.vue'
</script>
