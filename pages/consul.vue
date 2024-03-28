<template>
  <div>
    <NuxtLayout name="landing">
      <section>
        <HeroSection />
      </section>
      <section>
        <HelpCenter :is-consul="true" :initial-active-type="initialActiveType" />
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
import HeroSection from '../components/fragments/consul/HeroSection.vue'
import HelpCenter from '../components/fragments/suicide/HelpCenter.vue'
import InformationSection from '../components/fragments/suicide/InformationSection.vue'
import StorySection from '../components/fragments/suicide/StorySection.vue'

const route = useRoute()
const { query } = route

const initialActiveType = computed(() => (query.helpType === 'whatsapp' ? 'whatsapp' : 'website'))
</script>
