<template>
  <div>
    <NuxtLayout name="landing">
      <section>
        <HeroSection />
      </section>
      <section class="mt-20">
        <HelpCenter />
      </section>
      <section class="mt-16 lg:mt-24">
        <InformationSection />
      </section>
      <section class="mt-16 lg:mt-20">
        <StorySection />
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/fragments/suicide/HeroSection.vue'
import HelpCenter from '../components/fragments/suicide/HelpCenter.vue'
import InformationSection from '../components/fragments/suicide/InformationSection.vue'
import StorySection from '../components/fragments/suicide/StorySection.vue'
</script>
