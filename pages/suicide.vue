<template>
  <div>
    <NuxtLayout name="landing">
      <section>
        <HeroSection />
      </section>
      <section>
        <HelpCenter />
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/fragments/suicide/HeroSection.vue'
import HelpCenter from '../components/fragments/suicide/HelpCenter.vue'
</script>
